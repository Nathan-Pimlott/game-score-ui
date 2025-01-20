import { IScore } from "../types";
import { mockFeaturedScores, mockScores } from "../utils/mock";
import { sleep } from "../utils/sleep";

export async function getScore(id: string): Promise<IScore | undefined> {
  await sleep(1500);
  return mockScores.find((ms) => ms.id === id);
}

export async function getFeaturedScores(): Promise<IScore[]> {
  await sleep(1500);
  return mockFeaturedScores;
}

export async function getScoresByPlatform(
  platformId: string,
): Promise<IScore[]> {
  // This is not ready as platforms are stored as names rather than IDs at the minute. Returning all for now.
  // return mockScores.filter((score) => score.playedPlatforms.includes(platformId));
  await sleep(1500);
  platformId;
  return mockScores;
}

export async function getScoresByLetter(letter: string): Promise<IScore[]> {
  await sleep(1500);
  return mockScores.filter((score) => score.name.startsWith(letter));
}

export async function getScoresBySearch(
  searchString: string,
): Promise<IScore[]> {
  await sleep(1500);
  // This logic is only basic and causes issues.
  // Logic will be better once API is implemented.
  return mockScores.filter((score) =>
    score.name.toLowerCase().includes(searchString.toLowerCase()),
  );
}
