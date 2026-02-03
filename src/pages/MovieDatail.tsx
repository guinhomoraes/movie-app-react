import type { Movie } from '../types/types';
import { useLocation, Link } from 'react-router'

export function MovieDetails() {

  const location = useLocation();
  const movie = location.state.movie as Movie | undefined;

  // Fallback caso entre direto pela URL
  if (!movie) {
    return (
      <div className="details-error">
        <p>⚠️ Filme não encontrado</p>
        <Link to='/'>Voltar</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      
      <Link to='/'>Voltar</Link>

      {/* CARD PRINCIPAL */}
      <div className="details-card main-card">
        <div className="details-main">
          {/* Poster */}
          <div className="details-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          {/* Conteúdo */}
          <div className="details-content">
            <h1>{movie.Title}</h1>

            <div className="details-meta">
              <span>{movie.Year}</span>
              <span>{movie.Runtime}</span>
              <span>{movie.Rated}</span>
            </div>

            <div className="details-genres">
              {movie.Genre.split(',').map((g) => (
                <span key={g}>{g.trim()}</span>
              ))}
            </div>

            <p className="details-plot">{movie.Plot}</p>

            <div className="details-credits">
              <p><strong>Diretor:</strong> {movie.Director}</p>
              <p><strong>Roteiro:</strong> {movie.Writer}</p>
              <p><strong>Elenco:</strong> {movie.Actors}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD DE RATINGS */}
      <div className="details-card ratings-card">
        <div className="rating imdb">⭐ IMDb {movie.imdbRating}</div>
        <div className="rating meta">🎯 Metascore {movie.Metascore}</div>
      </div>

      {/* CARD DE INFORMAÇÕES */}
      <div className="details-card info-card">
        <h2>Mais informações</h2>

        <div className="info-grid">
          <div><strong>Idioma:</strong> {movie.Language}</div>
          <div><strong>País:</strong> {movie.Country}</div>
          <div><strong>Prêmios:</strong> {movie.Awards}</div>
          <div><strong>Bilheteria:</strong> {movie.BoxOffice}</div>
          <div><strong>Produção:</strong> {movie.Production}</div>
          <div>
            <strong>Website:</strong>{' '}
            {movie.Website !== 'N/A' ? (
              <a href={movie.Website} target="_blank" rel="noreferrer">
                Acessar
              </a>
            ) : (
              'N/A'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
