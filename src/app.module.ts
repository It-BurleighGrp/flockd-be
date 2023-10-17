import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ResourceModule } from './resource/resource.module';
import { UserModule } from './user/user.module';
import { StockService } from './stock/stock.service';
import { StockModule } from './stock/stock.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
    ResourceModule,
    UserModule,
    StockModule,
    AuthModule,
],
  controllers: [],
  providers: [StockService],
})


export class AppModule {}
