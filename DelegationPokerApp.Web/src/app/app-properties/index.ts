import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { AppPropertyEditorComponent } from "./app-property-editor.component";
import { AppPropertyListComponent } from "./app-property-list.component";
import { AppPropertyComponent } from "./app-property.component";
import { AppPropertysContainerComponent } from "./app-propertys-container.component";
import { AppPropertyActionCreator } from "./app-property.action-creator";
import { AppPropertyService } from "./app-property.service";
import *  as reducers from "./app-property.reducers";
import *  as actions from "./app-property.actions";

const appAppPropertysModule = angular.module("app.app-propertys", []);

bootstrap(appAppPropertysModule, {
    components: [AppPropertyComponent, AppPropertyEditorComponent, AppPropertysContainerComponent, AppPropertyListComponent],
    providers: [AppPropertyActionCreator, AppPropertyService],
    reducers: reducers,
    actions: actions
});

export * from "./appPropertys.routes";
