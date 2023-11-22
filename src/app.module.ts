import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [AuthenticationModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
