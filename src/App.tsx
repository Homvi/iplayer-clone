import Backdrop from './components/Backdrop';
import CarouselSection from './components/Carousel/CarouselSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <Backdrop isOpen={false} />
    </div>
  );
}

export default App;
