import { Character } from "../../domain/entities/Character";

export interface CharacterRepository {
  getCharacters(): Promise<Character[]>;
}