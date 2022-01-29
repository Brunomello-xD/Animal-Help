import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

import Image from './Images';

@Entity('ongs')
export default class Ongs {
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

  @OneToMany(() => Image, image => image.ong, {
    cascade:['insert', 'update']
  })
  @JoinColumn({ name: 'ong_id'})
  images: Image[];

}