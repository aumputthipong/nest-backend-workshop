// client/client.ts
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);

  // 1. ทดสอบสร้าง chat
  socket.emit("createChat", { message: "Hello from client" }, (res: any) => {
    console.log(" createChat response:", res);

    // 2. ดึงทั้งหมด
    socket.emit("findAllChats", {}, (all: any) => {
      console.log("findAllChats:", all);

      // สมมติว่ามี id = 1
      socket.emit("findOneChat", 1, (chat: any) => {
        console.log("findOneChat:", chat);

        // 3. อัปเดตข้อความ
        socket.emit("updateChat", { id: 1, message: "Updated text" }, (updated: any) => {
          console.log("updateChat:", updated);

          // 4. ลบข้อความ
          socket.emit("removeChat", 1, (deleted: any) => {
            console.log("removeChat:", deleted);
          });
        });
      });
    });
  });
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected");
});