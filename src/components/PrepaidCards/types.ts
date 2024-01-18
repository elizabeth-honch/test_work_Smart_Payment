export type CardsT = {
  id: string;
  status: string;
  sum: string;
  number: string;
  type: string;
};

export type PrepaidCardsT = {
  cards: CardsT[];
};
