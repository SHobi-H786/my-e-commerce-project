import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import Hdrtwo from "@/components/Hdr";
import SignUp from "../../components/Email-Signup";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Hdrtwo />
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium max-w-3xl mx-auto leading-tight">
          A brand built on the love of craftmanship, quality and outstanding customer service
        </h1>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-muted-foreground">
              Handmade, and lovingly crafted furniture and homewares is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>
          <Button variant="outline" className="mt-4">
            Get in touch
          </Button>
        </div>

        {/* Right Column */}
        <div className="relative aspect-square bg-[#F9F9F9]">
          <Image
            src="/pictures/features2.png"
            alt="Modern living room setup with plants and furniture"
            className="object-cover w-full h-full"
            width={600}
            height={600}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="relative aspect-square bg-[#F9F9F9]">
          <Image
            src="/pictures/Image.png"
            alt="Minimalist room with black sofa"
            className="object-cover w-full h-full"
            width={600}
            height={600}
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium">
            Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            </p>
            <p className="text-muted-foreground">
              Handmade, and lovingly crafted furniture and homewares is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>
          <Button variant="outline" className="mt-4">
            Get in touch
          </Button>
        </div>
      </div>
      <Features />
      <SignUp />
      <Footer />
    </div>
  );
}
