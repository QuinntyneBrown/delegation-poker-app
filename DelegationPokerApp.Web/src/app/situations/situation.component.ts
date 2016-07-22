import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./situation.component.html"),
    styles: [require("./situation.component.scss")],
    selector: "situation",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SituationComponent {
    constructor() { }
}
