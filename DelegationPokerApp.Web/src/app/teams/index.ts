import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { TeamEditorComponent } from "./team-editor.component";
import { TeamListComponent } from "./team-list.component";
import { TeamComponent } from "./team.component";
import { TeamsContainerComponent } from "./teams-container.component";
import { TeamActionCreator } from "./team.action-creator";
import { TeamService } from "./team.service";
import *  as reducers from "./team.reducers";
import *  as actions from "./team.actions";

const appTeamsModule = angular.module("app.teams", []);

bootstrap(appTeamsModule, {
    components: [TeamComponent, TeamEditorComponent, TeamsContainerComponent, TeamListComponent],
    providers: [TeamActionCreator, TeamService],
    reducers: reducers,
    actions: actions
});

export * from "./teams.routes";
