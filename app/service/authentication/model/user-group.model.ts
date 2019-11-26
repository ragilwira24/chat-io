import mongoose, {Document} from "mongoose";
import {UserGroupSchema} from "../schema/user-group.schema";

const SCHEMA_NAME = "UserGroup";

export interface UserGroupModel extends Document{
    userId: mongoose.Schema.Types.ObjectId,
    roleId: mongoose.Schema.Types.ObjectId,
}

export default mongoose.model<UserGroupModel>(SCHEMA_NAME, UserGroupSchema);
