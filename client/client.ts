// client/client.ts
import { io, Socket } from 'socket.io-client';

type Chat = {
  id: number;
  message: string;
};

const SERVER_URL = 'http://localhost:3000'; // ถ้าใช้ docker-compose แล้ว expose port 3000 ให้ใช้ localhost

const socket: Socket = io(SERVER_URL, {
  reconnectionAttempts: 5,
  transports: ['websocket', 'polling'],
});

socket.on('connect', () => {
  console.log('connected', socket.id);

  // ตัวอย่าง: emit แล้วรับ ack (server handler ที่ใช้ @SubscribeMessage จะ return เป็น ack ถ้ารับ callback)
  socket.emit('createChat', { message: 'Hello from TS client' }, (res: any) => {
    console.log('createChat ack:', res);
  });

  // ขอข้อมูลทั้งหมด โดยส่ง callback เพื่อรับผล
  socket.emit('findAllChats', null, (res: Chat[]) => {
    console.log('findAllChats:', res);
  });
});

// รับ broadcast จาก server
socket.on('chatCreated', (chat: Chat) => {
  console.log('broadcast chatCreated:', chat);
});

socket.on('connect_error', (err) => {
  console.error('connect_error', err.message);
});

socket.on('disconnect', (reason) => {
  console.log('disconnected:', reason);
});
