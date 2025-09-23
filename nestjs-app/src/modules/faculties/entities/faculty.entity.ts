import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
