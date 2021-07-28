import { Role } from '../role/role.model';

export interface UserI {
  uuid?: string;
  name: string;
  email: string;
  role?: Role;
  roleId?: number;
}