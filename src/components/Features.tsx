'use client'
import { Truck, SmilePlus, CreditCard, Recycle } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: SmilePlus,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: CreditCard,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Recycle,
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is manageable"
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center  px-10 lg:w-full mx-auto">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-2xl font-normal mb-12 md:text-3xl">
          What makes our brand different
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-3">
              <feature.icon className="h-6 w-6" />
              <h3 className="text-xl font-normal">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

