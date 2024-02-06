import { SimpleSchema } from 'meteor/aldeia:simple-schema';

export const Users = new Mongo.Collection('users');

const UserSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
  createdAt: { type: Date, autoValue: () => new Date(), optional: true },
  roles: { type: Array, defaultValue: ['user'], optional: true },
  // Add other fields as needed: phone number, address, etc.
});

Users.attachSchema(UserSchema);
