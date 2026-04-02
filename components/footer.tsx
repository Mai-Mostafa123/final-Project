import Link from "next/link"
import ChatBot from "./Chatbot"
const shopLinks = [
  { href: "/products?category=Laptops", label: "Laptops" },
  { href: "/products?category=Smartphones", label: "Smartphones" },
  { href: "/products?category=Audio", label: "Audio" },
  { href: "/products?category=Wearables", label: "Wearables" },
]

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/returns", label: "Returns" },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-foreground">Nova</span>
              <span className="text-xl font-bold text-primary">Tech</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium electronics and smart devices. The future of hardware, refined.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">SHOP</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">LEGAL</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NovaTech. All rights reserved.
          </p>
        </div>
      </div>
      <ChatBot/>
    </footer>
  )
}
