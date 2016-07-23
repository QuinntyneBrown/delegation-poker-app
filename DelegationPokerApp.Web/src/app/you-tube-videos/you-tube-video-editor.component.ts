import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./you-tube-video-editor.component.html"),
    styles: [require("./you-tube-video-editor.component.scss")],
    selector: "you-tube-video-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class YouTubeVideoEditorComponent {}


