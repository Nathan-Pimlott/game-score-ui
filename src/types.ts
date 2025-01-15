export interface IScore {
  id: string;
  name: string;
  score: number;
  timeToComplete: number;
  finishDate: string;
  playedConsoles: Console[];
  thoughts: string;
}

export type Console = 'Switch' | 'Steam' | 'DS' | 'PS4' | 'Gameboy';
