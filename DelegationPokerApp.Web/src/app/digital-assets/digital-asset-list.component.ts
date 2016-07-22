import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./digital-asset-list.component.html"),
    styles: [require("./digital-asset-list.component.scss")],
    selector: "digital-asset-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetListComponent {
    constructor() { }     
}
