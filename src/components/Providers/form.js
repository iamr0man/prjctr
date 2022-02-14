import React, {useReducer} from "react";
import {formInitialState, formListReducer} from "../../store/reducers/form";
import {FormContext} from "../../store/modules/FormState";

export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formListReducer, formInitialState)

    return (
        <FormContext.Provider value={[state, dispatch]}>
            {children}
        </FormContext.Provider>
    )
}