import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./situation.actions";
import { SituationActionCreator } from "./situation.action-creator";
import { Situation } from "./situation.model";

@Component({
    routes: ["/admin/situations","/admin/situation/edit/:situationId"],
    template: require("./situations-container.component.html"),
    styles: [require("./situations-container.component.scss")],
    selector: "situations-container",
    viewProviders: ["$location","$routeParams","situationActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "situationActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, situationActionCreator: SituationActionCreator) => {
    let situationId = $route.current.params.situationId;
    let promises = [invokeAsync(situationActionCreator.all)];
    if (situationId) { promises.push(invokeAsync({ action: situationActionCreator.getById, params: { id: situationId } })) };
    return $q.all(promises);
}])
export class SituationsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private situationActionCreator: SituationActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.situations;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentSituationAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/situations");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentSituationAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/situation/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateSituationAction)
            this.entity = new Situation();

        if (state.lastTriggeredByAction instanceof actions.RemoveSituationAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["situationId"]), items: this.entities }) as Situation;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/situations"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["situationId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["situationId"]), items: this.entities }) as Situation;
        } else {
            this.entity = new Situation();
        }
    }

    edit = entity => this.situationActionCreator.edit(entity);
    remove = entity => this.situationActionCreator.remove(entity);
    create = entity => this.situationActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.situationActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/situations") {
                this.entity = new Situation();
            } else {
                this.$location.path("/admin/situations")
            }
        });        
    };
    entity: Situation;
    entities: Array<Situation>;
}
