import heroShoe from '../assets/images/hero-shoe.png';
import casualShoe from '../assets/images/casual-shoe.png';
import sportsShoe from '../assets/images/sports-shoe.png';
import formalShoe from '../assets/images/formal-shoe.png';

export const products = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    brand: "Nike",
    category: "Running",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 124,
    image: heroShoe,
    images: [heroShoe, casualShoe, sportsShoe],
    description: "The Nike Air Max Pulse mixes street style with rugged performance. Its vacuum-sealed overlay and plush cushioning provide all-day comfort with a futuristic look.",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["#3b82f6", "#f97316", "#ffffff"],
    isNew: true,
    discount: 20
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    category: "Running",
    price: 189.99,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800"],
    description: "Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of Adidas BOOST.",
    sizes: [8, 9, 10, 11],
    colors: ["#ffffff", "#000000"],
    isTrending: true
  },
  {
    id: 3,
    name: "Classic White Leather",
    brand: "Puma",
    category: "Casual",
    price: 89.99,
    rating: 4.5,
    reviews: 210,
    image: casualShoe,
    images: [casualShoe],
    description: "A clean, minimalist sneaker that pairs perfectly with any outfit. Crafted from premium leather for durability and style.",
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["#ffffff"],
    isNew: false
  },
  {
    id: 4,
    name: "PowerCourt Pro",
    brand: "Reebok",
    category: "Sports",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 56,
    image: sportsShoe,
    images: [sportsShoe],
    description: "Dominate the court with the PowerCourt Pro. Engineered for lateral stability and explosive movement.",
    sizes: [9, 10, 11, 12, 13],
    colors: ["#ef4444", "#000000"],
    discount: 15
  },
  {
    id: 5,
    name: "Midnight Oxford",
    brand: "Formal",
    category: "Formal",
    price: 249.99,
    rating: 5.0,
    reviews: 32,
    image: formalShoe,
    images: [formalShoe],
    description: "The pinnacle of formal footwear. Hand-polished Italian leather with a timeless silhouette for the modern gentleman.",
    sizes: [8, 9, 10, 11],
    colors: ["#451a03"],
  },
  {
    id: 6,
    name: "Converse Chuck 70",
    brand: "Converse",
    category: "Sneakers",
    price: 75.00,
    rating: 4.6,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"],
    description: "The Chuck 70 mixes the best details from the '70s-era Chuck with impeccable craftsmanship and premium materials.",
    sizes: [5, 6, 7, 8, 9, 10, 11, 12],
    colors: ["#000000", "#ffffff", "#ef4444"],
  },
  {
    id: 7,
    name: "New Balance 990v6",
    brand: "New Balance",
    category: "Running",
    price: 199.99,
    rating: 4.9,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800"],
    description: "The 990's original designers were tasked with creating the single best running shoe on the market. The finished product more than lived up to its billing.",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["#94a3b8"],
  },
  {
    id: 8,
    name: "Skechers GoWalk 6",
    brand: "Skechers",
    category: "Casual",
    price: 65.00,
    rating: 4.4,
    reviews: 800,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800"],
    description: "Walk in long-lasting cushioned comfort with the Skechers GoWalk 6. Features a lightweight athletic mesh upper.",
    sizes: [7, 8, 9, 10, 11],
    colors: ["#1e293b", "#000000"],
  },
  {
  "id": 9,
  "name": "New Balance Cloud Boost",
  "brand": "New Balance",
  "category": "Casual",
  "price": 254.06,
  "rating": 4.1,
  "reviews": 65,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Cloud Boost. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 10,
  "name": "Nike Classic Oxford",
  "brand": "Nike",
  "category": "Sneakers",
  "price": 243.1,
  "originalPrice": 303.88,
  "rating": 4.2,
  "reviews": 787,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Classic Oxford. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": true,
  "discount": 20
},
  {
  "id": 11,
  "name": "Converse Pro Trainer",
  "brand": "Converse",
  "category": "Sports",
  "price": 98.01,
  "originalPrice": 122.51,
  "rating": 3.8,
  "reviews": 23,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Pro Trainer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 12,
  "name": "Reebok Zoom Strike",
  "brand": "Reebok",
  "category": "Sneakers",
  "price": 225.41,
  "rating": 4.7,
  "reviews": 628,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Reebok Zoom Strike. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 13,
  "name": "Skechers Elite Glide",
  "brand": "Skechers",
  "category": "Casual",
  "price": 291.24,
  "rating": 4.3,
  "reviews": 515,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Elite Glide. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 14,
  "name": "Reebok Pro Strider",
  "brand": "Reebok",
  "category": "Running",
  "price": 271.87,
  "rating": 4.9,
  "reviews": 446,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Reebok Pro Strider. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 15,
  "name": "Puma Elite Derby",
  "brand": "Puma",
  "category": "Sneakers",
  "price": 293.31,
  "rating": 4.4,
  "reviews": 470,
  "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Elite Derby. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 16,
  "name": "Skechers Speed Oxford",
  "brand": "Skechers",
  "category": "Sneakers",
  "price": 92.93,
  "rating": 4.2,
  "reviews": 551,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Speed Oxford. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": true,
  "isTrending": true
},
  {
  "id": 17,
  "name": "Nike Premium Dash",
  "brand": "Nike",
  "category": "Sneakers",
  "price": 216.3,
  "rating": 4.7,
  "reviews": 851,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Premium Dash. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#94a3b8"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 18,
  "name": "Skechers Flex Trainer",
  "brand": "Skechers",
  "category": "Running",
  "price": 162.82,
  "rating": 4.9,
  "reviews": 689,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Flex Trainer. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 19,
  "name": "Converse Max Strike",
  "brand": "Converse",
  "category": "Casual",
  "price": 196.75,
  "rating": 4,
  "reviews": 177,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Max Strike. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": true,
  "isTrending": true
},
  {
  "id": 20,
  "name": "Skechers Air Trainer",
  "brand": "Skechers",
  "category": "Sports",
  "price": 107.84,
  "originalPrice": 134.8,
  "rating": 4.4,
  "reviews": 676,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Air Trainer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": true,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 21,
  "name": "Premium Loafer Brown",
  "brand": "Formal",
  "category": "Formal",
  "price": 252.11,
  "rating": 4.5,
  "reviews": 166,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Loafer Brown. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 22,
  "name": "Skechers Air Pacer",
  "brand": "Skechers",
  "category": "Sports",
  "price": 144.32,
  "originalPrice": 180.4,
  "rating": 4.9,
  "reviews": 390,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Air Pacer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": true,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 23,
  "name": "New Balance Pro Trainer",
  "brand": "New Balance",
  "category": "Sneakers",
  "price": 274.36,
  "originalPrice": 342.95,
  "rating": 4.7,
  "reviews": 298,
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Pro Trainer. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 24,
  "name": "Skechers Classic Boost",
  "brand": "Skechers",
  "category": "Sneakers",
  "price": 198.45,
  "rating": 4.9,
  "reviews": 525,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Classic Boost. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#94a3b8"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 25,
  "name": "Nike Ultra Pacer",
  "brand": "Nike",
  "category": "Running",
  "price": 232.24,
  "rating": 3.9,
  "reviews": 322,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Ultra Pacer. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 26,
  "name": "Converse Light Walker",
  "brand": "Converse",
  "category": "Casual",
  "price": 76.43,
  "rating": 4.6,
  "reviews": 316,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Light Walker. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 27,
  "name": "Premium Loafer Tan",
  "brand": "Formal",
  "category": "Formal",
  "price": 74.53,
  "originalPrice": 93.16,
  "rating": 4,
  "reviews": 620,
  "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Loafer Tan. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 28,
  "name": "Premium Oxford Black",
  "brand": "Formal",
  "category": "Formal",
  "price": 129.55,
  "originalPrice": 161.94,
  "rating": 4.7,
  "reviews": 134,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Oxford Black. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 29,
  "name": "Premium Oxford Brown",
  "brand": "Formal",
  "category": "Formal",
  "price": 88.28,
  "rating": 4.4,
  "reviews": 491,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Oxford Brown. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 30,
  "name": "Skechers Cloud Trainer",
  "brand": "Skechers",
  "category": "Sneakers",
  "price": 89.4,
  "rating": 4.5,
  "reviews": 549,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Cloud Trainer. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 31,
  "name": "Converse Premium Sneaker",
  "brand": "Converse",
  "category": "Sports",
  "price": 114.15,
  "rating": 4.3,
  "reviews": 291,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Premium Sneaker. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 32,
  "name": "New Balance Premium Glide",
  "brand": "New Balance",
  "category": "Sneakers",
  "price": 120.17,
  "rating": 4.8,
  "reviews": 589,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Premium Glide. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 33,
  "name": "Reebok Pro Sneaker",
  "brand": "Reebok",
  "category": "Sneakers",
  "price": 211.76,
  "originalPrice": 264.7,
  "rating": 5,
  "reviews": 296,
  "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Reebok Pro Sneaker. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 34,
  "name": "Puma Speed Pacer",
  "brand": "Puma",
  "category": "Sports",
  "price": 149.69,
  "rating": 4.1,
  "reviews": 101,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Speed Pacer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 35,
  "name": "New Balance Flex Boost",
  "brand": "New Balance",
  "category": "Sports",
  "price": 259.57,
  "rating": 4,
  "reviews": 509,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Flex Boost. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 36,
  "name": "Nike Max Runner",
  "brand": "Nike",
  "category": "Sneakers",
  "price": 273.56,
  "rating": 4.6,
  "reviews": 675,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Max Runner. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 37,
  "name": "New Balance Pro Pacer",
  "brand": "New Balance",
  "category": "Sports",
  "price": 88.6,
  "rating": 4.8,
  "reviews": 126,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Pro Pacer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": true,
  "isTrending": true
},
  {
  "id": 38,
  "name": "Nike Zoom Runner",
  "brand": "Nike",
  "category": "Sneakers",
  "price": 247.43,
  "originalPrice": 309.29,
  "rating": 3.9,
  "reviews": 194,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Zoom Runner. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#000000"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 39,
  "name": "Nike Elite Sneaker",
  "brand": "Nike",
  "category": "Sports",
  "price": 148.29,
  "rating": 3.9,
  "reviews": 230,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Elite Sneaker. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": true
},
  {
  "id": 40,
  "name": "Nike Speed Strike",
  "brand": "Nike",
  "category": "Casual",
  "price": 86.03,
  "rating": 4.6,
  "reviews": 101,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Speed Strike. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 41,
  "name": "Converse Flex Strider",
  "brand": "Converse",
  "category": "Sports",
  "price": 265.74,
  "originalPrice": 332.18,
  "rating": 3.8,
  "reviews": 232,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Flex Strider. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#94a3b8"
  ],
  "isNew": false,
  "isTrending": true,
  "discount": 20
},
  {
  "id": 42,
  "name": "Puma Air Runner",
  "brand": "Puma",
  "category": "Sports",
  "price": 192.69,
  "rating": 4.2,
  "reviews": 436,
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Air Runner. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 43,
  "name": "New Balance Max Dash",
  "brand": "New Balance",
  "category": "Running",
  "price": 75.43,
  "rating": 4.7,
  "reviews": 797,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Max Dash. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 44,
  "name": "Puma Cloud Walker",
  "brand": "Puma",
  "category": "Sneakers",
  "price": 182.23,
  "rating": 4.7,
  "reviews": 605,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Cloud Walker. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 45,
  "name": "Adidas Air Trainer",
  "brand": "Adidas",
  "category": "Casual",
  "price": 67.62,
  "rating": 4.2,
  "reviews": 515,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Adidas Air Trainer. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 46,
  "name": "New Balance Zoom Boost",
  "brand": "New Balance",
  "category": "Sneakers",
  "price": 66.62,
  "rating": 4.2,
  "reviews": 294,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the New Balance Zoom Boost. Built for sneakers enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 47,
  "name": "Converse Light Dash",
  "brand": "Converse",
  "category": "Running",
  "price": 188,
  "rating": 4.3,
  "reviews": 805,
  "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Converse Light Dash. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": true,
  "isTrending": false
},
  {
  "id": 48,
  "name": "Skechers Speed Trainer",
  "brand": "Skechers",
  "category": "Casual",
  "price": 118.32,
  "rating": 3.9,
  "reviews": 251,
  "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Speed Trainer. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 49,
  "name": "Premium Oxford Brown",
  "brand": "Formal",
  "category": "Formal",
  "price": 109.56,
  "rating": 4.5,
  "reviews": 240,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Oxford Brown. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 50,
  "name": "Puma Zoom Dash",
  "brand": "Puma",
  "category": "Running",
  "price": 128.31,
  "originalPrice": 160.39,
  "rating": 4.6,
  "reviews": 674,
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Zoom Dash. Built for running enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": true,
  "discount": 20
},
  {
  "id": 51,
  "name": "Nike Flex Strike",
  "brand": "Nike",
  "category": "Sports",
  "price": 258.24,
  "originalPrice": 322.8,
  "rating": 3.9,
  "reviews": 889,
  "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Nike Flex Strike. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": true,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 52,
  "name": "Adidas Air Runner",
  "brand": "Adidas",
  "category": "Sports",
  "price": 258.67,
  "rating": 5,
  "reviews": 76,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Adidas Air Runner. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 53,
  "name": "Adidas Premium Boost",
  "brand": "Adidas",
  "category": "Casual",
  "price": 178.77,
  "rating": 4.6,
  "reviews": 12,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Adidas Premium Boost. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#94a3b8"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 54,
  "name": "Skechers Speed Glide",
  "brand": "Skechers",
  "category": "Casual",
  "price": 103.92,
  "originalPrice": 129.9,
  "rating": 5,
  "reviews": 800,
  "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Speed Glide. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 55,
  "name": "Reebok Pro Derby",
  "brand": "Reebok",
  "category": "Casual",
  "price": 190.12,
  "originalPrice": 237.65,
  "rating": 4.6,
  "reviews": 114,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Reebok Pro Derby. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ef4444",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 56,
  "name": "Puma Speed Pacer",
  "brand": "Puma",
  "category": "Casual",
  "price": 94.4,
  "rating": 4.4,
  "reviews": 740,
  "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Puma Speed Pacer. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 57,
  "name": "Skechers Elite Boost",
  "brand": "Skechers",
  "category": "Casual",
  "price": 207.44,
  "originalPrice": 259.3,
  "rating": 3.8,
  "reviews": 783,
  "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Elite Boost. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 58,
  "name": "Premium Loafer Brown",
  "brand": "Formal",
  "category": "Formal",
  "price": 139.52,
  "rating": 4.3,
  "reviews": 608,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Premium Loafer Brown. Built for formal enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    8,
    9,
    10
  ],
  "colors": [
    "#451a03"
  ],
  "isNew": false,
  "isTrending": false
},
  {
  "id": 59,
  "name": "Reebok Speed Oxford",
  "brand": "Reebok",
  "category": "Casual",
  "price": 291.48,
  "originalPrice": 364.35,
  "rating": 5,
  "reviews": 228,
  "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Reebok Speed Oxford. Built for casual enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#22c55e",
    "#000000"
  ],
  "isNew": false,
  "isTrending": false,
  "discount": 20
},
  {
  "id": 60,
  "name": "Skechers Elite Pacer",
  "brand": "Skechers",
  "category": "Sports",
  "price": 107.29,
  "rating": 4.9,
  "reviews": 870,
  "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  "images": [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ],
  "description": "Experience the ultimate comfort and style with the Skechers Elite Pacer. Built for sports enthusiasts, delivering top tier performance and unmatched durability.",
  "sizes": [
    7,
    8,
    9,
    10,
    11
  ],
  "colors": [
    "#3b82f6",
    "#ffffff"
  ],
  "isNew": false,
  "isTrending": false
}
];
