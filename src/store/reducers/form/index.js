import {TOGGLE_CREATE_FORM} from "../../actions/types";

export const formInitialState = {
    isCreateFormOpen: true
}
export const formListReducer = (state, event) => {
    const { type, payload } = event

    switch (type) {
        case TOGGLE_CREATE_FORM:
            return {
                ...state,
                isCreateFormOpen: payload
            }
    }
}