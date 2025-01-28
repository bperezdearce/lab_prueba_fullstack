import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Card } from "./CardEntity";

@Entity()
export class Image {
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
  type!: string;
}