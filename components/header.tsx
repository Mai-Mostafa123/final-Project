"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Moon, Sun, Heart, ShoppingBag, User, LogOut } from "lucide-react"
import { useTheme } from "next-themes"
import { useStore } from "@/lib/store-context"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { wishlist, cartCount, setIsCartOpen } = useStore()
  const [mobileOpen, setMobileOpen] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
  const admin = document.cookie.includes("admin=true")
  const user = localStorage.getItem("user")

  setIsLoggedIn(!!admin || !!user)
}, [typeof window !== "undefined"]);

  useEffect(() => {
    const checkLogin = () => {
      const admin = document.cookie.includes("admin=true");
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!admin || !!user);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []); // القوس ده لازم يقفل الـ useEffect هنا
  const handleLogout = () => {
  // delete admin cookie
  document.cookie =
    "admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00"

  // delete user
  localStorage.removeItem("user")

  // 🔥 نعمل redirect للهوم
  window.location.href = "/"
}

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-foreground">⚡Nova</span>
          <span className="text-xl font-bold text-primary">Tech</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                pathname === link.href
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl px-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Icons */}
        <div className="flex items-center gap-2">

          {/* Theme */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Wishlist */}
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          {/* 🔥 هنا السحر */}
          {isLoggedIn ? (
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 text-red-500" />
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}