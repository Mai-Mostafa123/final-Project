"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Minus, Plus, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductById, getReviewsByProductId } from "@/lib/products"
import { useStore } from "@/lib/store-context"
import { cn } from "@/lib/utils"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const reviews = getReviewsByProductId(id)

  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    notFound()
  }

  const inWishlist = isInWishlist(product.id)
  const images = product.images || [product.image]

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "relative w-16 h-16 rounded-lg overflow-hidden bg-muted",
                    selectedImage === index && "ring-2 ring-primary ring-offset-2"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <Link
            href={`/products?category=${product.category}`}
            className="text-sm text-primary hover:underline"
          >
            {product.category}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-foreground">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          {product.specifications && (
            <div className="border rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-4">
                Specifications
              </h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <dt className="text-muted-foreground">{key}</dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 border rounded-full p-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Button
              size="lg"
              className="flex-1 rounded-full"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Bag &mdash; ${(product.price * quantity).toLocaleString()}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={cn(
                "h-12 w-12 rounded-full",
                inWishlist && "text-primary border-primary"
              )}
              onClick={() => toggleWishlist(product)}
            >
              <Heart className={cn("h-5 w-5", inWishlist && "fill-primary")} />
            </Button>
          </div>

          {/* Stock Status */}
          <p className="text-sm text-muted-foreground">
            {product.stock > 10
              ? "In stock"
              : product.stock > 0
              ? `Only ${product.stock} left in stock`
              : "Out of stock"}
          </p>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 pt-16 border-t">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Customer Reviews
        </h2>

        {reviews.length === 0 ? (
          <p className="text-muted-foreground">
            No reviews yet. Be the first to review this product!
          </p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      {review.userName[0]}
                    </div>
                    <span className="font-medium text-foreground">
                      {review.userName}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
