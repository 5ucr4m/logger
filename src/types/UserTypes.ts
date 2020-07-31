import { Schema, Document } from "mongoose";

export interface User {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  api_key: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserDocument extends User, Document {
  _id: Schema.Types.ObjectId;
}
