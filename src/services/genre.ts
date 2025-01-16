import { v4 as uuid } from 'uuid';

import { IGenre } from '../types';

export async function getGenres(): Promise<IGenre[]> {
  return [
    {
      id: uuid(),
      name: 'RPG',
      examples: [
        { id: '123', name: 'Pokemon Scarlet/Violet' },
        { id: '234', name: 'Octopath Traveller 2' },
        { id: '345', name: 'Spider-Man Remastered' },
        { id: '456', name: 'To The Moon' }
      ]
    },
    {
      id: uuid(),
      name: 'Action',
      examples: [
        { id: '123', name: 'Pokemon Scarlet/Violet' },
        { id: '345', name: 'Spider-Man Remastered' }
      ]
    },
    {
      id: uuid(),
      name: 'JRPG',
      examples: [{ id: '234', name: 'Octopath Traveller 2' }]
    },
    {
      id: uuid(),
      name: 'Adventure',
      examples: [
        { id: '123', name: 'Pokemon Scarlet/Violet' },
        { id: '234', name: 'Octopath Traveller 2' }
      ]
    },
    {
      id: uuid(),
      name: 'Open World',
      examples: [
        { id: '123', name: 'Pokemon Scarlet/Violet' },
        { id: '345', name: 'Spider-Man Remastered' }
      ]
    }
  ];
}
