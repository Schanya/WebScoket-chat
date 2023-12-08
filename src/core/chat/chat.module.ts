import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { WsGateway } from './ws';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  controllers: [ChatController],
  providers: [ChatService, WsGateway],
  exports: [],
})
export class ChatModule {}
