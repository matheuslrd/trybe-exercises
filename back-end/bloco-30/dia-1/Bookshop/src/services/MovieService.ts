import MovieModel from "../models/MovieModel";
import { IMovie } from "../schemas/MovieSchema";

class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getAll(): Promise<IMovie[]> {
    const movies = await this.movieModel.getAll();
    return movies;
  }
}

export default MovieService;
