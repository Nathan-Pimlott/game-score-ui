// Remove this once linked to the DB.
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
