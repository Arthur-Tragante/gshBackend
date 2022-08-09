import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('uf')
export class UfModel {
  @PrimaryGeneratedColumn()
  uf_id: number;

  @Column({ length: 120 })
  uf_name?: string;

  @Column({ length: 2 })
  uf_initials?: string;
}
