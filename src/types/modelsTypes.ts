import { Model } from "mongoose";
import { UserDocument } from "./UserTypes";

export interface Models {
  User: Model<UserDocument>;
}
