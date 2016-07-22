import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { AppPropertiesContainerComponent } from "./app-properties-container.component";

export const AppPropertiesRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/appproperties",
        component: AppPropertiesContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/appproperty/edit/:appPropertyId",
        component: AppPropertiesContainerComponent,
        authorizationRequired: true
    }
];