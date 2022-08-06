import { Character } from "./character";

export type Episod = {
  id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: Character[];
  series:string;
}
