import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
  indexOfVisibleMovies: number[];
  index: number;
  movieImageBaseUrl: string;
}

const MovieCard = ({ movie, indexOfVisibleMovies, index, movieImageBaseUrl }: MovieCardProps) => {
  const isHighLighted = indexOfVisibleMovies.some((indexOfVisibleMovie) => index === indexOfVisibleMovie);
  // Determine origin class
  const originClass = index % 4 === 0 ? 'origin-left' : (index + 1) % 4 === 0 ? 'origin-right' : 'origin-center';

  // Combine classes
  const containerClass = `
    max-w-[25%] flex-none p-2 transition-all relative duration-300 transform group z-[100] overflow-visible cursor-pointer
    ${isHighLighted ? 'opacity-100 hover:scale-[115%] hover:z-[101]' : 'opacity-20'}
    ${originClass}
  `;

  return (
    <div className={containerClass}>
      {/* Hover effect container */}
      <div className="relative h-full w-full group">
        {/* Cover Image */}
        <img
          src={`${movieImageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Hover content */}
        <div className="absolute inset-0 bg-black border-2 w-full flex flex-col items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {/* Poster Image */}
          <img
            src={`${movieImageBaseUrl}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full mb-4 object-cover"
          />
          <div className="flex flex-col justify-center text-center p-3">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-300 text-center line-clamp-6">{movie.overview}</p>
          </div>
          <div className="mt-auto text-left w-full p-3 font-bold">{movie.vote_average}/10</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
