import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface Product {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductsPage() {
  const products: Product[] = [
    {
      id: "1",
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/product1.png",
    },
    {
      id: "2",
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/product2.png",
    },
    {
      id: "3",
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/Photo.png",
    },
    {
      id: "4",
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/product3.png",
    },
    {
      id: "5",
      name: "The Dandy chair",
      price: 250,
      image: "/pictures/product4.png",
    },
    {
      id: "6",
      name: "The Dandy chair",
      price: 290,
      image: "/pictures/Photo (1).png",
    },
    {
        id: "5",
        name: "The Dandy chair",
        price: 250,
        image: "/pictures/Photo (2).png",
      },
      {
        id: "6",
        name: "The Dandy chair",
        price: 290,
        image: "/pictures/Photo (3).png",
      },
  ]

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
        <Header/>
      {/* Filters Sidebar */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-normal mb-8">All products</h1>
          <h2 className="text-sm font-medium mb-2">Product type</h2>
          <div className="space-y-2">
            {['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox id={item} />
                <Label htmlFor={item}>{item}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2">Price</h2>
          <RadioGroup defaultValue="0-100">
            {['0 - 100', '101 - 250', '250 +'].map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <RadioGroupItem value={range.toLowerCase().replace(/\s/g, '')} id={range} />
                <Label htmlFor={range}>£{range}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2">Designer</h2>
          <div className="space-y-2">
            {['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke'].map((designer) => (
              <div key={designer} className="flex items-center space-x-2">
                <Checkbox id={designer} />
                <Label htmlFor={designer}>{designer}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="aspect-square relative mb-4 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-muted-foreground">£{product.price}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline">Load more</Button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

