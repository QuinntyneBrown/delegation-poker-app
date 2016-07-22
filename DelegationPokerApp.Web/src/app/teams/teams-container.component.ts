import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./team.actions";
import { TeamActionCreator } from "./team.action-creator";
import { Team } from "./team.model";

@Component({
    routes: ["/admin/teams","/admin/team/edit/:teamId"],
    template: require("./teams-container.component.html"),
    styles: [require("./teams-container.component.scss")],
    selector: "teams-container",
    viewProviders: ["$location","$routeParams","teamActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "teamActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, teamActionCreator: TeamActionCreator) => {
    let teamId = $route.current.params.teamId;
    let promises = [invokeAsync(teamActionCreator.all)];
    if (teamId) { promises.push(invokeAsync({ action: teamActionCreator.getById, params: { id: teamId } })) };
    return $q.all(promises);
}])
export class TeamsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private teamActionCreator: TeamActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.teams;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTeamAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/teams");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTeamAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/team/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateTeamAction)
            this.entity = new Team();

        if (state.lastTriggeredByAction instanceof actions.RemoveTeamAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["teamId"]), items: this.entities }) as Team;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/teams"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["teamId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["teamId"]), items: this.entities }) as Team;
        } else {
            this.entity = new Team();
        }
    }

    edit = entity => this.teamActionCreator.edit(entity);
    remove = entity => this.teamActionCreator.remove(entity);
    create = entity => this.teamActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.teamActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/teams") {
                this.entity = new Team();
            } else {
                this.$location.path("/admin/teams")
            }
        });        
    };
    entity: Team;
    entities: Array<Team>;
}
