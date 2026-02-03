import './style.css';
import type { Movie } from '../../types/types';
import { Link } from "react-router";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {


  return (
    <div className="movie-card">
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="movie-placeholder">Sem imagem</div>
      )}

      <div className="movie-info">
        <h3>{movie.Title}</h3>
        {movie.Year && <span>{movie.Year}</span>}
      </div>

      <div className="className">
        <button>
           <Link to="/detalhes" state={{movie:movie}}>
              Ver Detalhes
          </Link>
        </button>
      </div>
    </div>
  );
}
