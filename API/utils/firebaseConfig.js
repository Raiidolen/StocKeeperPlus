import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serviceAccount = require('../../serviceAccountKey.json');

let firebaseAdmin;

try {
  firebaseAdmin = admin.getApp();
} catch (error) {
  
  firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export default firebaseAdmin;