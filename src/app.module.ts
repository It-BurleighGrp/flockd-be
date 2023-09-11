import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ResourceModule } from './resource/resource.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    ResourceModule,
],
  controllers: [],
  providers: [],
})


export class AppModule {}
