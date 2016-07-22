import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./team-list.component.html"),
    styles: [require("./team-list.component.scss")],
    selector: "team-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
    constructor() { }     
}
