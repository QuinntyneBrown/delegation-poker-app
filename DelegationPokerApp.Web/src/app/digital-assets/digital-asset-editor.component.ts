import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./digital-asset-editor.component.html"),
    styles: [require("./digital-asset-editor.component.scss")],
    selector: "digital-asset-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetEditorComponent {}


