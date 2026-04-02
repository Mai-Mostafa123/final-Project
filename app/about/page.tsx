import { Users, Award, Globe, RefreshCw } from "lucide-react"

const stats = [
  {
    icon: Users,
    title: "50K+ Customers",
    description: "Trusted by tech enthusiasts worldwide",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest products make our shelves",
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Delivering to 100+ countries",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
]

export default function AboutPage() {
  return (
    <div className="container bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          About NovaTech
        </h1>

        <div className="prose prose-lg text-foreground">
          <p className="text-lg leading-relaxed mb-6">
            Founded in 2020, NovaTech is dedicated to bringing cutting-edge technology 
            to consumers who demand the very best. We curate premium electronics from 
            the world&apos;s leading manufacturers, ensuring every product meets our rigorous 
            quality standards.
          </p>

          <p className="text-lg leading-relaxed">
            Our mission is simple: make technology accessible, delightful, and personal. 
            We believe great hardware should be paired with an exceptional shopping 
            experience &mdash; from discovery to delivery.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border rounded-2xl p-6 bg-muted/30"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
              <stat.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-1">
              {stat.title}
            </h3>
            <p className="text-foreground">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
