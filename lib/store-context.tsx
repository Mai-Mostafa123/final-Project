"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  rating: number
  reviewCount: number
  discount?: number
  specifications?: Record<string, string>
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Review {
  id: string
  productId: string
  userName: string
  rating: number
  comment: string
  date: string
}

interface StoreContextType {
  cart: CartItem[]
  wishlist: Product[]
  isCartOpen: boolean
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleWishlist: (product: Product) => void
  isInWishlist: (productId: string) => boolean
  setIsCartOpen: (open: boolean) => void
  cartTotal: number
  cartCount: number
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("novatech-cart")
    const savedWishlist = localStorage.getItem("novatech-wishlist")
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("novatech-cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("novatech-wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setCart([])

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const isInWishlist = (productId: string) => {
    return wishlist.some((p) => p.id === productId)
  }

  const cartTotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}
