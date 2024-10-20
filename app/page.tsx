import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GalleryOna from "./components/GalleryOna";
import GalleryOur from "./components/GalleryOur";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <GalleryOna />
      <GalleryOur />
      <Footer />
    </main>
  );
}
