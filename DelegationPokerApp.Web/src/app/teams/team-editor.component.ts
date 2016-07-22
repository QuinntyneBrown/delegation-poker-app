import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./team-editor.component.html"),
    styles: [require("./team-editor.component.scss")],
    selector: "team-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamEditorComponent {}


