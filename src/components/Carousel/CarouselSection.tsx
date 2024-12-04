import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { ChevronRight } from 'lucide-react';

/* action plan */
// get 12 movie images
// crop the images to 16:9
// convert the images to 400px webp images
// add them to the project under /assets/carousel
// create movies json
// src
// title
// description
// render 12 movies in one line aspect-video

const CarouselSection = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
    <section className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3">
        <h2 className="text-2xl font-bold pb-3">New & trending</h2>
      </div>

      <div className="max-w-7xl flex gap-3 my-6 mx-auto px-3 relative">
        <div className="absolute w-full h-full">
          <button className="bg-gray-500 h-11 aspect-square absolute flex justify-center items-center right-0 top-1/2 transform -translate-y-1/2">
            <ChevronRight />
          </button>
        </div>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={`${movieImageBaseUrl}${movie.poster_path}`} alt={movie.title} className="movie-poster min-w-72" />
            <h3 className="font-semibold mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
