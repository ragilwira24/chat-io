import {Schema} from 'mongoose';

export const RoleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
});
