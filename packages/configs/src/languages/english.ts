/* eslint-disable max-lines */

import { Config, Locale } from '@scrabble-solver/types';

import { literaki, scrabble, superScrabble } from '../games';

export const englishGbScrabble = new Config({
  ...scrabble,
  locale: Locale.EN_GB,
  tiles: [
    { character: 'a', count: 9, score: 1 },
    { character: 'b', count: 2, score: 3 },
    { character: 'c', count: 2, score: 3 },
    { character: 'd', count: 4, score: 2 },
    { character: 'e', count: 12, score: 1 },
    { character: 'f', count: 2, score: 4 },
    { character: 'g', count: 3, score: 2 },
    { character: 'h', count: 2, score: 4 },
    { character: 'i', count: 9, score: 1 },
    { character: 'j', count: 1, score: 8 },
    { character: 'k', count: 1, score: 5 },
    { character: 'l', count: 4, score: 1 },
    { character: 'm', count: 2, score: 3 },
    { character: 'n', count: 6, score: 1 },
    { character: 'o', count: 8, score: 1 },
    { character: 'p', count: 2, score: 3 },
    { character: 'q', count: 1, score: 10 },
    { character: 'r', count: 6, score: 1 },
    { character: 's', count: 4, score: 1 },
    { character: 't', count: 6, score: 1 },
    { character: 'u', count: 4, score: 1 },
    { character: 'v', count: 2, score: 4 },
    { character: 'w', count: 2, score: 4 },
    { character: 'x', count: 1, score: 8 },
    { character: 'y', count: 2, score: 4 },
    { character: 'z', count: 1, score: 10 },
  ],
});

export const englishGbSuperScrabble = new Config({
  ...superScrabble,
  locale: Locale.EN_GB,
  tiles: [
    { character: 'a', count: 16, score: 1 },
    { character: 'b', count: 4, score: 3 },
    { character: 'c', count: 6, score: 3 },
    { character: 'd', count: 8, score: 2 },
    { character: 'e', count: 24, score: 1 },
    { character: 'f', count: 4, score: 4 },
    { character: 'g', count: 5, score: 2 },
    { character: 'h', count: 5, score: 4 },
    { character: 'i', count: 13, score: 1 },
    { character: 'j', count: 2, score: 8 },
    { character: 'k', count: 2, score: 5 },
    { character: 'l', count: 7, score: 1 },
    { character: 'm', count: 6, score: 3 },
    { character: 'n', count: 13, score: 1 },
    { character: 'o', count: 15, score: 1 },
    { character: 'p', count: 4, score: 3 },
    { character: 'q', count: 2, score: 10 },
    { character: 'r', count: 13, score: 1 },
    { character: 's', count: 10, score: 1 },
    { character: 't', count: 15, score: 1 },
    { character: 'u', count: 7, score: 1 },
    { character: 'v', count: 3, score: 4 },
    { character: 'w', count: 4, score: 4 },
    { character: 'x', count: 2, score: 8 },
    { character: 'y', count: 4, score: 4 },
    { character: 'z', count: 2, score: 10 },
  ],
});

export const englishGbLiteraki = new Config({
  ...literaki,
  locale: Locale.EN_GB,
  name: 'Literaxx',
  tiles: [
    { character: 'a', count: 9, score: 1 },
    { character: 'b', count: 2, score: 3 },
    { character: 'c', count: 2, score: 3 },
    { character: 'd', count: 4, score: 2 },
    { character: 'e', count: 12, score: 1 },
    { character: 'f', count: 2, score: 4 },
    { character: 'g', count: 3, score: 2 },
    { character: 'h', count: 2, score: 4 },
    { character: 'i', count: 9, score: 1 },
    { character: 'j', count: 1, score: 8 },
    { character: 'k', count: 1, score: 5 },
    { character: 'l', count: 4, score: 1 },
    { character: 'm', count: 2, score: 3 },
    { character: 'n', count: 6, score: 1 },
    { character: 'o', count: 8, score: 1 },
    { character: 'p', count: 2, score: 3 },
    { character: 'q', count: 1, score: 10 },
    { character: 'r', count: 6, score: 1 },
    { character: 's', count: 4, score: 1 },
    { character: 't', count: 6, score: 1 },
    { character: 'u', count: 4, score: 1 },
    { character: 'v', count: 2, score: 4 },
    { character: 'w', count: 2, score: 4 },
    { character: 'x', count: 1, score: 8 },
    { character: 'y', count: 2, score: 4 },
    { character: 'z', count: 1, score: 10 },
  ],
});

export const englishUsScrabble = new Config({
  ...scrabble,
  locale: Locale.EN_US,
  tiles: [
    { character: 'a', count: 9, score: 1 },
    { character: 'b', count: 2, score: 3 },
    { character: 'c', count: 2, score: 3 },
    { character: 'd', count: 4, score: 2 },
    { character: 'e', count: 12, score: 1 },
    { character: 'f', count: 2, score: 4 },
    { character: 'g', count: 3, score: 2 },
    { character: 'h', count: 2, score: 4 },
    { character: 'i', count: 9, score: 1 },
    { character: 'j', count: 1, score: 8 },
    { character: 'k', count: 1, score: 5 },
    { character: 'l', count: 4, score: 1 },
    { character: 'm', count: 2, score: 3 },
    { character: 'n', count: 6, score: 1 },
    { character: 'o', count: 8, score: 1 },
    { character: 'p', count: 2, score: 3 },
    { character: 'q', count: 1, score: 10 },
    { character: 'r', count: 6, score: 1 },
    { character: 's', count: 4, score: 1 },
    { character: 't', count: 6, score: 1 },
    { character: 'u', count: 4, score: 1 },
    { character: 'v', count: 2, score: 4 },
    { character: 'w', count: 2, score: 4 },
    { character: 'x', count: 1, score: 8 },
    { character: 'y', count: 2, score: 4 },
    { character: 'z', count: 1, score: 10 },
  ],
});

export const englishUsSuperScrabble = new Config({
  ...superScrabble,
  locale: Locale.EN_US,
  tiles: [
    { character: 'a', count: 16, score: 1 },
    { character: 'b', count: 4, score: 3 },
    { character: 'c', count: 6, score: 3 },
    { character: 'd', count: 8, score: 2 },
    { character: 'e', count: 24, score: 1 },
    { character: 'f', count: 4, score: 4 },
    { character: 'g', count: 5, score: 2 },
    { character: 'h', count: 5, score: 4 },
    { character: 'i', count: 13, score: 1 },
    { character: 'j', count: 2, score: 8 },
    { character: 'k', count: 2, score: 5 },
    { character: 'l', count: 7, score: 1 },
    { character: 'm', count: 6, score: 3 },
    { character: 'n', count: 13, score: 1 },
    { character: 'o', count: 15, score: 1 },
    { character: 'p', count: 4, score: 3 },
    { character: 'q', count: 2, score: 10 },
    { character: 'r', count: 13, score: 1 },
    { character: 's', count: 10, score: 1 },
    { character: 't', count: 15, score: 1 },
    { character: 'u', count: 7, score: 1 },
    { character: 'v', count: 3, score: 4 },
    { character: 'w', count: 4, score: 4 },
    { character: 'x', count: 2, score: 8 },
    { character: 'y', count: 4, score: 4 },
    { character: 'z', count: 2, score: 10 },
  ],
});

export const englishUsLiteraki = new Config({
  ...literaki,
  locale: Locale.EN_US,
  name: 'Literaxx',
  tiles: [
    { character: 'a', count: 9, score: 1 },
    { character: 'b', count: 2, score: 3 },
    { character: 'c', count: 2, score: 3 },
    { character: 'd', count: 4, score: 2 },
    { character: 'e', count: 12, score: 1 },
    { character: 'f', count: 2, score: 4 },
    { character: 'g', count: 3, score: 2 },
    { character: 'h', count: 2, score: 4 },
    { character: 'i', count: 9, score: 1 },
    { character: 'j', count: 1, score: 8 },
    { character: 'k', count: 1, score: 5 },
    { character: 'l', count: 4, score: 1 },
    { character: 'm', count: 2, score: 3 },
    { character: 'n', count: 6, score: 1 },
    { character: 'o', count: 8, score: 1 },
    { character: 'p', count: 2, score: 3 },
    { character: 'q', count: 1, score: 10 },
    { character: 'r', count: 6, score: 1 },
    { character: 's', count: 4, score: 1 },
    { character: 't', count: 6, score: 1 },
    { character: 'u', count: 4, score: 1 },
    { character: 'v', count: 2, score: 4 },
    { character: 'w', count: 2, score: 4 },
    { character: 'x', count: 1, score: 8 },
    { character: 'y', count: 2, score: 4 },
    { character: 'z', count: 1, score: 10 },
  ],
});
