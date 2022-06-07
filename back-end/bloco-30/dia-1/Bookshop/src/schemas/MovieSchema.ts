import { Schema } from 'mongoose';

export interface IMovie {
  author: string;
  releseadYear: number;
}

export const MovieSchema = new Schema<IMovie>({
  author: { type: String, required: true },
  releseadYear: { type: Number, required: true },
});
