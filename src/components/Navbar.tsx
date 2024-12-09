"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [showBanner, setShowBanner] = useState(true)

    return (
        <div className="relative">
            {showBanner && (
                <div className="relative bg-[#2A2844] px-4 py-3 text-center text-sm text-white">
                    <p>Free delivery on all orders over £50 with code easter checkout!</p>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-[#1F1D33]"
                        onClick={() => setShowBanner(false)}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close banner</span>
                    </Button>
                </div>
            )}
            <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-semibold">
          Avion
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/categories/plant-pots"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Plant pots
          </Link>
          <Link
            href="/categories/ceramics"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Ceramics
          </Link>
          <Link
            href="/categories/tables"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Tables
          </Link>
          <Link
            href="/categories/chairs"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Chairs
          </Link>
          <Link
            href="/categories/crockery"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Crockery
          </Link>
          <Link
            href="/categories/tableware"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Tableware
          </Link>
          <Link
            href="/categories/cutlery"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Cutlery
          </Link>
          <Link
            href="/aboutus"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
        </div>
      </div>
    </header>
        </div>
        
    )
}

