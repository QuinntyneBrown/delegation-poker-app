import * as actions from "./team.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeTeamReducer = (state, action) => {
    if (action instanceof actions.RemoveTeamAction)
        pluckOut({ items: state.teams, value: action.entity.id });
    return state;
}

export const addTeamReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTeamAction) {
        addOrUpdate({ items: state.teams, item: action.entity });
    }
    return state;
}

export const allTeamsReducer = (state, action) => {
    if (action instanceof actions.AllTeamsAction) {
        state.teams = action.entities;
    }
    return state;
}

export const setCurrentTeamReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTeamAction) {
        state.currentTeamId = action.id;
    }
    return state;
}
