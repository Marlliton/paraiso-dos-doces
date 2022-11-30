import { FirebaseApp, getApps, initializeApp } from "firebase/app";

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  });
}

export { app };
