# Designing a Café with AI — The Café Website (UPES AI Project)

Welcome to the **Lumina Café** repository. This is a full-stack Next.js web application built for the UPES AI course project.

The goal of this project is not just to build a static café website, but to demonstrate **meaningful and responsible use of Artificial Intelligence** in a commercial setting. It emphasizes human oversight, verification, and transparency.

## 🚀 Features

- **Premium UI/UX:** Built with Next.js, Tailwind CSS v4, and Framer Motion for smooth, presentation-ready aesthetics.
- **Smart Recommendations Engine:** Users can input budget, mood, and dietary preferences, and the AI suggests a curated menu combination.
- **Floating AI Assistant:** A globally accessible chatbot that can answer questions grounded *only* in the café's dataset.
- **Human Override Flow:** AI suggestions can be accepted, modified, or rejected by humans, visually demonstrating that AI assists while humans decide.
- **Trust but Verify Framework:** Dedicated pages detailing AI errors caught during development and how biases were corrected.
- **AI Integrity Log:** A transparent ledger of AI interactions, verifications, and status outcomes.
- **Responsible AI Guardrails:** Built-in safeguards against hallucination, medical claims, and data privacy breaches.
- **Presentation Mode:** A dedicated UI `/presentation` for easy navigation during the university viva.

## 🏗️ Architecture & Tech Stack

- **Frontend:** Next.js (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, Framer Motion, Lucide React
- **AI Service Layer:** `@google/genai` (Google Gemini API) via Next.js Server Actions.
- **Data Layer:** A clean local/mock data layer (`src/data/menu.ts`) designed to be easily swappable with Supabase/PostgreSQL in the future.
- **State Management:** React Context (`CartContext.tsx`) for global cart state.

## 📂 Folder Structure

```
smart-cafe-ai/
├── src/
│   ├── app/                 # Next.js App Router pages (Home, About, Menu, Cart, etc.)
│   │   ├── actions/         # Server Actions (AI Logic)
│   │   └── ...
│   ├── components/          # Reusable React components (Navbar, Footer, Chatbot)
│   ├── context/             # React Context for global state management
│   ├── data/                # Mock dataset (menu.ts)
│   └── lib/                 # Utility functions (utils.ts for Tailwind clsx)
├── public/                  # Static assets
└── ...                      # Config files (package.json, next.config, etc.)
```

## ⚙️ How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root directory based on `.env.example`:
   ```bash
   # Add your Gemini API key here to enable live AI responses.
   # If left blank, the application safely falls back to "Demo Mode".
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **View the App:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤖 How AI Works (and Guardrails)

The AI functionality is primarily housed in `src/app/actions/ai.ts`.

### 1. Grounding (Context Injection)
The AI is strictly grounded in the menu dataset. When generating a response, the backend serializes the menu array and injects it into the system prompt. The AI is explicitly instructed *never* to invent items or prices outside of this context.

### 2. Demo Fallback Mode
If an API key is not provided (or if the API fails), the application safely catches the error and executes a programmatic fallback algorithm. This ensures the project remains presentation-ready even without active API credentials.

### 3. Responsible AI Safeguards
- **No Personal Data:** The chatbot and recommendation engine do not ask for or store PII (Personally Identifiable Information).
- **No Medical Claims:** Prompts explicitly forbid the AI from promising complete allergen safety or providing nutritional diagnoses.
- **Human-in-the-Loop:** All AI recommendation flows end with a human verification step (Accept / Reject / Modify).

## 🔮 Future Improvements (Scalability)

- **Database Migration:** Replace `src/data/menu.ts` with Supabase to allow dynamic menu updates.
- **Authentication:** Add NextAuth.js or Supabase Auth for user order history.
- **Payment Gateway:** Integrate Stripe/Razorpay for actual checkout (currently simulated).
- **RAG (Retrieval-Augmented Generation):** Implement a vector database for the chatbot to handle a massive, changing menu more efficiently than basic context injection.

---
*Created for the UPES AI Course Project by the Lumina Café Team.*
