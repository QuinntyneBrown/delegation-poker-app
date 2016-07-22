import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { DelegationDashboardEditorComponent } from "./delegation-dashboard-editor.component";
import { DelegationDashboardListComponent } from "./delegation-dashboard-list.component";
import { DelegationDashboardComponent } from "./delegation-dashboard.component";
import { DelegationDashboardsContainerComponent } from "./delegation-dashboards-container.component";
import { DelegationDashboardActionCreator } from "./delegation-dashboard.action-creator";
import { DelegationDashboardService } from "./delegation-dashboard.service";
import *  as reducers from "./delegation-dashboard.reducers";
import *  as actions from "./delegation-dashboard.actions";

const appDelegationDashboardsModule = angular.module("app.delegationDashboards", []);

bootstrap(appDelegationDashboardsModule, {
    components: [DelegationDashboardComponent, DelegationDashboardEditorComponent, DelegationDashboardsContainerComponent, DelegationDashboardListComponent],
    providers: [DelegationDashboardActionCreator, DelegationDashboardService],
    reducers: reducers,
    actions: actions
});

export * from "./delegation-dashboards.routes";
