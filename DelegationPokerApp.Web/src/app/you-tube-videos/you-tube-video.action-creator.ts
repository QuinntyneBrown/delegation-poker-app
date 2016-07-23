import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllYouTubeVideosAction, RemoveYouTubeVideoAction, YouTubeVideosFilterAction, SetCurrentYouTubeVideoAction,AddOrUpdateYouTubeVideoAction, AddOrUpdateYouTubeVideoSuccessAction, CurrentYouTubeVideoRemovedAction } from "./you-tube-video.actions";

@Service({
    serviceName: "youTubeVideoActionCreator",
    viewProviders: ["$location", "dispatcher", "youTubeVideoService", "guid", "invokeAsync","modalActionCreator"]
})
export class YouTubeVideoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, youTubeVideoService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,youTubeVideoService,dispatcher,guid,AddOrUpdateYouTubeVideoAction,AllYouTubeVideosAction,RemoveYouTubeVideoAction,SetCurrentYouTubeVideoAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateYouTubeVideoSuccessAction(options.entity));

    currentYouTubeVideoRemoved = () => this.dispatcher.dispatch(new CurrentYouTubeVideoRemovedAction());

    openAllYouTubeVideosModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-you-tube-video-modal></all-you-tube-video-modal>" });
        });
    }
}



