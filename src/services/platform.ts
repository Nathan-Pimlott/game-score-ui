import { IPlatform } from "../types";
import { mockPlatforms } from "../utils/mock";
import { sleep } from "../utils/sleep";

export async function getPlatforms(): Promise<IPlatform[]> {
  await sleep(1500);
  return mockPlatforms;
}

export async function getPlatform(
  platformId: string,
): Promise<IPlatform | undefined> {
  await sleep(1500);
  return mockPlatforms.find((platform) => platform.id === platformId);
}
