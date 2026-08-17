import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Order from "../components/Order";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Order />
        <Location />
      </main>

      <Footer />
    </>
  );
}