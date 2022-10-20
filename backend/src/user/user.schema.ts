import { EntitySchema } from 'typeorm';
import { User } from './user.entity';
import { Picture } from './user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: String,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createDate: {
      type: String,
    },
    updateDate: {
      type: String,
    },
    // profilePicture: {
    //   type: String,
    // },
  },
});

export const profilePicture = new EntitySchema<Picture>({
  name: 'profilePicture',
  target: Picture,
  columns: {
    id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});
