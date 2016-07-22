import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./delegation-dashboard-editor.component.html"),
    styles: [require("./delegation-dashboard-editor.component.scss")],
    selector: "delegation-dashboard-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DelegationDashboardEditorComponent {}


