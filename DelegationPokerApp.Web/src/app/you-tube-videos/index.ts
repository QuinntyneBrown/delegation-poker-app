import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { YouTubeVideoEditorComponent } from "./you-tube-video-editor.component";
import { YouTubeVideoListComponent } from "./you-tube-video-list.component";
import { YouTubeVideoComponent } from "./you-tube-video.component";
import { YouTubeVideosContainerComponent } from "./you-tube-videos-container.component";
import { YouTubeVideoActionCreator } from "./you-tube-video.action-creator";
import { YouTubeVideoService } from "./you-tube-video.service";
import *  as reducers from "./you-tube-video.reducers";
import *  as actions from "./you-tube-video.actions";

const appYouTubeVideosModule = angular.module("app.youTubeVideos", []);

bootstrap(appYouTubeVideosModule, {
    components: [YouTubeVideoComponent, YouTubeVideoEditorComponent, YouTubeVideosContainerComponent, YouTubeVideoListComponent],
    providers: [YouTubeVideoActionCreator, YouTubeVideoService],
    reducers: reducers,
    actions: actions
});

export * from "./you-tube-videos.routes";
