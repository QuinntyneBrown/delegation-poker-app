import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { DigitalAssetsContainerComponent } from "./digital-assets-container.component";

export const PhotosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/digitalassets",
        component: DigitalAssetsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/digitalasset/edit/:digitalAssetId",
        component: DigitalAssetsContainerComponent,
        authorizationRequired: true
    }
];