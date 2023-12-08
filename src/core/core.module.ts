import { Module } from '@nestjs/common/decorators';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule],
})
export class CoreModule {}
