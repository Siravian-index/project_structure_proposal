

// TODO:
// Implement azure active directory config

import { Configuration, LogLevel, PublicClientApplication } from "@azure/msal-browser";
import env from '@/config/env';



/**
 * Configuration object to be passed to MSAL instance on creation.
 */
const msalConfig: Configuration = {
    auth: {
        // client id
        clientId: env.VITE_AZURE_AD_CLIENT_ID,
        // tenant subdomain id
        authority: `https://login.microsoftonline.com/${env.VITE_AZURE_AD_TENANT_ID}`,
        // redirect to (configured on azure too) Registered on Azure Portal/App Registration
        redirectUri: `YOUR_REDIRECT_URL`, //eg: ${window.location.origin}/Dashboard
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: "sessionStorage", // "sessionStorage" or"localStorage"
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
        allowNativeBroker: false,
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);


/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 */
export const loginRequest = {
    scopes: ["Files.Read"],
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net",
};  