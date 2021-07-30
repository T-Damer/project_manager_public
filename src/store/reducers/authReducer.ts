import Action from 'models/Action'

const initState = {
  authError: null,
}

const authReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error')
      return {
        ...state,
        authError: 'Login failed',
      }
    case 'LOGIN_SUCCESS':
      return {
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
      return state
    case 'SIGNUP_SUCCESS':
      return { ...state, authError: null }
    case 'SIGNUP_ERROR':
      console.log('SignUp error')
      return { ...state, authError: action.error?.message }
    default:
      return state
  }
}

export default authReducer
