import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { SituationEditorComponent } from "./situation-editor.component";
import { SituationListComponent } from "./situation-list.component";
import { SituationComponent } from "./situation.component";
import { SituationsContainerComponent } from "./situations-container.component";
import { SituationActionCreator } from "./situation.action-creator";
import { SituationService } from "./situation.service";
import *  as reducers from "./situation.reducers";
import *  as actions from "./situation.actions";

const appSituationsModule = angular.module("app.situations", []);

bootstrap(appSituationsModule, {
    components: [SituationComponent, SituationEditorComponent, SituationsContainerComponent, SituationListComponent],
    providers: [SituationActionCreator, SituationService],
    reducers: reducers,
    actions: actions
});

export * from "./situations.routes";
