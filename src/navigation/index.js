import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const historyPush = (payload) => {
    let newPath = `${payload.pathName}`
    if (payload.params) {
        const paramId = payload.params.id
        newPath += `${paramId ? `/${paramId}` : ''}`
    }
    history.push(newPath)
}