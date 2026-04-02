"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Star } from "lucide-react"
import { useStore, type Product } from "@/lib/store-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore()
  const inWishlist = isInWishlist(product.id)

  return (
    <div className={cn("group", className)}>
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
        <Link href={`/products/${product.id}`} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </Link>

        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur hover:bg-background",
            inWishlist && "text-primary"
          )}
          onClick={() => toggleWishlist(product)}
        >
          <Heart
            className={cn("h-4 w-4", inWishlist && "fill-primary")}
          />
        </Button>
      </div>

      <div className="space-y-2">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-3.5 w-3.5",
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              )}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-foreground">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
