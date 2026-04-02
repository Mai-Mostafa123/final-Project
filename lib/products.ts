import type { Product, Review } from "./store-context"

export const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 16\"",
    description: "M3 Pro chip with 12-core CPU and 18-core GPU. 18GB unified memory. 512GB SSD storage. 16-inch Liquid Retina XDR display.",
    price: 2499,
    originalPrice: 2799,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    ],
    category: "Laptops",
    rating: 4.8,
    reviewCount: 342,
    discount: 11,
    specifications: {
      Chip: "M3 Pro",
      Display: "16\" Liquid Retina XDR",
      Memory: "18GB",
      Storage: "512GB SSD",
      Battery: "Up to 22 hours",
    },
    stock: 15,
  },
  {
    id: "2",
    name: "iPhone 15 Pro Max",
    description: "A17 Pro chip. 6.7-inch Super Retina XDR display with ProMotion. Titanium design. 48MP camera system.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80",
    ],
    category: "Smartphones",
    rating: 4.8,
    reviewCount: 1205,
    specifications: {
      Chip: "A17 Pro",
      Display: "6.7\" OLED",
      Camera: "48MP",
      Material: "Titanium",
      Storage: "256GB",
    },
    stock: 50,
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    description: "Adaptive Audio. Active Noise Cancellation. Personalized Spatial Audio. MagSafe Charging Case.",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    ],
    category: "Audio",
    rating: 4.7,
    reviewCount: 890,
    specifications: {
      Chip: "H2",
      "Noise Cancellation": "Active",
      "Battery Life": "6 hours",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX4",
    },
    stock: 100,
  },
  {
    id: "4",
    name: "Apple Watch Ultra 2",
    description: "The most rugged and capable Apple Watch. 49mm titanium case. Precision dual-frequency GPS. Up to 36 hours of battery life.",
    price: 799,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
    ],
    category: "Wearables",
    rating: 4.6,
    reviewCount: 456,
    specifications: {
      Case: "49mm Titanium",
      Display: "Always-On Retina",
      GPS: "Dual-frequency",
      Battery: "36 hours",
      "Water Resistance": "100m",
    },
    stock: 30,
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise cancellation. 30-hour battery life. Crystal clear hands-free calling. Multipoint connection.",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
    category: "Audio",
    rating: 4.7,
    reviewCount: 678,
    discount: 15,
    specifications: {
      Driver: "30mm",
      "Noise Cancellation": "Adaptive",
      Battery: "30 hours",
      Connectivity: "Bluetooth 5.2",
      Weight: "250g",
    },
    stock: 45,
  },
  {
    id: "6",
    name: "iPad Pro 12.9\"",
    description: "M2 chip. 12.9-inch Liquid Retina XDR display. ProMotion technology. 12MP Wide and 10MP Ultra Wide cameras.",
    price: 1099,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80",
    ],
    category: "Tablets",
    rating: 4.8,
    reviewCount: 534,
    specifications: {
      Chip: "M2",
      Display: "12.9\" Liquid Retina XDR",
      Storage: "256GB",
      Camera: "12MP + 10MP",
      Connectivity: "Wi-Fi 6E",
    },
    stock: 25,
  },
  {
    id: "7",
    name: "Samsung Galaxy S24 Ultra",
    description: "Galaxy AI. 200MP camera. Titanium frame. S Pen included. 6.8-inch Dynamic AMOLED 2X display.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80",
    ],
    category: "Smartphones",
    rating: 4.7,
    reviewCount: 423,
    specifications: {
      Display: "6.8\" Dynamic AMOLED 2X",
      Camera: "200MP",
      Frame: "Titanium",
      Storage: "512GB",
      Battery: "5000mAh",
    },
    stock: 35,
  },
  {
    id: "8",
    name: "MagSafe Charger",
    description: "Wireless charging pad for iPhone and AirPods. Perfectly aligned magnets attach to iPhone for faster wireless charging.",
    price: 39,
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=800&q=80",
    ],
    category: "Accessories",
    rating: 4.5,
    reviewCount: 234,
    specifications: {
      "Charging Speed": "15W",
      Compatibility: "iPhone 12+, AirPods",
      Cable: "1m USB-C",
      Material: "Aluminum",
    },
    stock: 200,
  },
]

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "2",
    userName: "James L.",
    rating: 5,
    comment: "The titanium design feels amazing. Camera is next level.",
    date: "2024-03-01",
  },
  {
    id: "r2",
    productId: "2",
    userName: "Maria G.",
    rating: 4,
    comment: "Great phone but the price is steep.",
    date: "2024-02-10",
  },
  {
    id: "r3",
    productId: "1",
    userName: "Alex K.",
    rating: 5,
    comment: "Best laptop I've ever owned. The M3 Pro chip is incredibly fast.",
    date: "2024-02-28",
  },
  {
    id: "r4",
    productId: "3",
    userName: "Sarah M.",
    rating: 5,
    comment: "Noise cancellation is phenomenal. Worth every penny.",
    date: "2024-01-15",
  },
  {
    id: "r5",
    productId: "4",
    userName: "Tom B.",
    rating: 4,
    comment: "Great for hiking and outdoor activities. Battery life is impressive.",
    date: "2024-02-20",
  },
]

export const categories = [
  "All",
  "Laptops",
  "Smartphones",
  "Audio",
  "Wearables",
  "Accessories",
  "Tablets",
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  )
}
