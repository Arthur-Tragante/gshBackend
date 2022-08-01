import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_type')
export class ProjectTypeEntity {
  @PrimaryGeneratedColumn()
  pjt_id: number;

  @Column({ default: '' })
  pjt_name: string;
}
