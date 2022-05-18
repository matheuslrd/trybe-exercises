import { Schema } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  weight?: string;
}

export const BookSchema = new Schema<IBook>({
  author: { type: String, required: true },
  title: { type:  String, required: true },
  publishedYear: { type:  Number, required: false },
  weight: { type:  String, required: false },
});
