import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <HeroSection/>
      <ProductSection/>
      <Footer/>
    </div>
  );
}

export default App;
