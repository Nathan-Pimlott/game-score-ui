import { IScore, IScoreToCreate } from "../types";

export function getScores(): Promise<IScore[]> {
  return [];
}

export function getScore(id: string): Promise<IScore> {
  return {};
}

export function createScore(score: IScoreToCreate): Promise<IScore> {
  return {};
}
