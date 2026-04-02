"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Admin login
    if (
      email === "ziadmohamedelmetwaly@gmail.com" &&
      password === "123"
    ) {
      document.cookie = "admin=true; path=/"
      router.push("/admin")
    } else {
      // ✅ User login (fake for now)
      const user = {
        email,
      }

      localStorage.setItem("user", JSON.stringify(user))

      router.push("/") // يوديه الهوم
    }

    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              className="mt-1.5 rounded-lg h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="mt-1.5 rounded-lg h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-lg bg-foreground text-background hover:bg-foreground/90"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
<p className="text-center text-sm text-muted-foreground mt-6">
  {"Don't have an account? "}
  <a href="/register" className="text-primary hover:underline">
    Create one
  </a>
</p>
      </div>
    </div>
  )
}