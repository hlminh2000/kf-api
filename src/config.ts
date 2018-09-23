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
    'eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1Mzc1ODM5NDUsImV4cCI6MTUzNzY3MDM0NSwic3ViIjoiZGQxOTNhMzYtMmU1Ni00ODVmLWFhMDUtNmEzNzRmYjg0ZmMzIiwiaXNzIjoiZWdvIiwiYXVkIjpbXSwianRpIjoiNmIyYTU2ZGMtMTA1OC00ZTY0LWFmNTAtNWI5NWI3NGM3MTljIiwiY29udGV4dCI6eyJ1c2VyIjp7Im5hbWUiOiJobG1pbmgyMDAwQGdtYWlsLmNvbSIsImVtYWlsIjoiaGxtaW5oMjAwMEBnbWFpbC5jb20iLCJzdGF0dXMiOiJBcHByb3ZlZCIsImZpcnN0TmFtZSI6IkhhIiwibGFzdE5hbWUiOiJMZSIsImNyZWF0ZWRBdCI6IjIwMTgtMDctMTYgMDk6NDQ6MzIiLCJsYXN0TG9naW4iOiIyMDE4LTA5LTIyIDAyOjM5OjA1IiwicHJlZmVycmVkTGFuZ3VhZ2UiOm51bGwsImdyb3VwcyI6WyJrZi1zdGFrZWhvbGRlciJdLCJyb2xlcyI6WyJBRE1JTiJdLCJwZXJtaXNzaW9ucyI6W119fX0.FEeOyU2XkReHHfheF2Cih7aCqwOIvGi0udNsspoRJxvyCv3jQVUw8nP53N0Pe5E8S5sd0kU82pznGISA3NWGlGiAx5D8y31yXMIjYgeh5bB4ewphQv-S6dl8yWxgTPp-8Wd9lEAAVCm1ZHGTbLpaGu7hKpW3GhhKE6iRHYbELTybJsesQ-BkHoY4cNpWAec94lH57vsU9Eup0rVRvHPpE-ZXhXnaRnyduPlVdGqZFJsuLayL8Ze5xT_Xpoh94-shAXjKXn1qa2zqm94obEm_UfHkAD0LpUhmAI3DcwOz_Tr14Blq48XlvILMviprrgiTIwPAjaS45y81Moiu1IP6rQ',
};

export default config;
