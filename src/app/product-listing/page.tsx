'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"


import { Button } from "@/components/ui/button"
import { Navbar } from '@/components/Navbar'
import Features from '@/components/Features'
import SignUp from '@/components/Email-Signup'
import Footer2 from './footer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const products = [
    {
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/product1.png"
    },
    {
      name: "Rustic Vase Set",
      price: 155,
      image: "/pictures/product2.png"
    },
    {
      name: "The Silky Vase",
      price: 125,
      image: "/pictures/product3.png"
    },
    {
      name: "The Lucy Lamp",
      price: 399,
      image: "/pictures/product4.png"
    }
  ]

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div>
    <Navbar/> 
    <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
      <div className="relative aspect-square w-full bg-muted">
        <Image
          src="/pictures/Image Left.png"
          alt="The Dandy Chair"
          className="object-cover"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-medium">The Dandy Chair</h1>
          <p className="mt-2 text-2xl">£250</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium">Description</h2>
            <p className="mt-2 text-muted-foreground">
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>
          </div>
          
          <div>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium">Dimensions</h2>
          <Table className="mt-2">
            <TableHeader>
              <TableRow>
                <TableHead>Height</TableHead>
                <TableHead>Width</TableHead>
                <TableHead>Depth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>110cm</TableCell>
                <TableCell>75cm</TableCell>
                <TableCell>50cm</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center">
            <span className="mr-4 text-sm">Amount:</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                className="h-8 w-8"
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                className="h-8 w-8"
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
          <Button className="bg-[#2A254B] text-white hover:bg-[#2A254B]/90">Add to cart</Button>
        </div>
      </div>
    </div>
    <section className="py-16 md:py-24 flex flex-col items-center px-10 lg:w-full mx-auto">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-normal md:text-3xl">
          You might also like
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="cursor-pointer space-y-4">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-normal">{product.name}</h3>
                <p className="text-muted-foreground">£{product.price}</p>
              </div>

            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-none"
          >
            View collection
          </Button>
        </div>
      </div>
    </section>
    <Features/>
    <SignUp/>
    <Footer2/>
    </div>
  )
}

