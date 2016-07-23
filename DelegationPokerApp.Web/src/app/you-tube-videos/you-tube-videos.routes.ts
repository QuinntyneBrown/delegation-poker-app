import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { YouTubeVideosContainerComponent } from "./you-tube-videos-container.component";

export const YouTubeVideosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/youtubevideos",
        component: YouTubeVideosContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/youtubevideo/edit/:youTubeVideoId",
        component: YouTubeVideosContainerComponent,
        authorizationRequired: true
    }
];