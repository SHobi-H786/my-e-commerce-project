import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Features2() {
  return (
    <div className="grid min-h-[600px] lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
        <h1 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">
          From a studio in London to a global brand with over 400 outlets
        </h1>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            When we started Avion, the idea was simple. Make high quality furniture
            affordable and available for the mass market.
          </p>
          <p className="text-muted-foreground">
            Handmade, and lovingly crafted furniture and homeware is what we live,
            breathe and design so our Chelsea boutique become the hotbed for the
            London interior design community.
          </p>
        </div>
        <Button
          className="mt-8 w-fit bg-slate-100 text-black hover:bg-gray-100"
          variant="ghost"
        >
          Get in touch
        </Button>
      </div>
      <div className="relative min-h-[400px] lg:min-h-full">
        <Image
          alt="Interior scene with modern furniture and plants"
          className="object-cover"
          fill
          src="/pictures/features2.png"
          priority
        />
      </div>
    </div>
  )
}

