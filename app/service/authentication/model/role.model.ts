import mongoose, {Document} from "mongoose";
import {RoleSchema} from "../schema/role.schema";

const ROLE_SCHEMA_NAME = "Role";

export interface RoleModel extends Document{
    title: string
    description: string
}

export default mongoose.model<RoleModel>(ROLE_SCHEMA_NAME, RoleSchema);
