import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./you-tube-video-list.component.html"),
    styles: [require("./you-tube-video-list.component.scss")],
    selector: "you-tube-video-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class YouTubeVideoListComponent {
    constructor() { }     
}
