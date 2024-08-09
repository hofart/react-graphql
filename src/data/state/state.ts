import { makeVar } from "@apollo/client";
import type { Character, FilterNameVar } from "../../domain/entities";

export const characterVar = makeVar<Character | null>(null);
export const charactersVar = makeVar<Character[]>([]);
export const loadingVar = makeVar<boolean>(true);
export const filterNameVar = makeVar<FilterNameVar>({ name: '', });