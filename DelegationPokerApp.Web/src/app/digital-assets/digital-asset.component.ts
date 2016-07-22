import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./digital-asset.component.html"),
    styles: [require("./digital-asset.component.scss")],
    selector: "digital-asset",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalAssetComponent {
    constructor() { }
}
