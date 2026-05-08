/* ==========================================================
   VK FOODS – DEFAULT MENU DATA
   Admin can override these via the admin panel (localStorage)
   ========================================================== */

const DEFAULT_MENU_ITEMS = [

  /* ── BREAKFAST & TIFFIN ── */
  {
    id: 1, category: "breakfast",
    name: "Idli",
    description: "Soft steamed rice cakes served with sambar and coconut chutney.",
    price: 15, unit: "per piece",
    emoji: "🫓", color: "#FF9E2C",
    bgGradient: "linear-gradient(135deg, #FF9E2C 0%, #F4B942 100%)"
  },
  {
    id: 2, category: "breakfast",
    name: "Medu Vada",
    description: "Golden crispy lentil fritters, light and crunchy on the outside.",
    price: 18, unit: "per piece",
    emoji: "🍩", color: "#D4771A",
    bgGradient: "linear-gradient(135deg, #D4771A 0%, #E8932A 100%)"
  },
  {
    id: 3, category: "breakfast",
    name: "Plain Dosa",
    description: "Thin crispy rice and lentil crepe, perfectly golden.",
    price: 40, unit: "per plate",
    emoji: "🌮", color: "#F4A261",
    bgGradient: "linear-gradient(135deg, #F4A261 0%, #E8732A 100%)"
  },
  {
    id: 4, category: "breakfast",
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato masala — a classic favourite.",
    price: 55, unit: "per plate",
    emoji: "🌮", color: "#E8532A",
    bgGradient: "linear-gradient(135deg, #E8532A 0%, #C4371A 100%)"
  },
  {
    id: 5, category: "breakfast",
    name: "Rava Dosa",
    description: "Crispy semolina crepe with onion and green chilli, extra lacy.",
    price: 50, unit: "per plate",
    emoji: "🥞", color: "#F0B429",
    bgGradient: "linear-gradient(135deg, #F0B429 0%, #D4971A 100%)"
  },
  {
    id: 6, category: "breakfast",
    name: "Set Dosa",
    description: "Soft, spongy set of 3 small dosas with chutney and kurma.",
    price: 50, unit: "per plate",
    emoji: "🥞", color: "#FF7A47",
    bgGradient: "linear-gradient(135deg, #FF7A47 0%, #E8532A 100%)"
  },
  {
    id: 7, category: "breakfast",
    name: "Pongal",
    description: "Comforting rice and lentil porridge tempered with cumin and pepper.",
    price: 40, unit: "per plate",
    emoji: "🫕", color: "#8BC34A",
    bgGradient: "linear-gradient(135deg, #8BC34A 0%, #6A9E35 100%)"
  },
  {
    id: 8, category: "breakfast",
    name: "Upma",
    description: "Savory semolina cooked with vegetables, curry leaves and mustard.",
    price: 35, unit: "per plate",
    emoji: "🍲", color: "#FFA726",
    bgGradient: "linear-gradient(135deg, #FFA726 0%, #E8872A 100%)"
  },
  {
    id: 9, category: "breakfast",
    name: "Pesarattu",
    description: "Green moong dal crepe, crispy and nutritious — Andhra style.",
    price: 45, unit: "per plate",
    emoji: "🌿", color: "#4CAF50",
    bgGradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)"
  },
  {
    id: 10, category: "breakfast",
    name: "Poori with Masala",
    description: "Puffed deep-fried bread served with potato masala gravy.",
    price: 55, unit: "per plate (3 pcs)",
    emoji: "🫓", color: "#FFCA28",
    bgGradient: "linear-gradient(135deg, #FFCA28 0%, #D4A017 100%)"
  },

  /* ── RICE ITEMS ── */
  {
    id: 11, category: "rice",
    name: "Sambar Rice",
    description: "Piping hot rice mixed with lentil and vegetable sambar.",
    price: 65, unit: "per serving",
    emoji: "🍛", color: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #C4371A 100%)"
  },
  {
    id: 12, category: "rice",
    name: "Lemon Rice",
    description: "Tangy rice flavoured with lemon, turmeric and tempered with nuts.",
    price: 55, unit: "per serving",
    emoji: "🍋", color: "#FFD600",
    bgGradient: "linear-gradient(135deg, #FFD600 0%, #F9A825 100%)"
  },
  {
    id: 13, category: "rice",
    name: "Tamarind Rice",
    description: "Puliyodarai — bold tamarind-spiced rice, a temple favourite.",
    price: 60, unit: "per serving",
    emoji: "🍚", color: "#BF360C",
    bgGradient: "linear-gradient(135deg, #BF360C 0%, #7F1F05 100%)"
  },
  {
    id: 14, category: "rice",
    name: "Coconut Rice",
    description: "Fluffy rice tossed with grated coconut and fragrant tempering.",
    price: 55, unit: "per serving",
    emoji: "🥥", color: "#80CBC4",
    bgGradient: "linear-gradient(135deg, #80CBC4 0%, #00897B 100%)"
  },
  {
    id: 15, category: "rice",
    name: "Curd Rice",
    description: "Cool creamy yoghurt rice tempered with mustard and curry leaves.",
    price: 50, unit: "per serving",
    emoji: "🍚", color: "#E8EAF6",
    bgGradient: "linear-gradient(135deg, #9FA8DA 0%, #5C6BC0 100%)"
  },
  {
    id: 16, category: "rice",
    name: "Bisi Bele Bath",
    description: "Karnataka-style spiced rice and lentil one-pot — warming and rich.",
    price: 75, unit: "per serving",
    emoji: "🫕", color: "#E65100",
    bgGradient: "linear-gradient(135deg, #E65100 0%, #BF360C 100%)"
  },
  {
    id: 17, category: "rice",
    name: "Tomato Rice",
    description: "Rice cooked with tangy tomato and aromatic South Indian spices.",
    price: 55, unit: "per serving",
    emoji: "🍅", color: "#EF5350",
    bgGradient: "linear-gradient(135deg, #EF5350 0%, #B71C1C 100%)"
  },

  /* ── CURRIES & SIDES ── */
  {
    id: 18, category: "curries",
    name: "Sambar",
    description: "Rich lentil and vegetable stew with tamarind and a spice blend.",
    price: 150, unit: "per litre",
    emoji: "🫕", color: "#FF6B35",
    bgGradient: "linear-gradient(135deg, #FF6B35 0%, #BF360C 100%)"
  },
  {
    id: 19, category: "curries",
    name: "Rasam",
    description: "Thin peppery tomato broth, excellent for digestion and comfort.",
    price: 100, unit: "per litre",
    emoji: "🍲", color: "#FF7043",
    bgGradient: "linear-gradient(135deg, #FF7043 0%, #BF360C 100%)"
  },
  {
    id: 20, category: "curries",
    name: "Coconut Chutney",
    description: "Freshly ground coconut with green chilli and tempered mustard.",
    price: 80, unit: "per kg",
    emoji: "🥥", color: "#A5D6A7",
    bgGradient: "linear-gradient(135deg, #A5D6A7 0%, #388E3C 100%)"
  },
  {
    id: 21, category: "curries",
    name: "Poriyal",
    description: "Dry stir-fried vegetable curry with coconut and curry leaves.",
    price: 200, unit: "per kg",
    emoji: "🥦", color: "#66BB6A",
    bgGradient: "linear-gradient(135deg, #66BB6A 0%, #2E7D32 100%)"
  },
  {
    id: 22, category: "curries",
    name: "Kootu",
    description: "Thick vegetable and lentil curry cooked with ground coconut.",
    price: 220, unit: "per kg",
    emoji: "🍛", color: "#26A69A",
    bgGradient: "linear-gradient(135deg, #26A69A 0%, #00695C 100%)"
  },
  {
    id: 23, category: "curries",
    name: "Aviyal",
    description: "Mixed vegetable medley in coconut-yoghurt gravy — Kerala classic.",
    price: 250, unit: "per kg",
    emoji: "🥗", color: "#29B6F6",
    bgGradient: "linear-gradient(135deg, #29B6F6 0%, #0277BD 100%)"
  },
  {
    id: 24, category: "curries",
    name: "Tomato Chutney",
    description: "Tangy spiced tomato chutney, freshly made with garlic.",
    price: 80, unit: "per kg",
    emoji: "🍅", color: "#EF5350",
    bgGradient: "linear-gradient(135deg, #EF5350 0%, #B71C1C 100%)"
  },

  /* ── SWEETS ── */
  {
    id: 25, category: "sweets",
    name: "Mysore Pak",
    description: "Melt-in-the-mouth gramflour and ghee sweet — a Mysore legend.",
    price: 500, unit: "per kg",
    emoji: "🍯", color: "#FFCC02",
    bgGradient: "linear-gradient(135deg, #FFCC02 0%, #D4A017 100%)"
  },
  {
    id: 26, category: "sweets",
    name: "Kesari",
    description: "Saffron-tinted semolina halwa with cashews and golden raisins.",
    price: 350, unit: "per kg",
    emoji: "🍮", color: "#FFA000",
    bgGradient: "linear-gradient(135deg, #FFA000 0%, #E65100 100%)"
  },
  {
    id: 27, category: "sweets",
    name: "Payasam",
    description: "Creamy vermicelli or rice pudding in sweetened milk with cardamom.",
    price: 250, unit: "per litre",
    emoji: "🍼", color: "#F8BBD0",
    bgGradient: "linear-gradient(135deg, #F48FB1 0%, #C2185B 100%)"
  },
  {
    id: 28, category: "sweets",
    name: "Sweet Pongal",
    description: "Jaggery rice-lentil pudding with cashews, raisins and ghee.",
    price: 300, unit: "per kg",
    emoji: "🍚", color: "#D4AF37",
    bgGradient: "linear-gradient(135deg, #D4AF37 0%, #A0793B 100%)"
  },
  {
    id: 29, category: "sweets",
    name: "Halwa",
    description: "Soft, ghee-rich carrot or wheat halwa, fragrant with cardamom.",
    price: 400, unit: "per kg",
    emoji: "🧁", color: "#EF9A9A",
    bgGradient: "linear-gradient(135deg, #EF9A9A 0%, #C62828 100%)"
  },
  {
    id: 30, category: "sweets",
    name: "Ladoo",
    description: "Round besan or boondi balls with ghee, cardamom and dry fruits.",
    price: 380, unit: "per kg",
    emoji: "🟠", color: "#FF8F00",
    bgGradient: "linear-gradient(135deg, #FF8F00 0%, #E65100 100%)"
  },

  /* ── SNACKS ── */
  {
    id: 31, category: "snacks",
    name: "Murukku",
    description: "Crunchy spiral rice flour snack, deep-fried to perfection.",
    price: 320, unit: "per kg",
    emoji: "🌀", color: "#D4A017",
    bgGradient: "linear-gradient(135deg, #D4A017 0%, #A0793B 100%)"
  },
  {
    id: 32, category: "snacks",
    name: "Mixture",
    description: "A crunchy medley of sev, peanuts, curry leaves and fried lentils.",
    price: 290, unit: "per kg",
    emoji: "🥜", color: "#C8912A",
    bgGradient: "linear-gradient(135deg, #C8912A 0%, #8D6018 100%)"
  },
  {
    id: 33, category: "snacks",
    name: "Thattai",
    description: "Thin crispy rice crackers seasoned with cumin and chilli.",
    price: 280, unit: "per kg",
    emoji: "🥨", color: "#BCAAA4",
    bgGradient: "linear-gradient(135deg, #BCAAA4 0%, #5D4037 100%)"
  },
  {
    id: 34, category: "snacks",
    name: "Seedai",
    description: "Small crunchy rice balls — a festival-time favourite snack.",
    price: 300, unit: "per kg",
    emoji: "⚪", color: "#FFE0B2",
    bgGradient: "linear-gradient(135deg, #FFCC80 0%, #E65100 100%)"
  },

  /* ── BEVERAGES ── */
  {
    id: 35, category: "beverages",
    name: "Filter Coffee",
    description: "South Indian-style filter coffee — strong, aromatic, frothy.",
    price: 30, unit: "per cup",
    emoji: "☕", color: "#4E342E",
    bgGradient: "linear-gradient(135deg, #795548 0%, #3E2723 100%)"
  },
  {
    id: 36, category: "beverages",
    name: "Masala Chai",
    description: "Spiced ginger-cardamom tea, freshly brewed and comforting.",
    price: 25, unit: "per cup",
    emoji: "🍵", color: "#8D6E63",
    bgGradient: "linear-gradient(135deg, #A1887F 0%, #4E342E 100%)"
  },
  {
    id: 37, category: "beverages",
    name: "Buttermilk (Moru)",
    description: "Cool thin yoghurt drink with curry leaves and cumin.",
    price: 20, unit: "per glass",
    emoji: "🥛", color: "#E3F2FD",
    bgGradient: "linear-gradient(135deg, #90CAF9 0%, #1565C0 100%)"
  },
  {
    id: 38, category: "beverages",
    name: "Fresh Lime Water",
    description: "Refreshing limeade — sweet, salted or spiced as you prefer.",
    price: 25, unit: "per glass",
    emoji: "🍋", color: "#F9FBE7",
    bgGradient: "linear-gradient(135deg, #DCE775 0%, #827717 100%)"
  }
];

const CATEGORY_LABELS = {
  all:       "All Items",
  breakfast: "Breakfast & Tiffin",
  rice:      "Rice Items",
  curries:   "Curries & Sides",
  sweets:    "Sweets",
  snacks:    "Snacks",
  beverages: "Beverages"
};
