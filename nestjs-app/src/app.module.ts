import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentsModule } from './modules/students/students.module';
import { StudyGroupsModule } from './modules/study_groups/study_groups.module';
import { FacultiesModule } from './modules/faculties/faculties.module';
import { TestMigrationGenerateModule } from './modules/test_migration_generate/test_migration_generate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: config.get<number>('POSTGRES_PORT'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DB'),
        autoLoadEntities: true,
        synchronize: false, // ⚠️ dev only
        migrations: ['dist/migrations/*.js'],
        migrationsRun: true,
      }),
    }),
    PostsModule,
    StudentsModule,
    StudyGroupsModule,
    FacultiesModule,
    TestMigrationGenerateModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
