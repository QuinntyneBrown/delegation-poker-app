import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./app-property.component.html"),
    styles: [require("./app-property.component.scss")],
    selector: "app-property",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPropertyComponent {
    constructor() { }
}
