import * as actions from "./situation.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeSituationReducer = (state, action) => {
    if (action instanceof actions.RemoveSituationAction)
        pluckOut({ items: state.situations, value: action.entity.id });
    return state;
}

export const addSituationReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateSituationAction) {
        addOrUpdate({ items: state.situations, item: action.entity });
    }
    return state;
}

export const allSituationsReducer = (state, action) => {
    if (action instanceof actions.AllSituationsAction) {
        state.situations = action.entities;
    }
    return state;
}

export const setCurrentSituationReducer = (state, action) => {
    if (action instanceof actions.SetCurrentSituationAction) {
        state.currentSituationId = action.id;
    }
    return state;
}
