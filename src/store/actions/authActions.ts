import Credentials from 'models/Credentials'
import User from 'models/User'
import { Dispatch } from 'redux'

export const signIn = (credentials: Credentials) => {
  return (dispatch: Dispatch, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
      })
      .catch((error: Error) => {
        dispatch({ type: 'LOGIN_ERROR', error })
      })
  }
}

export const signOut = () => {
  return (dispatch: Dispatch<any>, getState: any, { getFirebase }: any) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
  }
}

export const signUp = (newUser: User) => {
  return (
    dispatch: Dispatch<any>,
    getState: any,
    { getFirebase, getFirestore }: any
  ) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response: any) => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          })
          .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
          })
          .catch((error: Error) => {
            dispatch({ type: 'SIGNUP_ERROR', error })
          })
      })
  }
}
