import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('study_groups')
export class StudyGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
