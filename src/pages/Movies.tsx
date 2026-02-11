import { useState } from 'react';
import { buscarFilmes} from '../services/imdbService';
import { MovieCard } from '../components/MovieCard';
import { MovieSearch } from '../components/MovieSearch';
import type {Movie} from '../types/types'
import './style.css'


export function Movies() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const result = await buscarFilmes(query);
      setMovie(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="movies-page">
      <h1>🎬 IMDb Filmes</h1>

      <MovieSearch
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      {loading && <p className="loading">Carregando...</p>}

      <div className="movies-grid">
        { movie?.Response == 'True' ? (
                <MovieCard key={movie.imdbID} movie={movie}/>
            ):
            (
                'Filme não encontrado'
            )
        }
      </div>
    </div>
  );
}
