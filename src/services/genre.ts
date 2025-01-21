import { IGenre } from "../types";
import { get } from "../utils/request";

export async function getGenres(): Promise<IGenre[]> {
  const genresRes = await get("/genres");

  if (genresRes.error) {
    throw Error("Error getting genres. Please try again later.");
  }

  return genresRes.data.genres as IGenre[];
}
