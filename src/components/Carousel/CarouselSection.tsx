import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { ChevronRight } from 'lucide-react';

const CarouselSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const moviesPerPage = 4;
  const [indexOfVisibleMovies, setIndexOfVisibleMovies] = useState<number[]>([0, 1, 2, 3]);

  /* TODO: darken uncentralised images */
  /* TODO: Add hover effect */

  const handleNextSlide = () => {
    // Calculate the total number of possible slides
    const totalSlides = Math.ceil(movies.length / moviesPerPage);
    const newIndexOfVisibleMovies = indexOfVisibleMovies.map((index) => index + 4);
    setIndexOfVisibleMovies(newIndexOfVisibleMovies);
    // Increment translation, but don't go beyond the last slide
    setTranslateX((prev) => Math.min(prev + 100, (totalSlides - 1) * 100));
  };

  const handlePrevSlide = () => {
    const newIndexOfVisibleMovies = indexOfVisibleMovies.map((index) => index - 4);
    setIndexOfVisibleMovies(newIndexOfVisibleMovies);
    // Decrement translation, but don't go below the first slide
    setTranslateX((prev) => Math.max(prev - 100, 0));
  };

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 12)))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const movieImageBaseUrl = 'https://image.tmdb.org/t/p/w400';
  return (
    <section className="w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-3">
        <h2 className="text-2xl font-bold pb-3">New & trending</h2>
      </div>

      {/* buttons container */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  h-20 w-48 items-center flex justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevSlide}
          disabled={translateX === 0}
          className={`
      bg-gray-500 
      h-11 
      flex 
      gap-3 
      aspect-square 
      relative 
      justify-center 
      items-center 
      z-10
      ${translateX === 0 ? 'opacity-30 ' : 'hover:bg-gray-400 cursor-pointer'}
    `}
        >
          <ChevronRight className="rotate-180" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextSlide}
          disabled={translateX >= (Math.ceil(movies.length / moviesPerPage) - 1) * 100}
          className={`
      bg-gray-500 
      h-11 
      aspect-square 
      relative 
      flex 
      justify-center 
      items-center 
      z-10
      ${
        translateX >= (Math.ceil(movies.length / moviesPerPage) - 1) * 100
          ? 'opacity-30'
          : 'hover:bg-gray-400 cursor-pointer'
      }
    `}
        >
          <ChevronRight />
        </button>
      </div>
      {/*   slider  */}
      <div
        className="max-w-7xl opacity-100 flex my-6 mx-auto relative transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${translateX}%)`,
          width: `${(movies.length / moviesPerPage) * 100}%`
        }}
      >
        {/* movies */}
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`max-w-[25%] flex-none p-1 transition-opacity duration-300 ${
              indexOfVisibleMovies.some((indexOfVisibleMovie) => index === indexOfVisibleMovie)
                ? 'opacity-100'
                : 'opacity-20'
            }`}
          >
            <img src={`${movieImageBaseUrl}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <h3 className="font-semibold mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
