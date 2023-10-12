import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5003/";
const socket = io.connect(ENDPOINT);

// Log successful connection
socket.on("connect", () => {
  console.log("Connected to server!");
});

// Log any connection errors
socket.on("connect_error", (error) => {
  console.error("Connection failed! ==>", error);
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

socket.on("disconnect", (reason) => {
  console.log("Disconnected:", reason);
  if (reason === "io server disconnect") {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect();
  }
});

export default socket;
