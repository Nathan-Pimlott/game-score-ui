export type Console = 'Switch' | 'Steam' | 'DS' | 'PS4' | 'Gameboy';

export interface IScore {
  id: string;
  name: string;
  score: number;
  timeToComplete: number;
  finishDate: string;
  playedConsoles: Console[];
  thoughts: {
    overview: string;
    good: string;
    bad: string;
  };
}

export interface IGenre {
  id: string;
  name: string;
  examples: { id: string; name: string }[];
}
