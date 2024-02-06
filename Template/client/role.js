import { SimpleSchema } from 'meteor/aldeia:simple-schema';

const RoleSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  name: { type: String, required: true, unique: true },
  permissions: { type: Array, optional: true, defaultValue: [] },
});

export const Role = new Mongo.Collection('roles');
Roles.attachSchema(RoleSchema);
import { SimpleSchema } from 'meteor/aldeia:simple-schema';

const RoleSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  name: { type: String, required: true, unique: true },
  permissions: { type: Array, optional: true, defaultValue: [] },
});

export const Role = new Mongo.Collection('roles');
Roles.attachSchema(RoleSchema);
import { SimpleSchema } from 'meteor/aldeia:simple-schema';

const RoleSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  name: { type: String, required: true, unique: true },
  permissions: { type: Array, optional: true, defaultValue: [] },
});

export const Roles = new Mongo.Collection('roles');
Roles.attachSchema(RoleSchema);
import { SimpleSchema } from 'meteor/aldeia:simple-schema';

const RoleSchema = new SimpleSchema({
  _id: { type: String, optional: true },
  name: { type: String, required: true, unique: true },
  permissions: { type: Array, optional: true, defaultValue: [] },
});

export const Roles = new Mongo.Collection('roles');
Roles.attachSchema(RoleSchema);
