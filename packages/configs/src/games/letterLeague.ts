import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Game } from '@scrabble-solver/types';

export const letterLeague = {
  bingo: { multiplier: 2 },
  blankScore: 0,
  blanksCount: 2,
  boardHeight: 19,
  boardWidth: 27,
  game: Game.LetterLeague,
  name: 'Letter League',
  rackSize: 7,
  bonuses: [
    { multiplier: 2, type: BONUS_CHARACTER, x: 3, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 11, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 15, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 18, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 20, y: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 23, y: 0 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 1 },
    { multiplier: 2, type: BONUS_WORD, x: 5, y: 1 },
    { multiplier: 2, type: BONUS_WORD, x: 9, y: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 1 },
    { multiplier: 2, type: BONUS_WORD, x: 17, y: 1 },
    { multiplier: 2, type: BONUS_WORD, x: 21, y: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 25, y: 1 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 4, y: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 6, y: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 8, y: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 10, y: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 16, y: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 18, y: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 20, y: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 22, y: 2 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 0, y: 3 },
    { multiplier: 2, type: BONUS_WORD, x: 1, y: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 2, y: 3 },
    { multiplier: 3, type: BONUS_WORD, x: 7, y: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 12, y: 3 },
    { multiplier: 2, type: BONUS_WORD, x: 13, y: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 14, y: 3 },
    { multiplier: 3, type: BONUS_WORD, x: 19, y: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 24, y: 3 },
    { multiplier: 2, type: BONUS_WORD, x: 25, y: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 26, y: 3 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 4, y: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 6, y: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 8, y: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 10, y: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 16, y: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 18, y: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 20, y: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 22, y: 4 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 5 },
    { multiplier: 2, type: BONUS_WORD, x: 5, y: 5 },
    { multiplier: 2, type: BONUS_WORD, x: 9, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 5 },
    { multiplier: 2, type: BONUS_WORD, x: 17, y: 5 },
    { multiplier: 2, type: BONUS_WORD, x: 21, y: 5 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 25, y: 5 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 3, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 11, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 15, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 18, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 20, y: 6 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 23, y: 6 },

    { multiplier: 2, type: BONUS_WORD, x: 4, y: 7 },
    { multiplier: 2, type: BONUS_WORD, x: 10, y: 7 },
    { multiplier: 2, type: BONUS_WORD, x: 16, y: 7 },
    { multiplier: 2, type: BONUS_WORD, x: 22, y: 7 },

    { multiplier: 3, type: BONUS_CHARACTER, x: 0, y: 8 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 2, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 7, y: 8 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 12, y: 8 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 14, y: 8 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 19, y: 8 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 24, y: 8 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 26, y: 8 },

    { multiplier: 2, type: BONUS_WORD, x: 3, y: 9 },
    { multiplier: 2, type: BONUS_WORD, x: 7, y: 9 },
    { multiplier: 2, type: BONUS_WORD, x: 11, y: 9 },
    { multiplier: 2, type: BONUS_WORD, x: 15, y: 9 },
    { multiplier: 2, type: BONUS_WORD, x: 19, y: 9 },
    { multiplier: 2, type: BONUS_WORD, x: 23, y: 9 },

    { multiplier: 3, type: BONUS_CHARACTER, x: 0, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 2, y: 10 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 7, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 12, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 14, y: 10 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 19, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 24, y: 10 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 26, y: 10 },

    { multiplier: 2, type: BONUS_WORD, x: 4, y: 11 },
    { multiplier: 2, type: BONUS_WORD, x: 10, y: 11 },
    { multiplier: 2, type: BONUS_WORD, x: 16, y: 11 },
    { multiplier: 2, type: BONUS_WORD, x: 22, y: 11 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 3, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 11, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 15, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 18, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 20, y: 12 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 23, y: 12 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 13 },
    { multiplier: 2, type: BONUS_WORD, x: 5, y: 13 },
    { multiplier: 2, type: BONUS_WORD, x: 9, y: 13 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 13 },
    { multiplier: 2, type: BONUS_WORD, x: 17, y: 13 },
    { multiplier: 2, type: BONUS_WORD, x: 21, y: 13 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 25, y: 13 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 4, y: 14 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 6, y: 14 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 8, y: 14 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 10, y: 14 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 16, y: 14 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 18, y: 14 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 20, y: 14 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 22, y: 14 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 0, y: 15 },
    { multiplier: 2, type: BONUS_WORD, x: 1, y: 15 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 2, y: 15 },
    { multiplier: 3, type: BONUS_WORD, x: 7, y: 15 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 12, y: 15 },
    { multiplier: 2, type: BONUS_WORD, x: 13, y: 15 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 14, y: 15 },
    { multiplier: 3, type: BONUS_WORD, x: 19, y: 15 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 24, y: 15 },
    { multiplier: 2, type: BONUS_WORD, x: 25, y: 15 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 26, y: 15 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 4, y: 16 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 6, y: 16 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 8, y: 16 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 10, y: 16 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 16, y: 16 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 18, y: 16 },
    { multiplier: 3, type: BONUS_CHARACTER, x: 20, y: 16 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 22, y: 16 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 1, y: 17 },
    { multiplier: 2, type: BONUS_WORD, x: 5, y: 17 },
    { multiplier: 2, type: BONUS_WORD, x: 9, y: 17 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 13, y: 17 },
    { multiplier: 2, type: BONUS_WORD, x: 17, y: 17 },
    { multiplier: 2, type: BONUS_WORD, x: 21, y: 17 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 25, y: 17 },

    { multiplier: 2, type: BONUS_CHARACTER, x: 3, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 6, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 8, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 11, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 15, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 18, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 20, y: 18 },
    { multiplier: 2, type: BONUS_CHARACTER, x: 23, y: 18 },
  ],
};
