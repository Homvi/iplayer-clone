// src/components/HeroSection/HeroSection.js
import { Film, Popcorn } from 'lucide-react';
import { movies } from './movieData';

const HeroSection = () => {
  return (
    <div className="border-t-[0.5px] border-white/30 bg-red-300">
      <section className="max-w-7xl mx-auto px-3  relative w-full aspect-video">
        <div className="flex h-full flex-col justify-end">
          <div className="flex flex-col gap-3 z-20 max-w-sm">
            <h1 className="text-2xl font-bold max-w-xs z-10 relative">{movies[0].title}</h1>
            <p className="text-gray-300">{movies[0].description}</p>
            <p className="text-lg font bold">{movies[0].isSeries ? movies[0].updateFrequency : ''}</p>
            {/* button container */}
            <div className="flex gap-3 font-bold">
              <div className="relative h-14 group">
                {/* Background div with scaling effect on hover */}
                <div className="bg-white w-full h-full absolute group-hover:bg-white/95 group-hover:scale-110 transition-transform duration-300"></div>

                {/* Watch now Button */}
                <button className="text-black px-6 z-10 py-2 w-full h-full relative flex justify-center items-center gap-3">
                  {' '}
                  <Popcorn /> Watch now
                </button>
              </div>

              <div className="relative h-14 group">
                {/* Background div with scaling effect on hover */}
                <div className="bg-gray-700 w-full h-full absolute group-hover:scale-110 group-hover:bg-white  transition-transform duration-300"></div>

                {/* Trailer Button */}
                <button className="text-white px-6 z-10 py-2 w-full h-full relative flex justify-center items-center gap-3 group-hover:text-black">
                  <Film /> Trailer
                </button>
              </div>
            </div>
          </div>
          <div className="z-10 absolute w-full h-full bg-gradient-to-r from-black from-20% via-transparent to-black"></div>
          {/* cover image */}
          <div className="h-fit w-5/6 absolute right-0 top-0">
            <div className="bg-black/90 h-full w-full z-20">
              <img className="w-full absolute right-0 top-0 aspect-video" src={movies[0].image} alt={movies[0].title} />
            </div>
          </div>
          {/* thumbnails grid */}
          <div className="h-1/3 bg-gradient-to-b from-transparent via-black to-black relative z-10 py-11">
            <div className="flex w-full h-full absolute gap-6 max-w-lg">
              <div className="w-72 aspect-video bg-white"></div>
              <div className="w-72 aspect-video bg-white"></div>
              <div className="w-72 aspect-video bg-white"></div>
              <div className="w-72 aspect-video bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
