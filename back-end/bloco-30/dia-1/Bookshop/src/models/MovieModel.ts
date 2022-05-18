import { model as createModel } from 'mongoose';
import { IMovie, MovieSchema } from '../schemas/MovieSchema';

class MovieModel {
  constructor(private movieModel = createModel<IMovie>('movies', MovieSchema)) {}

  public async getAll(): Promise<IMovie[]> {
    const movies = this.movieModel.find();
    return movies;
  }
}

export default MovieModel;
