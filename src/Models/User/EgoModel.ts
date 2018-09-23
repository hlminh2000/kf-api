import * as decode from 'jwt-decode';

export enum EgoStatus {
  Approved = 'Approved',
  Disabled = 'Disabled',
  Pending = 'Pending',
}
export enum EgoRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface EgoJwtUserContext {
  name: string;
  email: string;
  status: EgoStatus;
  firstName: string;
  lastName: string;
  createdAt: string;
  lastLogin: string;
  preferredLanguage: string;
  groups: Array<string>;
  roles: Array<EgoRole>;
  permissions: Array<string>;
}

export interface EgoJwtContext {
  user: EgoJwtUserContext;
}

export interface EgoJwt {
  iat: number;
  exp: number;
  sub: string;
  iss: string;
  aud: Array<string>;
  context: EgoJwtContext;
}

export const isRightUser = ({
  userId,
  egoJwt,
}: {
  userId: string;
  egoJwt: string;
}): boolean => {
  const { sub }: EgoJwt = decode(egoJwt);
  return sub === userId;
};
