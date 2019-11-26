import {Schema} from 'mongoose';

export const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true},
    dob:{type: Date}
});
