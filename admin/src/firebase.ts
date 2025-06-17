import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { verifyFirebaseToken } from "./middleware/auth";

initializeApp({ credential: applicationDefault() });
export const adminAuth = getAuth();
