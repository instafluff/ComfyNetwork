
/**
 * Config object to be passed to MSAL on creation.
 * For a full list of msal.js configuration parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_configuration_.html
 * */
const msalConfig = {
  auth: {
    clientId: "ddc61bec-18a0-4133-b9c0-b739459caf55",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" to save cache in cookies to address trusted zones limitations in IE (see: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/Known-issues-on-IE-and-Edge-Browser)
  }
};

/**
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
const loginRequest = {
  scopes: ["openid", "profile"],
};

// Add here scopes for access token to be used at the API endpoints.
const tokenRequest = {
  scopes: apiConfig.b2cScopes,  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
};
