import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";


import cors from "cors";
import connectToSocket from "./controllers/socketManager";

const app = express();
const port = 8000;
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || port));
app.use(cors());
app.use(express.json())

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://srkrtnmy:1BftugBoPzeTsxq9@zoomclonecluster.btgtnys.mongodb.net/"
  );

  console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

  app.listen(port, () => {
    console.log(`listening on port : ${port}`);
  });
};

start();

// 1BftugBoPzeTsxq9
