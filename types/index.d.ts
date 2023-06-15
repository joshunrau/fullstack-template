export interface Greeting {
  message: string;
}

/** AUTH */

export type UserRole = 'admin';

export type JwtPayload = {
  email: string;
  role: UserRole;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
