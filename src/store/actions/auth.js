import {LOGIN, LOGOUT} from "./types";

export const login = dispatch => (data) => {
  dispatch({
    type: LOGIN,
    payload: data
  })
}
export const logout = dispatch => () => {
  dispatch({ type: LOGOUT })
}
