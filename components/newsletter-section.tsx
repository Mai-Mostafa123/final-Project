"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          <span className="bg-primary text-primary-foreground px-2">Stay</span>{" "}
          in the loop
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Get early access to new releases, exclusive deals, and tech insights.
        </p>

        {submitted ? (
          <p className="text-primary font-medium">
            Thanks for subscribing! Check your inbox soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full h-12 px-6"
              required
            />
            <Button type="submit" className="rounded-full h-12 px-8">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
