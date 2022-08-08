import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_type')
export class ProjectTypeModel {
  @PrimaryGeneratedColumn()
  pjt_id: number;

  @Column({ default: '' })
  pjt_name: string;
}
