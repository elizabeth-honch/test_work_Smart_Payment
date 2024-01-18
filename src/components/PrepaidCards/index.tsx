import { Card } from "../Card"
import { cards } from "../../data/cards";
import { CardsT } from "./types";
import { NewCard } from "../NewCard";
import styles from './styles.module.scss';

export const PrepaidCards = () => {
  return (
    <div>
      <div className={styles.cards}>
        {cards.map((card: CardsT) => (
          <Card key={card.id} card={card} />
        ))}
        <NewCard />
      </div>
    </div>
  );
};
