import Link from "next/link"
import { ArrowRight, Sparkles, Truck, Shield, Zap, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { NewsletterSection } from "@/components/newsletter-section"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $99",
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Extended coverage",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Same day dispatch",
  },
  {
    icon: Cpu,
    title: "Latest Tech",
    description: "Cutting-edge hardware",
  },
]

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className=" header relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span>New Season Collection 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-balance">The future of</span>
            <br />
            <span className="text-white">hardware.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-foreground mb-10 text-balance">
            Premium electronics engineered for those who demand the extraordinary. 
            Experience technology at its finest.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-y bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-medium text-primary mb-2">CURATED</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Products
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-1 text-primary hover:underline"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="rounded-full gap-2">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to upgrade?
          </h2>
          <p className="max-w-xl mx-auto text-background/70 mb-10 text-balance">
            Join thousands of tech enthusiasts who trust NovaTech for their 
            premium electronics needs.
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
