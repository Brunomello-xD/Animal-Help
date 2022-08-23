import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import bcryptjs from "bcryptjs";

@Entity("users")
export class Users {

  @PrimaryGeneratedColumn('increment')
  id: Number;

  @Column()
  email: string;

  @Column()
  password: string;

  //Criptografando a senha
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcryptjs.hashSync(this.password, 8);
  }

}