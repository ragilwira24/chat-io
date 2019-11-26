import mongoose, {Schema} from 'mongoose';

export const UserGroupSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    roleId: {type: mongoose.Schema.Types.ObjectId, required: true},
});
