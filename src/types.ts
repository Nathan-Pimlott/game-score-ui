export interface IScoreToCreate {
  name: string;
  score: number;
  timeToComplete: number;
  finishDate: string;
  playedConsoles: Console[];
  thoughts: string;
}

export interface IScore extends IScoreToCreate {
  id: string;
}

export type Console = 'Switch' | 'Steam' | 'DS' | 'PS4' | 'Gameboy';
