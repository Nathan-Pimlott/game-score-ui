import { IScore } from '../types';
import { mockFeaturedScores, mockScores } from '../utils/mock';

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

// Remove this once linked to the DB.
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
