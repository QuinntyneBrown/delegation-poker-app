import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./situation-list.component.html"),
    styles: [require("./situation-list.component.scss")],
    selector: "situation-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SituationListComponent {
    constructor() { }     
}
