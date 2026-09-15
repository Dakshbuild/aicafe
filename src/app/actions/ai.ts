"use server";

import { GoogleGenAI } from "@google/genai";
import { menuData } from "@/data/menu";

// Initialize Gemini Client
// We won't crash if the key is missing; we'll fallback to Demo Mode in the action itself.
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export type RecommendationPreferences = {
  budget: number;
  dietary: string; // "Any", "Vegetarian", "Vegan", "Dairy-Free", "Gluten-Free"
  mood: string; // "Hot Drink", "Cold Drink", "Sweet", "Savory", "Filling"
};

export type AIRecommendationResult = {
  itemIds: string[];
  totalPrice: number;
  explanation: string;
  isDemoFallback: boolean;
};

export async function generateSmartRecommendation(prefs: RecommendationPreferences): Promise<AIRecommendationResult> {
  // If API key is available, use Gemini
  if (ai) {
    try {
      const menuContext = JSON.stringify(menuData.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        vegetarian: item.vegetarian,
        tags: item.tags,
        allergens: item.allergens
      })));

      const prompt = `
        You are Lumina AI, a smart cafe assistant.
        Given the following menu items:
        ${menuContext}
        
        And the user's preferences:
        - Budget: ₹${prefs.budget}
        - Dietary: ${prefs.dietary}
        - Mood/Craving: ${prefs.mood}
        
        Suggest 1 or 2 items that best fit the preferences and budget.
        Important rules:
        - The combined price MUST NOT exceed the budget.
        - You MUST respect the dietary preference (e.g., if Vegetarian, do not suggest non-veg).
        - DO NOT invent items that are not in the menu.
        - Do not promise medical or allergy safety.

        Return your response ONLY as a JSON string with this exact format:
        {
          "itemIds": ["id1", "id2"],
          "totalPrice": 123,
          "explanation": "I recommended X and Y because..."
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const responseText = response.text || "";
      // Strip markdown code block if present
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      const parsed = JSON.parse(cleanJson);
      
      return {
        itemIds: parsed.itemIds,
        totalPrice: parsed.totalPrice,
        explanation: parsed.explanation,
        isDemoFallback: false
      };
    } catch (error) {
      console.error("Gemini API Error:", error);
      // Fall through to fallback
    }
  }

  // Fallback / Demo Mode Logic
  console.log("Using AI Demo Fallback (No API Key or API Error)");
  
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
  
  let validItems = menuData.filter(item => item.price <= prefs.budget);
  
  if (prefs.dietary === "Vegetarian" || prefs.dietary === "Vegan") {
    validItems = validItems.filter(item => item.vegetarian);
  } else if (prefs.dietary === "Dairy-Free") {
    validItems = validItems.filter(item => !item.allergens.includes("Dairy"));
  }

  // Simple fuzzy match for mood
  if (prefs.mood === "Hot Drink") {
    validItems = validItems.filter(item => item.tags.includes("Hot") || item.category === "Coffee" || item.category === "Tea");
  } else if (prefs.mood === "Cold Drink") {
    validItems = validItems.filter(item => item.tags.includes("Cold") || item.category === "Cold Beverages");
  } else if (prefs.mood === "Sweet") {
    validItems = validItems.filter(item => item.tags.includes("Sweet") || item.category === "Desserts");
  } else if (prefs.mood === "Savory") {
    validItems = validItems.filter(item => item.tags.includes("Savory") || item.category === "Snacks" || item.category === "Main Dishes");
  }

  if (validItems.length === 0) {
    return {
      itemIds: [],
      totalPrice: 0,
      explanation: "I couldn't find an exact match for your strict preferences within the budget. Try adjusting your filters!",
      isDemoFallback: true
    };
  }

  // Just pick the most expensive valid item under budget to maximize budget
  validItems.sort((a, b) => b.price - a.price);
  const selectedItem = validItems[0];

  return {
    itemIds: [selectedItem.id],
    totalPrice: selectedItem.price,
    explanation: `Based on your budget of ₹${prefs.budget} and craving for something ${prefs.mood.toLowerCase()}, I recommend the ${selectedItem.name}.`,
    isDemoFallback: true
  };
}

export async function processChatbotMessage(history: {role: "user"|"assistant", content: string}[], message: string): Promise<string> {
  if (ai) {
    try {
      const menuContext = JSON.stringify(menuData.map(item => ({
        name: item.name,
        price: item.price,
        vegetarian: item.vegetarian,
        allergens: item.allergens,
        description: item.description
      })));

      const systemInstruction = `
        You are Lumina AI, a smart cafe assistant.
        Menu Data: ${menuContext}
        
        Rules:
        - NEVER claim an unavailable menu item exists.
        - NEVER invent prices. Use the prices from the Menu Data.
        - NEVER promise that food is completely allergy-safe. Add a disclaimer to check with staff.
        - Avoid medical advice.
        - Avoid requesting personal data.
        - Ground your responses strictly in the provided menu data.
        - Keep answers concise and friendly.
      `;

      const prompt = `
        System Instruction: ${systemInstruction}
        
        Conversation History:
        ${history.map(m => `${m.role}: ${m.content}`).join("\n")}
        
        User: ${message}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return response.text || "I'm having trouble processing that right now.";
    } catch (error) {
      console.error("Gemini API Error in Chat:", error);
      // Fall through to fallback
    }
  }

  // Fallback Chatbot Logic
  await new Promise(resolve => setTimeout(resolve, 1000));
  return "(Demo Mode) I am currently running without an API key, so my knowledge is limited. Please provide a GEMINI_API_KEY in the .env file to enable my full AI capabilities! For now, try our Classic Espresso.";
}
