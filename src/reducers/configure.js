import { CONFIGURE } from '../actions/types'

export default function (initialState) {
  return (state = initialState, action) => {
    switch (action.type) {
      case CONFIGURE:
        return { ...state, ...action.payload }
      default:
        return state
    }
  }
}

// initailState Example
/*
const initialState = {
  apiUrl: '',
  forgetPassword: '',
  changePassword: '',
  signUp: '',
  signIn: '',
  activate: '',
  renewToken: '',
  bookmarkUpdate: '',
  bookmarkDelete: '',
  bookmarkGet: '',
  ping: '',
  oAuthProviders: {
    google: '',
    facebook: ''
  }
}
*/
