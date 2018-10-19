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
  ARRANGER_API: 'https://arranger.kids-first.io',
  ARRANGER_PROJECT_ID: 'september_13',
  CAVATICA_API: 'https://key-manager.kidsfirstdrc.org/cavatica',
  CAVATICA_WEB: 'https://cavatica.sbgenomics.com/',
  CAVATICA_WEB_REGISTRATION: 'https://pgc-accounts.sbgenomics.com',
  DATA_VERSION_API: 'https://kf-release-coord.kids-first.io/releases',
  DEFAULT_REDIRECT_URI: 'https://prod-kidsfirst-portal.netlify.com',
  EGO_API: 'https://ego.kids-first.io',
  ES_HOST: 'https://kf-arranger-es-prd.kids-first.io',
  GEN3_API: 'https://data.kidsfirstdrc.org/',
  GEN3_INTEGRATION_ROOT: 'https://key-manager.kidsfirstdrc.org',
  GEN3_WEB: 'http://www.gen3.org/',
  KF_FACEBOOK: 'https://www.facebook.com/kidsfirstDRC/?ref=bookmarks',
  KF_GITHUB: 'https://github.com/kids-first',
  KF_TWITTER: 'https://twitter.com/kidsfirstDRC',
  KF_WEB_ROOT: 'https://kidsfirstdrc.org',
  LOGIN_REDIRECT_NOT_REQUIRED: 'http://localhost:3001',
  PERSONA_API: 'https://kf-persona-api.kids-first.io',
  SECRETS_API: 'https://key-manager.kidsfirstdrc.org/key-store',
  SHORTURL_API: 'https://riff.kids-first.io/riff',
  SHORTURL_RESOLVE_ROOT: 'https://p.kfdrc.org/s/',
  USERSNAP_HOST: 'https://api.usersnap.com/load/',
  EGO_JWT_SECRET:
    'eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1Mzk5ODAyMDYsImV4cCI6MTU0MDA2NjYwNiwic3ViIjoiZGQxOTNhMzYtMmU1Ni00ODVmLWFhMDUtNmEzNzRmYjg0ZmMzIiwiaXNzIjoiZWdvIiwiYXVkIjpbXSwianRpIjoiY2Q1MGU3YjEtN2E4MS00NTEwLTk0MzAtMGY4MjkyYWFkYTg5IiwiY29udGV4dCI6eyJ1c2VyIjp7Im5hbWUiOiJobG1pbmgyMDAwQGdtYWlsLmNvbSIsImVtYWlsIjoiaGxtaW5oMjAwMEBnbWFpbC5jb20iLCJzdGF0dXMiOiJBcHByb3ZlZCIsImZpcnN0TmFtZSI6IkhhIiwibGFzdE5hbWUiOiJMZSIsImNyZWF0ZWRBdCI6IjIwMTgtMDctMTYgMDk6NDQ6MzIiLCJsYXN0TG9naW4iOiIyMDE4LTEwLTE5IDA4OjE2OjQ2IiwicHJlZmVycmVkTGFuZ3VhZ2UiOm51bGwsInJvbGVzIjpbIkFETUlOIl0sImdyb3VwcyI6WyJrZi1zdGFrZWhvbGRlciJdLCJwZXJtaXNzaW9ucyI6W119fX0.Z67omsjoCVFHpEUaI-fvdPqksrRSFNycZi4DDcogwxHSBU4WNNE8Bb_xghjO_YJN3iX49Lxa50IGVh_kawMGHjtzgynZ0df_Q1zS4706JJoG_fpz-XFnbkSDN-a0nB39JA1lJXqBVMhzlMP06A_brdeFQWuorqxhRkd6zKlTd-q4ktdj5DQcObXnHgSpgkoADbcieLPhMFwVE6KUNoyeIBJ2MnKkR2ji3pcTHzYtTohRhgQpRHwtw_RnPNU3mNjQU_6-LyJmjCjJOdT84Gd4ctgWiBVE1R64REnyYFfJepdxtFMmhsnuDEE91RmzR4AS7LizCN_V8xSYDZhc4aslkQ',
};

export default config;
