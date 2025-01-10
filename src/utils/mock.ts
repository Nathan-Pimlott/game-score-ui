import { v4 as uuid } from 'uuid';
import _ from 'lodash';

import { IScore } from '../types';

const mockScore = (idx: number): IScore => ({
  id: uuid(),
  name: `Game ${idx}`,
  thoughts: 'Some thoughts...',
  score: idx % 2 === 0 ? 10 : 5,
  playedConsoles: ['Switch', 'Steam'],
  finishDate: '2024-01-01 12:00:00',
  timeToComplete: 20
});

export const mockFeaturedScores = _.times(5, (idx) => mockScore(idx));
