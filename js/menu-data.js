/* ==========================================================
   VK FOODS – CATERING MENU DATA
   Veg Tray & Non-Veg Tray with Half / Medium / Full pricing
   ========================================================== */

const DEFAULT_MENU_ITEMS = [

  /* ── VEG TRAY ── */
  {
    id: 1, category: "veg",
    name: "Pulihora",
    emoji: "🍚", color: "#B8860B",
    bgGradient: "linear-gradient(135deg, #DAA520 0%, #B8860B 100%)",
    priceHalf: 50, priceMed: 75, priceFull: 100
  },
  {
    id: 2, category: "veg",
    name: "Paneer Butter Masala",
    emoji: "🧀", color: "#E8532A",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #E8532A 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 120
  },
  {
    id: 3, category: "veg",
    name: "Veg Dum Biryani",
    emoji: "🍛", color: "#4CAF50",
    bgGradient: "linear-gradient(135deg, #66BB6A 0%, #388E3C 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 4, category: "veg",
    name: "Paneer Biryani",
    emoji: "🍛", color: "#8BC34A",
    bgGradient: "linear-gradient(135deg, #AED581 0%, #689F38 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 120
  },
  {
    id: 5, category: "veg",
    name: "Veg Curry",
    emoji: "🫕", color: "#4CAF50",
    bgGradient: "linear-gradient(135deg, #81C784 0%, #2E7D32 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 6, category: "veg",
    name: "Aloo",
    emoji: "🥔", color: "#FFA726",
    bgGradient: "linear-gradient(135deg, #FFB74D 0%, #E65100 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 7, category: "veg",
    name: "Dal (Your Choice)",
    emoji: "🫘", color: "#FF8F00",
    bgGradient: "linear-gradient(135deg, #FFA000 0%, #E65100 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 8, category: "veg",
    name: "Tindora / Okra Fry",
    emoji: "🥦", color: "#43A047",
    bgGradient: "linear-gradient(135deg, #66BB6A 0%, #1B5E20 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 110
  },
  {
    id: 9, category: "veg",
    name: "Sambar",
    emoji: "🍲", color: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #BF360C 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 10, category: "veg",
    name: "Veg Manchuria",
    emoji: "🥢", color: "#26A69A",
    bgGradient: "linear-gradient(135deg, #4DB6AC 0%, #00695C 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 110
  },
  {
    id: 11, category: "veg",
    name: "Gobi Manchuria",
    emoji: "🥦", color: "#00897B",
    bgGradient: "linear-gradient(135deg, #26A69A 0%, #004D40 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 110
  },
  {
    id: 12, category: "veg",
    name: "Pudina Rice",
    emoji: "🌿", color: "#2E7D32",
    bgGradient: "linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 13, category: "veg",
    name: "Bagara Rice",
    emoji: "🍚", color: "#F9A825",
    bgGradient: "linear-gradient(135deg, #FDD835 0%, #F57F17 100%)",
    priceHalf: 50, priceMed: 70, priceFull: 90
  },
  {
    id: 14, category: "veg",
    name: "Beerkai Pachadi",
    emoji: "🫙", color: "#558B2F",
    bgGradient: "linear-gradient(135deg, #7CB342 0%, #33691E 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 15, category: "veg",
    name: "Sorakai Pachadi",
    emoji: "🫙", color: "#689F38",
    bgGradient: "linear-gradient(135deg, #8BC34A 0%, #33691E 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 16, category: "veg",
    name: "Dondakai Pachadi",
    emoji: "🫙", color: "#388E3C",
    bgGradient: "linear-gradient(135deg, #66BB6A 0%, #1B5E20 100%)",
    priceHalf: 60, priceMed: 80, priceFull: 100
  },
  {
    id: 17, category: "veg",
    name: "Pongal",
    emoji: "🫕", color: "#F9A825",
    bgGradient: "linear-gradient(135deg, #FBC02D 0%, #E65100 100%)",
    priceHalf: 50, priceMed: 70, priceFull: 90
  },
  {
    id: 18, category: "veg",
    name: "Gutti Vonkaya",
    emoji: "🍆", color: "#7B1FA2",
    bgGradient: "linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)",
    priceHalf: 70, priceMed: 90, priceFull: 120
  },

  /* ── NON-VEG TRAY ── */
  {
    id: 19, category: "nonveg",
    name: "Hyd Chicken Dum Biryani",
    emoji: "🍗", color: "#E65100",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #BF360C 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 20, category: "nonveg",
    name: "Hyd Mutton Dum Biryani",
    emoji: "🥩", color: "#B71C1C",
    bgGradient: "linear-gradient(135deg, #EF5350 0%, #7F0000 100%)",
    priceHalf: 90, priceMed: 130, priceFull: 180
  },
  {
    id: 21, category: "nonveg",
    name: "VK SPL Mutton Dum Biryani",
    emoji: "🥩", color: "#C62828",
    bgGradient: "linear-gradient(135deg, #E53935 0%, #880E4F 100%)",
    priceHalf: 90, priceMed: 130, priceFull: 180
  },
  {
    id: 22, category: "nonveg",
    name: "VK SPL Chicken Dum Biryani",
    emoji: "🍗", color: "#D84315",
    bgGradient: "linear-gradient(135deg, #FF5722 0%, #BF360C 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 23, category: "nonveg",
    name: "Natu Kodi Dum Biryani",
    emoji: "🐔", color: "#EF6C00",
    bgGradient: "linear-gradient(135deg, #FFA726 0%, #E65100 100%)",
    priceHalf: 80, priceMed: 120, priceFull: 150
  },
  {
    id: 24, category: "nonveg",
    name: "Prawns Biryani",
    emoji: "🦐", color: "#F57F17",
    bgGradient: "linear-gradient(135deg, #FF8F00 0%, #E65100 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 25, category: "nonveg",
    name: "Chicken Curry",
    emoji: "🍗", color: "#BF360C",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #7F1500 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 26, category: "nonveg",
    name: "Mutton Curry",
    emoji: "🥩", color: "#B71C1C",
    bgGradient: "linear-gradient(135deg, #E53935 0%, #7F0000 100%)",
    priceHalf: 90, priceMed: 130, priceFull: 180
  },
  {
    id: 27, category: "nonveg",
    name: "Fish Curry",
    emoji: "🐟", color: "#1565C0",
    bgGradient: "linear-gradient(135deg, #1E88E5 0%, #0D47A1 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 28, category: "nonveg",
    name: "Natu Kodi Curry",
    emoji: "🐔", color: "#E65100",
    bgGradient: "linear-gradient(135deg, #FF8A65 0%, #BF360C 100%)",
    priceHalf: 80, priceMed: 120, priceFull: 150
  },
  {
    id: 29, category: "nonveg",
    name: "Egg Masala Curry",
    emoji: "🥚", color: "#F57F17",
    bgGradient: "linear-gradient(135deg, #FFCA28 0%, #E65100 100%)",
    priceHalf: 60, priceMed: 90, priceFull: 120
  },
  {
    id: 30, category: "nonveg",
    name: "Chicken 65",
    emoji: "🍗", color: "#C62828",
    bgGradient: "linear-gradient(135deg, #EF5350 0%, #B71C1C 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 31, category: "nonveg",
    name: "Karampodi Chicken",
    emoji: "🌶️", color: "#D32F2F",
    bgGradient: "linear-gradient(135deg, #F44336 0%, #7F0000 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 32, category: "nonveg",
    name: "Karvepaku Chicken",
    emoji: "🌿", color: "#558B2F",
    bgGradient: "linear-gradient(135deg, #8BC34A 0%, #BF360C 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  },
  {
    id: 33, category: "nonveg",
    name: "Natu Kodi Fry",
    emoji: "🐔", color: "#BF360C",
    bgGradient: "linear-gradient(135deg, #FF5722 0%, #7F1500 100%)",
    priceHalf: 80, priceMed: 120, priceFull: 150
  },
  {
    id: 34, category: "nonveg",
    name: "VK SPL Chicken Fry",
    emoji: "🍗", color: "#E65100",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #BF360C 100%)",
    priceHalf: 70, priceMed: 110, priceFull: 140
  }
];

const CATEGORY_LABELS = {
  all:    "All Items",
  veg:    "Veg Tray",
  nonveg: "Non-Veg Tray"
};
