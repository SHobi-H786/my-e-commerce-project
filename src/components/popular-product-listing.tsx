import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "The Poplar suede sofa",
    price: 980,
    image: "/pictures/Large.png",
    featured: true
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/pictures/product22.png",
    featured: false
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/pictures/product23.png",
    featured: false
  }
]

export default function PopularProducts() {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center px-10 lg:w-full mx-auto">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-normal md:text-3xl">
          Our popular products
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group cursor-pointer space-y-4 ${
                product.featured ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1'
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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

