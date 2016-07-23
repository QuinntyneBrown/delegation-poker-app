import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./you-tube-video.component.html"),
    styles: [require("./you-tube-video.component.scss")],
    selector: "you-tube-video",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class YouTubeVideoComponent {
    constructor() { }
}
