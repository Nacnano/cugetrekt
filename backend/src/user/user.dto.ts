export class RoleType {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class StarType {
  id: string;
  name: string;
  color: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  displayName: string;
  starId: string;
  comment: string;
  gender: string;
  roleId: string;
  phoneNumber: string;
  email: string;
  password: string;
  isActive: boolean;
  joinDate: Date;
  createDate: Date;
  lastUpdate: Date;
}

export class PictureDto {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}
