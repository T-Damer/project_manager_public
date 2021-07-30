import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// TODO: #3 make dotenv work, IDK why it can't see .env in root dir
require('dotenv').config({ path: `./.env` })

export const fbConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
}

firebase.initializeApp(fbConfig)
firebase.firestore()
