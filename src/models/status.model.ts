import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
export class StatusModel {
  @PrimaryGeneratedColumn()
  sts_id: number;

  @Column({ length: 120 })
  sts_name?: string;
}
