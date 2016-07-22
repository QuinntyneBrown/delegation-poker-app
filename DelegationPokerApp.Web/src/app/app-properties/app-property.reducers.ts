import * as actions from "./app-property.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeAppPropertyReducer = (state, action) => {
    if (action instanceof actions.RemoveAppPropertyAction)
        pluckOut({ items: state.appPropertys, value: action.entity.id });
    return state;
}

export const addAppPropertyReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateAppPropertyAction) {
        addOrUpdate({ items: state.appPropertys, item: action.entity });
    }
    return state;
}

export const allAppPropertysReducer = (state, action) => {
    if (action instanceof actions.AllAppPropertysAction) {
        state.appPropertys = action.entities;
    }
    return state;
}

export const setCurrentAppPropertyReducer = (state, action) => {
    if (action instanceof actions.SetCurrentAppPropertyAction) {
        state.currentAppPropertyId = action.id;
    }
    return state;
}
