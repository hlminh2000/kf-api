export interface Config {
  ARRANGER_API: string;
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
    'eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1Mzc3MzIwNTcsImV4cCI6MTUzNzgxODQ1Nywic3ViIjoiZGQxOTNhMzYtMmU1Ni00ODVmLWFhMDUtNmEzNzRmYjg0ZmMzIiwiaXNzIjoiZWdvIiwiYXVkIjpbXSwianRpIjoiY2NhNGI3MDctZWU5MC00NjJlLWEwMjgtM2RmNTQ5ODAwMmMyIiwiY29udGV4dCI6eyJ1c2VyIjp7Im5hbWUiOiJobG1pbmgyMDAwQGdtYWlsLmNvbSIsImVtYWlsIjoiaGxtaW5oMjAwMEBnbWFpbC5jb20iLCJzdGF0dXMiOiJBcHByb3ZlZCIsImZpcnN0TmFtZSI6IkhhIiwibGFzdE5hbWUiOiJMZSIsImNyZWF0ZWRBdCI6IjIwMTgtMDctMTYgMDk6NDQ6MzIiLCJsYXN0TG9naW4iOiIyMDE4LTA5LTIzIDA3OjQ3OjM3IiwicHJlZmVycmVkTGFuZ3VhZ2UiOm51bGwsImdyb3VwcyI6WyJrZi1zdGFrZWhvbGRlciJdLCJyb2xlcyI6WyJBRE1JTiJdLCJwZXJtaXNzaW9ucyI6W119fX0.UYK0cK4BWx-4IrBfQApYfZ5ftTn1jEfsw-vdJUI8nA7Y5tLF9zqyKl2kndDw-XhRAkMWVJKaRYCFQhSVWraM62vI4LqvaI_pzDtpPPyVCcg7p_mrU-yH-9v_Sjh4-ZSsoNrAjEENyiq9sbxN_9PMishau3bX8VRBlOx0Xi2QrreIyhb8vqeokNzPR31fv_UAYCdkZRPT_yOf0xiBGmIBX4KEMl5V7r4H6WVL2wtPVJYiw_CaFrycAotnWijDVWKxEuauLdkfpT73BCy2TBmF4TnB7vdrOaZzZgMEfYw6qoIFWfjyA_Bm4uq0PunmDAquJK7BehrJYHiU-5nzb6hlew',
};

export default config;
