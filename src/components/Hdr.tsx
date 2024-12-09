"use client"

import Link from "next/link"
import { Search, ShoppingCart, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Hdrtwo() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Avion
          </Link>
          <div className="flex items-center space-x-8">
            <nav className="hidden space-x-6 md:flex">
              <Link
                href="/aboutus"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Blog
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
        </div>

        {/* Category Navigation */}
        <NavigationMenu className="max-w-full justify-start py-2">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <Link 
                href="/products" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                All products
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/plant-pots" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Plant pots
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/ceramics" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Ceramics
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/tables" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Tables
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/chairs" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Chairs
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/crockery" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Crockery
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/tableware" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Tableware
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                href="/categories/cutlery" 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Cutlery
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

