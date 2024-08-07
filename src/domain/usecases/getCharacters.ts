import { Character } from "../entities/Character";
import { CharacterRepository } from "../../data/repositories/characterRepository";

export class GetCharacters {
  constructor(private characterRepository: CharacterRepository) { }

  async execute(): Promise<Character[]> {
    return this.characterRepository.getCharacters();
  }
}