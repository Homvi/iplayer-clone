import CarouselSection from './components/Carousel/CarouselSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <CarouselSection />
    </div>
  );
}

export default App;
