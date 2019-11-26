import mongoose, {Document} from "mongoose";
import {UserSchema} from "../schema/user.schema";

export interface UserModel extends Document {
    username: string,
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    dob: Date
}

export default mongoose.model<UserModel>('User', UserSchema);
