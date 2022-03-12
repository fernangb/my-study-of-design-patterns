import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StratetgyPatternModule } from './patterns/behaviors/strategy/strategy-pattern.module';

@Module({
  imports: [StratetgyPatternModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
