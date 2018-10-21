export enum Gen3ProjectAccessLevel {
  READ_STORAGE = 'read-storage',
}

export interface Gen3UserModel {
  google: { [key: string]: any };
  is_admin: boolean;
  name: string;
  projects: { [key: string]: Array<Gen3ProjectAccessLevel> };
}

interface Gen3GraphqlUserProject {
  id: string;
  accessLevels: Array<string>;
}

export interface Gen3GraphqlUserModel {
  google: { [key: string]: any };
  is_admin: boolean;
  name: string;
  projects: Array<Gen3GraphqlUserProject>;
}

export interface Gen3IntegrationTokenData {
  access_token: string;
  refresh_token: string;
}
