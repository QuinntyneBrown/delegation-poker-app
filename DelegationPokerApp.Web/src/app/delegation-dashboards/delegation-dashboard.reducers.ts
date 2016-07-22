import * as actions from "./delegation-dashboard.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeDelegationDashboardReducer = (state, action) => {
    if (action instanceof actions.RemoveDelegationDashboardAction)
        pluckOut({ items: state.delegationDashboards, value: action.entity.id });
    return state;
}

export const addDelegationDashboardReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateDelegationDashboardAction) {
        addOrUpdate({ items: state.delegationDashboards, item: action.entity });
    }
    return state;
}

export const allDelegationDashboardsReducer = (state, action) => {
    if (action instanceof actions.AllDelegationDashboardsAction) {
        state.delegationDashboards = action.entities;
    }
    return state;
}

export const setCurrentDelegationDashboardReducer = (state, action) => {
    if (action instanceof actions.SetCurrentDelegationDashboardAction) {
        state.currentDelegationDashboardId = action.id;
    }
    return state;
}
