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
  max-w-[25%] flex-none p-2 transition-all relative duration-300 transform group z-[100] overflow-visible
  ${isHighLighted ? ' opacity-100 hover:scale-[115%] hover:z-[101] ' : 'opacity-20'}
  ${originClass}
`;

  return (
    <>
      <div className={containerClass}>
        <img
          src={`${movieImageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className={isHighLighted ? 'group-hover:border-2' : ''}
        />
        <h3 className="font-semibold mt-2">{movie.title}</h3>
      </div>
    </>
  );
};

export default MovieCard;
