import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import Ong from './Ongs'


@Entity('images')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  path: string;

  @ManyToOne(() => Ong, ong => ong.images)
  @JoinColumn({ name: 'ong_id' })
  ong: Ong;
}