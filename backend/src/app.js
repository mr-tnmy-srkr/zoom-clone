import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";

import cors from "cors";

const app = express();
const port = 8000;

app.get("/home", (req, res) => {
  res.json({ hello: "world" });
});

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
