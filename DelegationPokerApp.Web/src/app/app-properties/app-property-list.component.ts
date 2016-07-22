import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./app-property-list.component.html"),
    styles: [require("./app-property-list.component.scss")],
    selector: "app-property-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPropertyListComponent {
    constructor() { }     
}
