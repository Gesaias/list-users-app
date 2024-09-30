export interface IUser {
  id: number;
  name: string;
  email: string;
  telefone: string;
  type_user?: IType_User | undefined;
}

export interface IType_User {
  id: number;
  type: string;
  user_id: string;
}
