import { IScore } from "../types";
import { mockFeaturedScores, mockScores } from "../utils/mock";
import { sleep } from "../utils/sleep";

export async function getScores(): Promise<IScore[]> {
  return [];
}

export async function getScore(id: string): Promise<IScore | undefined> {
  await sleep(1000);

  return mockScores.find((ms) => ms.id === id);
}

export async function getFeaturedScores(): Promise<IScore[]> {
  // This needs removing once we no longer need to simulate delays
  await sleep(1000);
  return mockFeaturedScores;
}

export async function getScoresByPlatform(
  platformId: string,
): Promise<IScore[]> {
  // This is not ready as platforms are stored as names rather than IDs at the minute. Returning all for now.
  // return mockScores.filter((score) => score.playedPlatforms.includes(platformId));
  platformId;
  return mockScores;
}

export async function getScoresByLetter(letter: string): Promise<IScore[]> {
  return mockScores.filter((score) => score.name.startsWith(letter));
}
