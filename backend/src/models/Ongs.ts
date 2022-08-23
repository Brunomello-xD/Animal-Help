// Representação da tabela como uma classe
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

import Image from './Images';

@Entity('ongs')
export default class Ongs {
  to(data: number): number {
    return data;
  }
  from(data: string): number {
    return parseFloat(data);
  }

  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  name: string;

  @Column('numeric', {
    scale: 10,
    precision: 2,
    transformer: new Ongs()
  })
  public latitude: Number;

  @Column('numeric', {
    scale: 10,
    precision: 2,
    transformer: new Ongs()
  })
  public longitude: Number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  /**
   * Campo não existe no BD, é somente para realizar o relacionamento
   * 
   * Após receber as imagens, qual o campo da imagem que vai ter as ong (será o campo ong)
   */
  @OneToMany(() => Image, image => image.ong, {
    cascade:['insert', 'update']
  })
  @JoinColumn({ name: 'ong_id'})
  images: Image[];

}