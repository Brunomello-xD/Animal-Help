import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('ongs')
export class Ongs {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  name: string;

  @Column()
  latitude: Number;

  @Column()
  longitude: Number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

}