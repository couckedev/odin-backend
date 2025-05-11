import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class HealthCheckGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('healthcheck')
  handleHealthCheck(client: Socket): void {
    client.emit('healthcheck', { status: 'ok' });
  }
}
