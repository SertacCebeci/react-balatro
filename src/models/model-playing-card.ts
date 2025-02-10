export const Suit = ['hearts', 'diamonds', 'clubs', 'spades'] as const;

export const Rank = [
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king',
] as const;

export type PlayingCardModel = {
  suit: typeof Suit[number];
  rank: typeof Rank[number];
};