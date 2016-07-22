import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./delegation-dashboard-list.component.html"),
    styles: [require("./delegation-dashboard-list.component.scss")],
    selector: "delegation-dashboard-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelegationDashboardListComponent {
    constructor() { }     
}
