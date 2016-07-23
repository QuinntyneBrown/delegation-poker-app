import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./you-tube-video.actions";
import { YouTubeVideoActionCreator } from "./you-tube-video.action-creator";
import { YouTubeVideo } from "./you-tube-video.model";

@Component({
    routes: ["/admin/youtubevideos","/admin/youtubevideo/edit/:youTubeVideoId"],
    template: require("./you-tube-videos-container.component.html"),
    styles: [require("./you-tube-videos-container.component.scss")],
    selector: "you-tube-videos-container",
    viewProviders: ["$location","$routeParams","youTubeVideoActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "youTubeVideoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, youTubeVideoActionCreator: YouTubeVideoActionCreator) => {
    let youTubeVideoId = $route.current.params.youTubeVideoId;
    let promises = [invokeAsync(youTubeVideoActionCreator.all)];
    if (youTubeVideoId) { promises.push(invokeAsync({ action: youTubeVideoActionCreator.getById, params: { id: youTubeVideoId } })) };
    return $q.all(promises);
}])
export class YouTubeVideosContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private youTubeVideoActionCreator: YouTubeVideoActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.youTubeVideos;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentYouTubeVideoAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/youtubevideos");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentYouTubeVideoAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/youtubevideo/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateYouTubeVideoAction)
            this.entity = new YouTubeVideo();

        if (state.lastTriggeredByAction instanceof actions.RemoveYouTubeVideoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["youTubeVideoId"]), items: this.entities }) as YouTubeVideo;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/youtubevideos"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["youTubeVideoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["youTubeVideoId"]), items: this.entities }) as YouTubeVideo;
        } else {
            this.entity = new YouTubeVideo();
        }
    }

    edit = entity => this.youTubeVideoActionCreator.edit(entity);
    remove = entity => this.youTubeVideoActionCreator.remove(entity);
    create = entity => this.youTubeVideoActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.youTubeVideoActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/youtubevideos") {
                this.entity = new YouTubeVideo();
            } else {
                this.$location.path("/admin/youtubevideos")
            }
        });        
    };
    entity: YouTubeVideo;
    entities: Array<YouTubeVideo>;
}
