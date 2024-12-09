'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="max-w-[1440px] h-[735px] flex flex-col items-center bg-[#2A254B] px-10 lg:w-full mx-auto">
 <div className="container mx-auto px-4">
       <div className="grid min-h-[600px] grid-cols-1 items-center gap-8 py-20 md:grid-cols-2">
          <div className="space-y-8">
         <h1 className="text-3xl font-normal leading-tight text-white md:text-4xl lg:text-5xl lg:leading-tight">
               The furniture brand for the future, with timeless designs
             </h1>
             <Button 
               variant="secondary" 
               size="lg"
               className="rounded-none bg-[#F9F9F926] text-white hover:bg-[#F9F9F940]"
             >
               View collection
             </Button>
             <p className="max-w-md text-base text-gray-300 ">
               A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
             </p>
           </div>
           <div className="relative h-full min-h-[400px] w-full">
             <Image
               src={require("../../public/pictures/Right Image.png")}
               alt="Modern chair design"
               height={1000}
               width={520}
            
               className="object-contain"
               priority
             />
           </div>
         </div>
       </div>
  </div>
    
  )
}

