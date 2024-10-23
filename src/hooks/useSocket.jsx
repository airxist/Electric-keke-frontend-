import { useEffect } from "react";
import { io } from "socket.io-client";

export const useSocket = () => {
  const socket = io(socket_uri);

  const conectSocket = () => {
    socket.on("connect", (socket) => {
      console.log("connected");
    });
  };

  useEffect(() => {
    conectSocket();
  }, [])

  return socket;
};
