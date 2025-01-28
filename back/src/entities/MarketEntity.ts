import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Card } from "./CardEntity";

@Entity()
export class Market {
  @PrimaryColumn()
  id!: number;

  @ManyToOne(() => Card, (card) => card.id)
  @JoinColumn({ name: "card_id" })
  card!: Card;

  @Column()
  card_id!: string;

  @Column()
  url!: string;

  @Column()
  updated_at!: Date;

  @Column()
  market!: string;
}