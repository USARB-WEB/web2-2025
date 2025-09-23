import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ example: 'John Doe', description: 'Student Name' })
  name: string;
  @ApiProperty({ example: '2000-01-01', description: 'Birthdate' })
  birthdate: Date;
  @ApiProperty({ example: '+1234567890', description: 'Phone Number' })
  phone: string;
}
