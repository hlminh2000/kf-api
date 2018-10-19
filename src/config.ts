import * as dotenv from 'dotenv';

dotenv.config();

export interface Config {
  ARRANGER_API: string;
  ARRANGER_PROJECT_ID: string;
  CAVATICA_API: string;
  CAVATICA_WEB: string;
  CAVATICA_WEB_REGISTRATION: string;
  DATA_VERSION_API: string;
  DEFAULT_REDIRECT_URI: string;
  EGO_API: string;
  ES_HOST: string;
  GEN3_API: string;
  GEN3_INTEGRATION_ROOT: string;
  GEN3_WEB: string;
  KF_FACEBOOK: string;
  KF_GITHUB: string;
  KF_TWITTER: string;
  KF_WEB_ROOT: string;
  LOGIN_REDIRECT_NOT_REQUIRED: string;
  PERSONA_API: string;
  SECRETS_API: string;
  SHORTURL_API: string;
  SHORTURL_RESOLVE_ROOT: string;
  USERSNAP_HOST: string;
  EGO_JWT_SECRET: string;
}

const config: Config = {
  ARRANGER_API: process.env.ARRANGER_API,
  ARRANGER_PROJECT_ID: process.env.ARRANGER_PROJECT_ID,
  CAVATICA_API: process.env.CAVATICA_API,
  CAVATICA_WEB: process.env.CAVATICA_WEB,
  CAVATICA_WEB_REGISTRATION: process.env.CAVATICA_WEB_REGISTRATION,
  DATA_VERSION_API: process.env.DATA_VERSION_API,
  DEFAULT_REDIRECT_URI: process.env.DEFAULT_REDIRECT_URI,
  EGO_API: process.env.EGO_API,
  ES_HOST: process.env.ES_HOST,
  GEN3_API: process.env.GEN3_API,
  GEN3_INTEGRATION_ROOT: process.env.GEN3_INTEGRATION_ROOT,
  GEN3_WEB: process.env.GEN3_WEB,
  KF_FACEBOOK: process.env.KF_FACEBOOK,
  KF_GITHUB: process.env.KF_GITHUB,
  KF_TWITTER: process.env.KF_TWITTER,
  KF_WEB_ROOT: process.env.KF_WEB_ROOT,
  LOGIN_REDIRECT_NOT_REQUIRED: process.env.LOGIN_REDIRECT_NOT_REQUIRED,
  PERSONA_API: process.env.PERSONA_API,
  SECRETS_API: process.env.SECRETS_API,
  SHORTURL_API: process.env.SHORTURL_API,
  SHORTURL_RESOLVE_ROOT: process.env.SHORTURL_RESOLVE_ROOT,
  USERSNAP_HOST: process.env.USERSNAP_HOST,
  EGO_JWT_SECRET: process.env.EGO_JWT_SECRET,
};

export default config;
