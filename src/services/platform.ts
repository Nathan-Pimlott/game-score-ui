import { IPlatform } from "../types";
import { mockPlatforms } from "../utils/mock";

export async function getPlatforms(): Promise<IPlatform[]> {
  return mockPlatforms;
}

export async function getPlatform(
  platformId: string,
): Promise<IPlatform | undefined> {
  return mockPlatforms.find((platform) => platform.id === platformId);
}
