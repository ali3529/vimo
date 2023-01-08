import { checkSum, initialData } from "../initialize/InitializeSlice";
import { login, userData } from "../login/LoginSlice";
import {store} from "../store/Store";

export const getTokenFromGlobalStore = () => {
    const state = store.getState();
    return state?.user?.token;
}

export const dispatchUnauthenticatedUser = () => {
    store.dispatch(userData({user: null}))
    store.dispatch(login({token: null}))
    store.dispatch(initialData({initialData: null}))
    store.dispatch(checkSum({checkSum: null}))
}
