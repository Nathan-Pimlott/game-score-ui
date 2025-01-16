import _ from 'lodash';

import { IScore } from '../types';

export const mockScores: IScore[] = [
  {
    id: '123',
    name: 'Pokemon Scarlet/Violet',
    thoughts: {
      overview: `
      It was a fun Pokemon game, it ran horribly on the switch and the graphics were pretty poor, but it has the charm that pokemon games usually have. They have made post game shiny hunting a lot easier than it use to be which you may see as a bad thing, but i found myself playing it for hours because it seemed possible for once. This will of course be a personal preference, but I like that if you focus, you are able to catch a shiny every half an hour or so.
      `,
      good: '',
      bad: ''
    },
    score: 7,
    playedConsoles: ['Switch'],
    finishDate: '2024-01-01 00:00:00',
    timeToComplete: 30
  },
  {
    id: '234',
    name: 'Octopath Traveller 2',
    thoughts: {
      overview: `
        This is a classic turn based JRPG with a really nice HD-2D art style which has a real charm to it.
        It is the second game in the series, but the story does not follow on so you could start with this one if you wanted. \n
        You get the choice of 8 characters to begin the game, with the remaining 7 joining along the way. You can have any of the characters in your party at any time, however the story is split into chapters for each character, requiring that character to be in the party for their chapter. You can complete the characters stories in any order, so you can complete all chapters for one character before starting other characters if you wanted, or you can play every character's chapter 1, then chapter 2 and so on. This is the easier method as the chapters get increasingly (and quickly) difficult, so tackling a characters story at lower levels or without a full party can be very difficult. \n
        They added a lot of nice to haves from the first game, which was already one of my favourite games, so this one really was for me. \n
        A lot of grinding is required, as with any JRPG, but if you're happy with that then I'm sure you will love this game.
      `,
      good: `
        This is a classic turn based JRPG with a really nice HD-2D art style which has a real charm to it.
        It is the second game in the series, but the story does not follow on so you could start with this one if you wanted. \n
        You get the choice of 8 characters to begin the game, with the remaining 7 joining along the way. You can have any of the characters in your party at any time, however the story is split into chapters for each character, requiring that character to be in the party for their chapter. You can complete the characters stories in any order, so you can complete all chapters for one character before starting other characters if you wanted, or you can play every character's chapter 1, then chapter 2 and so on. This is the easier method as the chapters get increasingly (and quickly) difficult, so tackling a characters story at lower levels or without a full party can be very difficult. \n
        They added a lot of nice to haves from the first game, which was already one of my favourite games, so this one really was for me. \n
        A lot of grinding is required, as with any JRPG, but if you're happy with that then I'm sure you will love this game.
      `,
      bad: `
        This is a classic turn based JRPG with a really nice HD-2D art style which has a real charm to it.
        It is the second game in the series, but the story does not follow on so you could start with this one if you wanted. \n
        You get the choice of 8 characters to begin the game, with the remaining 7 joining along the way. You can have any of the characters in your party at any time, however the story is split into chapters for each character, requiring that character to be in the party for their chapter. You can complete the characters stories in any order, so you can complete all chapters for one character before starting other characters if you wanted, or you can play every character's chapter 1, then chapter 2 and so on. This is the easier method as the chapters get increasingly (and quickly) difficult, so tackling a characters story at lower levels or without a full party can be very difficult. \n
        They added a lot of nice to haves from the first game, which was already one of my favourite games, so this one really was for me. \n
        A lot of grinding is required, as with any JRPG, but if you're happy with that then I'm sure you will love this game.
      `
    },
    score: 10,
    playedConsoles: ['Switch', 'Steam'],
    finishDate: '2023-05-01 00:00:00',
    timeToComplete: 60
  },
  {
    id: '345',
    name: 'Spider-Man Remastered',
    thoughts: {
      overview:
        'I had played the original game on PS4 and enjoyed it a lot. It was what I always wanted a spier-man game to be. The controls were extremely good and the swinging around felt fluid. The story was good enough and the DLC and remaster added to that. It looks really good on PC.',
      good: '',
      bad: ''
    },
    score: 8,
    playedConsoles: ['PS4', 'Steam'],
    finishDate: '2024-12-28 00:00:00',
    timeToComplete: 40
  },
  {
    id: '456',
    name: 'To The Moon',
    thoughts: {
      overview:
        "This is a charming indie that I've had on my wishlist for a while and gave it a shot. It's a charming, fairly short game where you play as a couple of characters who fulfil dying people's wishes by rewriting memories to let them believe they accomplished their dream. It's a very relaxing non combat game that is worth giving a go.",
      good: '',
      bad: ''
    },
    score: 8,
    playedConsoles: ['Steam'],
    finishDate: '2025-01-03',
    timeToComplete: 8
  }
];

export const mockFeaturedScores = _.times(4, (idx) => mockScores[idx]);
