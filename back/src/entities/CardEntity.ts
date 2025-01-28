import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Set } from "../entities/SetEntity"
import { Image } from "./ImageEntity";
import { Market } from "./MarketEntity";

@Entity()
export class Card {
  @PrimaryColumn()
  id!: string; 

  @Column()
  name!: string;

  @Column()
  supertype!: string;

  @Column("jsonb")
  subtypes!: string[];

  @Column("jsonb")
  types!: string[];

  @ManyToOne(() => Set, set => set.id)
  @JoinColumn({ name: 'set_id' })
  set!: Set;

  @Column({ name: 'set_id' })
  set_id!: string;

  @Column()
  number!: string;

  @Column()
  rarity!: string;

  @OneToMany(() => Image, image => image.card)
  images!: Image[];

  @OneToMany(() => Market, market => market.card)
  markets!: Market[];
}