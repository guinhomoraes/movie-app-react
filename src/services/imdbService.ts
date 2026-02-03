import { imdbApi } from './api';
import type {Movie} from '../types/types'

const apikey = `?apikey=${import.meta.env.VITE_IMDB_API_KEY}&`;

/**
 * Buscar filmes pelo nome
 */
export async function buscarFilmes(query: string): Promise<Movie> {

  const { data } = await imdbApi.get(`${apikey}t=${query}`, {
    params: { q: query },
  });

  return (data || null);
}

/**
 * Buscar filme por ID IMDb
 */
export async function buscarFilmePorId(imdbId: string) : Promise<Movie | null> {
  const { data } = await imdbApi.get(`${apikey}i=${imdbId}`, {
    params: { tconst: imdbId },
  });

  return (data || null);

}
