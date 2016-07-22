import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./situation-editor.component.html"),
    styles: [require("./situation-editor.component.scss")],
    selector: "situation-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SituationEditorComponent {}


