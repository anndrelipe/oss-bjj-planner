import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { ProfileModule } from 'src/profile/profile.module';
import { TechniqueModule } from 'src/technique/technique.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'oss',
      password: '97486640',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProfileModule,
    TechniqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
