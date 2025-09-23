import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudyGroup } from '../../study_groups/entities/study_group.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthdate: Date;

  @Column()
  phone: string;

  @ManyToOne(() => StudyGroup, (group) => group.students, { nullable: true })
  @JoinColumn({ name: 'study_group_id' })
  studyGroup: StudyGroup;
}
