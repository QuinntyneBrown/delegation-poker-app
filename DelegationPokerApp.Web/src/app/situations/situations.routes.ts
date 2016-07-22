import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { SituationsContainerComponent } from "./situations-container.component";

export const PhotosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/situations",
        component: SituationsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/situation/edit/:situationId",
        component: SituationsContainerComponent,
        authorizationRequired: true
    }
];