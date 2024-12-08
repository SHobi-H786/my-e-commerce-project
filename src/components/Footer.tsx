import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] flex flex-col items-center px-10 lg:w-full mx-auto mt-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold text-white">Avion</h2>
            <p className="mt-4 text-sm text-white">
              Handmade, and lovingly crafted furniture and homeware.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Menu</h3>
              <ul className="mt-4 space-y-2">
                {["New arrivals", "Best sellers", "Recently viewed", "Popular this week"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white hover:text-green-600">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our company</h3>
              <ul className="mt-4 space-y-2">
                {["About us", "Vacancies", "Contact us", "Privacy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-white hover:text-green-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Join our mailing list</h3>
            <p className="mt-4 text-sm text-white">Be the first to know about new collections and exclusive offers.</p>
            <form className="mt-4">
              <div className="flex max-w-md text-white bg-[#443d71]">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full flex-1"
                  required
                />
                <Button type="submit" className="ml-2 bg-white text-[#2A254B] hover:bg-white">
                  Sign up
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white pt-8">
          <p className="text-sm text-white">&copy; 2023 Avion, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

