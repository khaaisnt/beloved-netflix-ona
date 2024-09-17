import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Gallery />
      <Footer />
    </main>
  );
}
