import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { TeamsContainerComponent } from "./teams-container.component";

export const PhotosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/teams",
        component: TeamsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/team/edit/:teamId",
        component: TeamsContainerComponent,
        authorizationRequired: true
    }
];