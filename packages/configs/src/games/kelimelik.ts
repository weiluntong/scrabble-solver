import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Game } from '@scrabble-solver/types';

export const kelimelik = {
  bingoScore: 30,
  blankScore: 0,
  blanksCount: 2,
  boardSize: 15,
  game: Game.Kelimelik,
  name: 'Kelimelik',
  rackSize: 7,
  bonuses: [
    { multiplier: 3, type: BONUS_WORD, x: 2, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 5, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 9, y: 0 },
    { multiplier: 3, type: BONUS_WORD, x: 12, y: 0 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 1, y: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 1 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 13, y: 1 },
    { multiplier: 3, type: BONUS_WORD, x: 0, y: 2 },
    { multiplier: 2, type: BONUS_WORD, x: 7, y: 2 },
    { multiplier: 3, type: BONUS_WORD, x: 14, y: 2 },
    { multiplier: 2, type: BONUS_WORD, x: 3, y: 3 },
    { multiplier: 2, type: BONUS_WORD, x: 11, y: 3 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 4, y: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 10, y: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 0, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 5, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 9, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 14, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 6 },
    { multiplier: 2, type: BONUS_WORD, x: 2, y: 7 },
    { multiplier: 2, type: BONUS_WORD, x: 12, y: 7 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 0, y: 9 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 5, y: 9 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 9, y: 9 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 14, y: 9 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 4, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 10, y: 10 },
    { multiplier: 2, type: BONUS_WORD, x: 3, y: 11 },
    { multiplier: 2, type: BONUS_WORD, x: 11, y: 11 },
    { multiplier: 3, type: BONUS_WORD, x: 0, y: 12 },
    { multiplier: 2, type: BONUS_WORD, x: 7, y: 12 },
    { multiplier: 3, type: BONUS_WORD, x: 14, y: 12 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 1, y: 13 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 13 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 13 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 13, y: 13 },
    { multiplier: 3, type: BONUS_WORD, x: 2, y: 14 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 5, y: 14 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 9, y: 14 },
    { multiplier: 3, type: BONUS_WORD, x: 12, y: 14 },
  ],
};
