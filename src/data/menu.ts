export type DietaryPreference = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'None';

export type MenuItem = {
  id: string;
  name: string;
  category: 'Coffee' | 'Tea' | 'Cold Beverages' | 'Breakfast' | 'Snacks' | 'Main Dishes' | 'Desserts' | 'Mocktails' | 'Pizza' | 'Pasta';
  description: string;
  price: number;
  vegetarian: boolean;
  ingredients: string[];
  allergens: string[];
  availability: boolean;
  image: string;
  tags: string[];
};

export const menuData: MenuItem[] = [
  {
    id: "c1",
    name: "Classic Espresso",
    category: "Coffee",
    description: "A strong, concentrated shot of our signature Lumina dark roast.",
    price: 120,
    vegetarian: true,
    ingredients: ["Espresso Beans", "Water"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80",
    tags: ["Hot", "Strong", "Classic"]
  },
  {
    id: "c2",
    name: "Oat Milk Cappuccino",
    category: "Coffee",
    description: "Rich espresso topped with steamed oat milk and a deep layer of foam.",
    price: 180,
    vegetarian: true,
    ingredients: ["Espresso", "Oat Milk"],
    allergens: ["Gluten"],
    availability: true,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80",
    tags: ["Hot", "Vegan-friendly", "Dairy-Free"]
  },
  {
    id: "c3",
    name: "Iced Caramel Macchiato",
    category: "Cold Beverages",
    description: "Espresso combined with vanilla-flavored syrup, milk and caramel drizzle over ice.",
    price: 220,
    vegetarian: true,
    ingredients: ["Espresso", "Milk", "Vanilla Syrup", "Caramel Drizzle", "Ice"],
    allergens: ["Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    tags: ["Cold", "Sweet"]
  },
  {
    id: "s1",
    name: "Avocado Toast",
    category: "Breakfast",
    description: "Mashed avocado on sourdough bread, topped with cherry tomatoes and microgreens.",
    price: 250,
    vegetarian: true,
    ingredients: ["Sourdough Bread", "Avocado", "Cherry Tomatoes", "Olive Oil", "Microgreens", "Sea Salt"],
    allergens: ["Gluten"],
    availability: true,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&q=80",
    tags: ["Healthy", "Vegan-friendly"]
  },
  {
    id: "s2",
    name: "Truffle Mushroom Croissant",
    category: "Snacks",
    description: "Buttery, flaky croissant filled with roasted mushrooms and truffle cream.",
    price: 190,
    vegetarian: true,
    ingredients: ["Flour", "Butter", "Mushrooms", "Truffle Oil", "Cream", "Garlic"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=500&q=80",
    tags: ["Savory", "Pastry"]
  },
  {
    id: "m1",
    name: "Grilled Chicken Pesto Panini",
    category: "Main Dishes",
    description: "Grilled chicken breast, mozzarella, roasted red peppers, and basil pesto on ciabatta.",
    price: 320,
    vegetarian: false,
    ingredients: ["Ciabatta", "Chicken Breast", "Mozzarella", "Red Peppers", "Basil Pesto"],
    allergens: ["Gluten", "Dairy", "Nuts"],
    availability: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80",
    tags: ["Savory", "Filling"]
  },
  {
    id: "d1",
    name: "Matcha Cheesecake",
    category: "Desserts",
    description: "Creamy cheesecake infused with premium Japanese matcha green tea on a graham cracker crust.",
    price: 240,
    vegetarian: true,
    ingredients: ["Cream Cheese", "Sugar", "Matcha Powder", "Graham Crackers", "Butter", "Eggs"],
    allergens: ["Dairy", "Gluten", "Eggs"],
    availability: true,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
    tags: ["Sweet", "Signature"]
  },
  {
    id: "b1",
    name: "Mango Passionfruit Smoothie",
    category: "Cold Beverages",
    description: "Refreshing blend of fresh mango, passionfruit, and a splash of coconut water.",
    price: 210,
    vegetarian: true,
    ingredients: ["Mango", "Passionfruit", "Coconut Water", "Ice"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80",
    tags: ["Cold", "Fruity", "Vegan-friendly", "Dairy-Free"]
  },
  {
    id: "c4",
    name: "Nitro Cold Brew",
    category: "Coffee",
    description: "Cold brew coffee infused with nitrogen for a sweet flavor and cascading, velvety crema.",
    price: 190,
    vegetarian: true,
    ingredients: ["Cold Brew Coffee", "Nitrogen"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80",
    tags: ["Cold", "Strong", "Smooth"]
  },
  {
    id: "t1",
    name: "Earl Grey Lavender Tea",
    category: "Tea",
    description: "Classic Earl Grey black tea elevated with hints of soothing lavender and steamed milk.",
    price: 160,
    vegetarian: true,
    ingredients: ["Earl Grey Tea", "Lavender", "Milk"],
    allergens: ["Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1596450514735-111a2fea026b?w=500&q=80",
    tags: ["Hot", "Floral", "Soothing"]
  },
  {
    id: "m2",
    name: "Vegan Buddha Bowl",
    category: "Main Dishes",
    description: "Quinoa, roasted sweet potatoes, crispy chickpeas, kale, and a tahini lemon dressing.",
    price: 290,
    vegetarian: true,
    ingredients: ["Quinoa", "Sweet Potato", "Chickpeas", "Kale", "Tahini", "Lemon"],
    allergens: ["Sesame"],
    availability: true,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80",
    tags: ["Healthy", "Vegan", "Gluten-Free"]
  },
  {
    id: "d2",
    name: "Dark Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm, rich chocolate cake with a molten chocolate center, served with vanilla bean ice cream.",
    price: 280,
    vegetarian: true,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Sugar", "Vanilla Ice Cream"],
    allergens: ["Dairy", "Gluten", "Eggs"],
    availability: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?w=500&q=80",
    tags: ["Sweet", "Decadent", "Hot"]
  },
  {
    id: "c5",
    name: "Flat White",
    category: "Coffee",
    description: "A smooth blend of micro-foamed milk poured over a double shot of espresso.",
    price: 160,
    vegetarian: true,
    ingredients: ["Espresso", "Milk"],
    allergens: ["Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80",
    tags: ["Hot", "Smooth", "Classic"]
  },
  {
    id: "c6",
    name: "Pour Over V60",
    category: "Coffee",
    description: "Single-origin beans manually brewed to highlight delicate floral and fruity notes.",
    price: 180,
    vegetarian: true,
    ingredients: ["Coffee Beans", "Water"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1495474472207-464a4b11f0cc?w=500&q=80",
    tags: ["Hot", "Black", "Artisan"]
  },
  {
    id: "c7",
    name: "Affogato",
    category: "Coffee",
    description: "A scoop of vanilla bean gelato drowned in a hot shot of fresh espresso.",
    price: 220,
    vegetarian: true,
    ingredients: ["Vanilla Gelato", "Espresso"],
    allergens: ["Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1594910243454-972161db0789?w=500&q=80",
    tags: ["Cold", "Dessert", "Sweet"]
  },
  {
    id: "mk1",
    name: "Virgin Mojito",
    category: "Mocktails",
    description: "A refreshing blend of fresh mint, lime juice, and sparkling water.",
    price: 180,
    vegetarian: true,
    ingredients: ["Mint", "Lime", "Sugar", "Sparkling Water"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80",
    tags: ["Cold", "Refreshing"]
  },
  {
    id: "mk2",
    name: "Tropical Sunrise",
    category: "Mocktails",
    description: "Orange juice, pineapple juice, and a splash of grenadine for a beautiful gradient.",
    price: 200,
    vegetarian: true,
    ingredients: ["Orange Juice", "Pineapple Juice", "Grenadine"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=500&q=80",
    tags: ["Cold", "Fruity", "Sweet"]
  },
  {
    id: "mk3",
    name: "Elderflower Spritz",
    category: "Mocktails",
    description: "Elderflower syrup mixed with soda water and garnished with fresh cucumber and mint.",
    price: 220,
    vegetarian: true,
    ingredients: ["Elderflower Syrup", "Soda Water", "Cucumber", "Mint"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",
    tags: ["Cold", "Floral", "Light"]
  },
  {
    id: "mk4",
    name: "Blue Lagoon",
    category: "Mocktails",
    description: "Blue curacao syrup, lemonade, and ice. A vibrant and tangy refresher.",
    price: 190,
    vegetarian: true,
    ingredients: ["Blue Curacao Syrup", "Lemonade", "Ice"],
    allergens: [],
    availability: true,
    image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=500&q=80",
    tags: ["Cold", "Sweet", "Citrus"]
  },
  {
    id: "pz1",
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, and basil.",
    price: 450,
    vegetarian: true,
    ingredients: ["Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
    tags: ["Hot", "Classic", "Savory"]
  },
  {
    id: "pz2",
    name: "Truffle Fungi Pizza",
    category: "Pizza",
    description: "White base pizza topped with wild mushrooms, truffle oil, and parmesan shavings.",
    price: 520,
    vegetarian: true,
    ingredients: ["Pizza Dough", "Mozzarella", "Wild Mushrooms", "Truffle Oil", "Parmesan"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
    tags: ["Hot", "Gourmet", "Savory"]
  },
  {
    id: "pz3",
    name: "Diavola Pizza",
    category: "Pizza",
    description: "Spicy salami, chili flakes, tomato sauce, and mozzarella on a wood-fired crust.",
    price: 480,
    vegetarian: false,
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Spicy Salami", "Chili Flakes"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
    tags: ["Hot", "Spicy", "Meat"]
  },
  {
    id: "pz4",
    name: "Pesto Burrata Pizza",
    category: "Pizza",
    description: "Fresh burrata cheese placed in the center, surrounded by cherry tomatoes and basil pesto.",
    price: 550,
    vegetarian: true,
    ingredients: ["Pizza Dough", "Pesto", "Burrata Cheese", "Cherry Tomatoes"],
    allergens: ["Gluten", "Dairy", "Nuts"],
    availability: true,
    image: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?w=500&q=80",
    tags: ["Hot", "Gourmet", "Creamy"]
  },
  {
    id: "pa1",
    name: "Truffle Mushroom Fettuccine",
    category: "Pasta",
    description: "Fettuccine pasta tossed in a rich, creamy truffle and wild mushroom sauce.",
    price: 380,
    vegetarian: true,
    ingredients: ["Fettuccine", "Mushrooms", "Truffle Cream", "Parmesan"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&q=80",
    tags: ["Hot", "Creamy", "Rich"]
  },
  {
    id: "pa2",
    name: "Penne Arrabbiata",
    category: "Pasta",
    description: "Penne pasta in a fiery tomato and garlic sauce, garnished with fresh parsley.",
    price: 320,
    vegetarian: true,
    ingredients: ["Penne", "Tomato Sauce", "Garlic", "Chili", "Parsley"],
    allergens: ["Gluten"],
    availability: true,
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80",
    tags: ["Hot", "Spicy", "Vegan-friendly"]
  },
  {
    id: "pa3",
    name: "Creamy Pesto Fusilli",
    category: "Pasta",
    description: "Fusilli pasta coated in a vibrant basil pesto cream sauce with pine nuts.",
    price: 350,
    vegetarian: true,
    ingredients: ["Fusilli", "Basil Pesto", "Cream", "Pine Nuts", "Parmesan"],
    allergens: ["Gluten", "Dairy", "Nuts"],
    availability: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=500&q=80",
    tags: ["Hot", "Creamy", "Herby"]
  },
  {
    id: "pa4",
    name: "Spaghetti Aglio e Olio",
    category: "Pasta",
    description: "A simple, classic Italian pasta dish of garlic, olive oil, parsley, and Parmigiano-Reggiano.",
    price: 290,
    vegetarian: true,
    ingredients: ["Spaghetti", "Olive Oil", "Garlic", "Parsley", "Parmigiano-Reggiano"],
    allergens: ["Gluten", "Dairy"],
    availability: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&q=80",
    tags: ["Hot", "Light", "Classic"]
  }
];
