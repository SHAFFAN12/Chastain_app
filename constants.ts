import { MenuCategory, MenuItem, MenuSectionData, OperatingHours, TeamMember } from './types';

export const BUSINESS_INFO = {
  name: "THE CHASTAIN",
  address: "4320 Powers Ferry Road, Atlanta, GA",
  phone: "404-257-6416",
  email: "info@THECHASTAINatl.com",
  reservationEmail: "reservations@THECHASTAINatl.com",
  history: "Located in the North Buckhead area adjacent to Chastain Park. The site was once a country store, then 'Bill Daly’s Red Barn', and later 'Horseradish Grill'. In 2020, it was transformed into THE CHASTAIN.",
  sustainability: "A MICHELIN Green Star restaurant committed to sustainability and farm-to-table cuisine.",
};

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Monday", hours: "Café 7AM-2PM | Lunch 11AM-2PM (Dinner Closed)" },
  { day: "Tue-Thu", hours: "Café 7AM-2PM | Lunch 11AM-2PM | Dinner 5PM-9PM" },
  { day: "Friday", hours: "Café 7AM-2PM | Lunch 11AM-2PM | Dinner 5PM-10PM" },
  { day: "Saturday", hours: "Café 8AM-2PM | Brunch 11AM-2PM | Dinner 5PM-10PM" },
  { day: "Sunday", hours: "Café 8AM-2PM | Brunch 11AM-2PM | Dinner 5PM-9PM" },
];

export const TEAM: TeamMember[] = [
  { name: "Christopher Grossman", role: "Executive Chef" },
  { name: "Christian Castillo", role: "Executive Pastry Chef" },
  { name: "Emilee Durrett", role: "General Manager" },
];

export const MENUS: Record<MenuCategory, MenuSectionData[]> = {
  [MenuCategory.LUNCH]: [
    {
      title: "Starters & Soups",
      items: [
        { name: "French Onion Soup", price: 17, description: "Classic preparation" },
        { name: "Heirloom Tomato Soup", price: 17, description: "Arancini, ricotta, basil", dietary: ["VEG"] },
        { name: "Vonnie’s Sprouts", price: 17, description: "Pea & sunflower sprouts, buttermilk ricotta, green garlic", dietary: ["GF", "VEG"] },
        { name: "Local Tomatoes & Burrata", price: 24, description: "Olive oil croutons, Sicilian olive oil, garden basil", dietary: ["VEG"] },
      ]
    },
    {
      title: "Mains",
      items: [
        { name: "The TC Cheese Burger", price: 34, description: "Lettuce, pickle, caramelized onion aioli, Chat Farms beef" },
        { name: "Softshell Crab Sandwich", price: 34, description: "Lemon aioli, pickled jalapeños, lettuce" },
        { name: "Pastrami Smoked Short Rib Reuben", price: 34, description: "Pastrami spice, sauerkraut, thousand island, rye, Gruyère" },
        { name: "Pesto Chicken Sandwich", price: 28, description: "Toasted focaccia, parmesan, arugula, pickled onion" },
        { name: "Olive Oil Poached Halibut", price: 46, description: "Chimichurri, zucchini, German butterball potatoes", dietary: ["GF"] },
      ]
    }
  ],
  [MenuCategory.DINNER]: [
    {
      title: "Chef's Selections",
      items: [
        { name: "Cast Iron Roasted Wagyu Striploin", price: 52, description: "Balsamic grilled red onion, chimichurri", dietary: ["GF"] },
        { name: "Seared Yellowfin Tuna", price: 39, description: "Artichoke aioli, zucchini, blistered cherry tomatoes", dietary: ["GF"] },
        { name: "Beef Tallow Tater Tots", price: 30, description: "Crème fraîche, chives, Kaluga Caviar", dietary: ["GF"] },
      ]
    },
    {
      title: "From The Garden",
      items: [
        { name: "Pecan Grilled Maitake Mushrooms", price: 16, description: "Chimichurri", dietary: ["GF", "VEG"] },
        { name: "Fingerling Sweet Potatoes", price: 12, description: "Feta, cilantro, garlic, coconut oil, sumac", dietary: ["GF", "VEG"] },
        { name: "Blistered Shishito Peppers", price: 13, description: "Ponzu and miso aioli", dietary: ["VEG"] },
      ]
    }
  ],
  [MenuCategory.CAFE]: [
    {
      title: "Pastries & Sweets",
      items: [
        { name: "Croissant", price: 6 },
        { name: "Pain au Chocolat", price: 7 },
        { name: "Nordic Cinnamon Roll", price: 6, description: "Uses DaySpring Farms flour" },
        { name: "Carrot Cake", price: 5, dietary: ["GF"] },
      ]
    },
    {
      title: "Savory",
      items: [
        { name: "Ham & Cheese Croissant", price: 7 },
        { name: "DaySpring Farms Biscuit", price: 4.5, description: "Butter, honey butter, or preserve" },
        { name: "Quiche", price: 14, description: "Caramelized onion & Gruyère (Until 11am)" },
        { name: "Avocado Toast", price: 15, description: "Sourdough, sumac, puffed quinoa, lemon oil" },
      ]
    },
    {
      title: "Coffee (Brash Roasters)",
      items: [
        { name: "Espresso", price: 4 },
        { name: "Cortado", price: 4.5 },
        { name: "Latte", price: 5.5 },
        { name: "Mocha", price: 6.5 },
      ]
    }
  ]
};
