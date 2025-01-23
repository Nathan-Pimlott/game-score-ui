import { IScore } from "../types";
import { get } from "../utils/request";

export async function getScore(id: string): Promise<IScore | undefined> {
  const scoreRes = await get(`/score/${id}`);

  if (!scoreRes.error) {
    return scoreRes.data.score;
  }
}

export async function getFeaturedScores(): Promise<IScore[]> {
  const scoreRes = await get("/featured-scores");

  if (!scoreRes.error) {
    return scoreRes.data.featuredScores as IScore[];
  }

  return [];
}

export async function getScoresByLetter(letter: string): Promise<IScore[]> {
  const scoreRes = await get(`/scores-by-letter/${letter}`);
  if (!scoreRes.error) {
    return scoreRes.data.scoresByLetter;
  }
  return [];
}

export async function getScoresBySearch(searchText: string): Promise<IScore[]> {
  const scoreRes = await get(`/search?searchText=${encodeURI(searchText)}`);
  if (!scoreRes.error) {
    return scoreRes.data.scores;
  }
  return [];
}
