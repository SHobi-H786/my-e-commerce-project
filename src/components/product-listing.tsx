'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"


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

export default function ProductListing() {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center px-10 lg:w-full mx-auto">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-normal md:text-3xl">
          New ceramics
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
  )
}

