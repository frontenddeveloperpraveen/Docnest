const io = require("socket.io")(5000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

console.log("Listening");

io.on("connection", (socket) => {
  console.log("coonnected");
  socket.on("get-document", (documentId) => {
    socket.join(documentId);
    console.log("Room Joined ", documentId);
    socket.on("send-changes", (data) => {
      socket.broadcast.to(documentId).emit("recieve-changes", data);
    });
  });
});
