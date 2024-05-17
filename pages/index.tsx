import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
