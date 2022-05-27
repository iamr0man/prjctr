import {SET_PATH} from "./types";

export const setPath = dispatch => (data) => {
  dispatch({
    type: SET_PATH,
    payload: data
  })
}
