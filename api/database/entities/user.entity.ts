import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity("users")
export class User {
  /**
   * Unique Identifier
   */
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column("varchar", {unique: true, nullable: true, length: 255})
  public email!: string;

  @Column("varchar", {nullable: true, length: 255})
  public firstName!: string;

  @Column("varchar", {nullable: true, length: 255})
  public lastName!: string;
}
