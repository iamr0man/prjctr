import {DO_LOGIN, DO_LOGOUT} from "./types";

export const doLogin = dispatch => (data) => {
  dispatch({
    type: DO_LOGIN,
    payload: data
  })
}
export const doLogout = dispatch => () => {
  dispatch({ type: DO_LOGOUT })
}
