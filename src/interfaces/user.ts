export interface UserI {
  id?: number | null;
  uuid: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  role: number;
}