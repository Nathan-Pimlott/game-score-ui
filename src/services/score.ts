import {
  IScore
  // IScoreToCreate
} from '../types';
import { mockFeaturedScores } from '../utils/mock';

// export function getScores(): Promise<IScore[]> {
//   return [];
// }

// export function getScore(id: string): Promise<IScore> {
//   return {};
// }

// export function createScore(score: IScoreToCreate): Promise<IScore> {
//   return {};
// }

export async function getFeaturedScores(): Promise<IScore[]> {
  await await sleep(1000);
  //do what you need here
  return mockFeaturedScores;
}
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
