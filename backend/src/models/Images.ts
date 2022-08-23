// Representação da tabela como uma classe
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import Ong from './Ongs'

@Entity('images')
export default class Images {
  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  path: string;

  /**
   * Campo não existe no BD, é somente para realizar o relacionamento
   * 
   * Após receber a ong, qual o campo da ong que vai ter as imagens (será o campo images)
   */
  @ManyToOne(() => Ong, ong => ong.images)
  @JoinColumn({ name: 'ong_id' })
  ong: Ong;
}