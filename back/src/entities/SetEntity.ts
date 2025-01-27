import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Set {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  series!: string;

  @Column()
  printed_total!: number;

  @Column()
  total!: number;

  @Column()
  ptcgo_code!: string;

  @Column()
  release_date!: Date;

  @Column()
  updated_at!: Date;

  @Column()
  symbol_url!: string;

  @Column()
  logo_url!: string;
}