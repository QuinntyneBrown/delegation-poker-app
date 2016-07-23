import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { DigitalAssetEditorComponent } from "./digital-asset-editor.component";
import { DigitalAssetListComponent } from "./digital-asset-list.component";
import { DigitalAssetComponent } from "./digital-asset.component";
import { DigitalAssetsContainerComponent } from "./digital-assets-container.component";
import { DigitalAssetActionCreator } from "./digital-asset.action-creator";
import { DigitalAssetService } from "./digital-asset.service";
import *  as reducers from "./digital-asset.reducers";
import *  as actions from "./digital-asset.actions";

const appDigitalAssetsModule = angular.module("app.digitalAssets", []);

bootstrap(appDigitalAssetsModule, {
    components: [DigitalAssetComponent, DigitalAssetEditorComponent, DigitalAssetsContainerComponent, DigitalAssetListComponent],
    providers: [DigitalAssetActionCreator, DigitalAssetService],
    reducers: reducers,
    actions: actions
});

export * from "./digital-assets.routes";
