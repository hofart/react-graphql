import { makeVar } from "@apollo/client";
import { Character } from "../../domain/entities/Character";

export const charactersVar = makeVar<Character[]>([]);

export const loadingVar = makeVar<boolean>(false);