"use client"

import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"
import { useStore } from "@/lib/store-context"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export default function WishlistPage() {
  const { wishlist } = useStore()

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Wishlist
        </h1>
        <p className="text-muted-foreground">
          {wishlist.length} saved {wishlist.length === 1 ? "item" : "items"}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
            <Heart className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Save your favorite products here to easily find them later.
          </p>
          <Link href="/products">
            <Button className="rounded-full gap-2">
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
