import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./delegation-dashboard.component.html"),
    styles: [require("./delegation-dashboard.component.scss")],
    selector: "delegation-dashboard",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelegationDashboardComponent {
    constructor() { }
}
