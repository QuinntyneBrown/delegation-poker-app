import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./delegation-dashboard.actions";
import { DelegationDashboardActionCreator } from "./delegation-dashboard.action-creator";
import { DelegationDashboard } from "./delegation-dashboard.model";

@Component({
    routes: ["/admin/delegationdashboards","/admin/delegationdashboard/edit/:delegationDashboardId"],
    template: require("./delegation-dashboards-container.component.html"),
    styles: [require("./delegation-dashboards-container.component.scss")],
    selector: "delegation-dashboards-container",
    viewProviders: ["$location","$routeParams","delegationDashboardActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "delegationDashboardActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, delegationDashboardActionCreator: DelegationDashboardActionCreator) => {
    let delegationDashboardId = $route.current.params.delegationDashboardId;
    let promises = [invokeAsync(delegationDashboardActionCreator.all)];
    if (delegationDashboardId) { promises.push(invokeAsync({ action: delegationDashboardActionCreator.getById, params: { id: delegationDashboardId } })) };
    return $q.all(promises);
}])
export class DelegationDashboardsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private delegationDashboardActionCreator: DelegationDashboardActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.delegationDashboards;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentDelegationDashboardAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/delegationdashboards");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentDelegationDashboardAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/delegationdashboard/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateDelegationDashboardAction)
            this.entity = new DelegationDashboard();

        if (state.lastTriggeredByAction instanceof actions.RemoveDelegationDashboardAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["delegationDashboardId"]), items: this.entities }) as DelegationDashboard;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/delegationdashboards"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["delegationDashboardId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["delegationDashboardId"]), items: this.entities }) as DelegationDashboard;
        } else {
            this.entity = new DelegationDashboard();
        }
    }

    edit = entity => this.delegationDashboardActionCreator.edit(entity);
    remove = entity => this.delegationDashboardActionCreator.remove(entity);
    create = entity => this.delegationDashboardActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.delegationDashboardActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/delegationdashboards") {
                this.entity = new DelegationDashboard();
            } else {
                this.$location.path("/admin/delegationdashboards")
            }
        });        
    };
    entity: DelegationDashboard;
    entities: Array<DelegationDashboard>;
}
