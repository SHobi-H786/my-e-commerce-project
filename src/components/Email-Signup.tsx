import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUp() {
  return (
    <div className="mx-auto max-w-[600px] px-4 py-12 text-center">
      <h1 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl">
        Join the club and get the benefits
      </h1>
      <p className="mb-8 text-muted-foreground">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <form className="flex flex-col gap-4 sm:flex-row">
        <Input
          type="email"
          placeholder="your@email.com"
          className="flex-1"
          required
        />
        <Button className="text-white bg-[#423e72] hover:bg-[#1F1D33]">Sign up</Button>
      </form>
    </div>
  )
}

