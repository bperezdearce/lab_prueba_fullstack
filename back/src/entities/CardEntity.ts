import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Set } from "../entities/SetEntity"

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

  @Column({ name: 'set_id' })
  set_id!: string;

  @ManyToOne(() => Set, set => set.id)
  @JoinColumn({ name: 'set_id' })
  set!: Set;

  @Column()
  number!: string;

  @Column()
  rarity!: string;
}