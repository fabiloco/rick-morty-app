import { Comment } from "./comment.type";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  image: string;
  comments: Array<Comment>;
}