import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { AppPropertyEditorComponent } from "./app-property-editor.component";
import { AppPropertyListComponent } from "./app-property-list.component";
import { AppPropertyComponent } from "./app-property.component";
import { AppPropertiesContainerComponent } from "./app-properties-container.component";
import { AppPropertyActionCreator } from "./app-property.action-creator";
import { AppPropertyService } from "./app-property.service";
import *  as reducers from "./app-property.reducers";
import *  as actions from "./app-property.actions";

const appAppPropertysModule = angular.module("app.appProperties", []);

bootstrap(appAppPropertysModule, {
    components: [AppPropertyComponent, AppPropertyEditorComponent, AppPropertiesContainerComponent, AppPropertyListComponent],
    providers: [AppPropertyActionCreator, AppPropertyService],
    reducers: reducers,
    actions: actions
});

export * from "./app-properties.routes";
