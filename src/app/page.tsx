import SignUp from "@/components/Email-Signup";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/popular-product-listing";
import ProductListing from "@/components/product-listing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <ProductListing/>
      <PopularProducts/>
      <SignUp/>
      <Features2/>
      <Footer/>
    </div>
  );
}
