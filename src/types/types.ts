export type ResponseData = Record<string, any> | Record<string, any>[];

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IAuthResponse {
  email: string | undefined;
  auth_time: number;
  uid: string;
}
