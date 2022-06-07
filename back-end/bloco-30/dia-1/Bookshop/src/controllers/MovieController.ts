import { Request, Response } from 'express';
import MovieService from '../services/MovieService';

class MovieController {  
  constructor(private movieService = new MovieService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const movies = await this.movieService.getAll();

      return res.status(200).json(movies);
    } catch (error: any) {
      return res.status(200).json({ message: error.message });
    }
  }
}

export default MovieController;
