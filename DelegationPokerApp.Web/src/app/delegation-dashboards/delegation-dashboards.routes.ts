import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { DelegationDashboardsContainerComponent } from "./delegation-dashboards-container.component";

export const DelegationDashboardsRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/delegationdashboards",
        component: DelegationDashboardsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/delegationdashboard/edit/:delegationDashboardId",
        component: DelegationDashboardsContainerComponent,
        authorizationRequired: true
    }
];