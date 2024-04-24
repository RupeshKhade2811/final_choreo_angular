import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/massil2016/oauth2/token',
    clientId: 'Efa4ijXGqcD9GbuA4Ol8AuDWpY4a',
    responseType: 'code',
    redirectUri: 'https://e3baa385-6f21-45ff-9c5c-6cf38b4890de.e1-us-east-azure.choreoapps.dev/dashboard',
   //redirectUri:'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/massil2016/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/massil2016/oidc/logout',
    postLogoutRedirectUri: 'https://e3baa385-6f21-45ff-9c5c-6cf38b4890de.e1-us-east-azure.choreoapps.dev/dashboard',
    scope: 'openid profile internal_user_mgt_view', 
    useSilentRefresh: false,
    silentRefreshTimeout: 50000000,
    timeoutFactor: 0.25, 
    sessionChecksEnabled: true,
    showDebugInformation: true,
    clearHashAfterLogin: true,
    nonceStateSeparator : 'semicolon',
    strictDiscoveryDocumentValidation:false,
  
   };
   
