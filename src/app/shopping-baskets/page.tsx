import Header from '@/components/Header'
import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

const Shoping_baskets = () => {
  const products: Product[] = [
    {
      id: "1",
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri color grey glaze.",
      price: 85,
      image: "/pictures/shoppingcart1.png",
      quantity: 1,
    },
    {
      id: "2",
      name: "Basic white vase",
      description: "Beautiful and simple this is one for the classics",
      price: 85,
      image: "/pictures/shoppingcart2.png",
      quantity: 1,
    },
  ]

  const subtotal = products.reduce((acc, product) => acc + (product.price * product.quantity), 0)
  return (
    <div>
      <Header/>
      <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-normal mb-8">Your shopping cart</h1>
      
      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div>Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-right">Total</div>
      </div>

      <div className="divide-y">
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-3 gap-4 py-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 relative bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                <p className="text-sm mt-1">£{product.price}</p>
              </div>
            </div>
            <div className="text-center self-center">{product.quantity}</div>
            <div className="text-right self-center">£{product.price * product.quantity}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-lg">Subtotal</span>
          <span className="text-2xl">£{subtotal}</span>
        </div>
        <p className="text-sm text-muted-foreground text-right">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="flex justify-end">
          <Button className="bg-[#2A2B3C] hover:bg-[#2A2B3C]/90 text-white px-8">
            Go to checkout
          </Button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Shoping_baskets
