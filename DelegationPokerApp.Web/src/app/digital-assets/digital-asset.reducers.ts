import * as actions from "./digital-asset.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeDigitalAssetReducer = (state, action) => {
    if (action instanceof actions.RemoveDigitalAssetAction)
        pluckOut({ items: state.digitalAssets, value: action.entity.id });
    return state;
}

export const addDigitalAssetReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateDigitalAssetAction) {
        addOrUpdate({ items: state.digitalAssets, item: action.entity });
    }
    return state;
}

export const allDigitalAssetsReducer = (state, action) => {
    if (action instanceof actions.AllDigitalAssetsAction) {
        state.digitalAssets = action.entities;
    }
    return state;
}

export const setCurrentDigitalAssetReducer = (state, action) => {
    if (action instanceof actions.SetCurrentDigitalAssetAction) {
        state.currentDigitalAssetId = action.id;
    }
    return state;
}
