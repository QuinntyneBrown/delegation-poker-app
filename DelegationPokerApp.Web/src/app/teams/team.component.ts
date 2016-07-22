import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./team.component.html"),
    styles: [require("./team.component.scss")],
    selector: "team",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
    constructor() { }
}
