type Ratings = {
    Source: string;
    value: string;
}


export type Movie = {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<Ratings>,
  Metascore: number;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string
  Response: string;
}