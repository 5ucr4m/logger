import mongoose from "mongoose";
import { readdirSync } from "fs";
import { resolve } from "path";
import { Models } from "../types";

const MONGO_URI = process.env.MONGO_URI || "";

const connect = () =>
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

const models: Models = Object.create({});

readdirSync(__dirname)
  .filter((fileName) => !fileName.includes("index"))
  .forEach((fileName) => {
    const model = require(resolve(__dirname, fileName)).default;
    const modelName = fileName.split(".").shift().replace("Model", "");
    models[modelName] = model;
  });

export { connect, models };
