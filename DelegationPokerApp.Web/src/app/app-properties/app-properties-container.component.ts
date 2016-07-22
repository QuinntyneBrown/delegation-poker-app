import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./app-property.actions";
import { AppPropertyActionCreator } from "./app-property.action-creator";
import { AppProperty } from "./app-property.model";

@Component({
    routes: ["/admin/apppropertys","/admin/appproperty/edit/:appPropertyId"],
    template: require("./app-propertys-container.component.html"),
    styles: [require("./app-propertys-container.component.scss")],
    selector: "app-propertys-container",
    viewProviders: ["$location","$routeParams","appPropertyActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "appPropertyActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, appPropertyActionCreator: AppPropertyActionCreator) => {
    let appPropertyId = $route.current.params.appPropertyId;
    let promises = [invokeAsync(appPropertyActionCreator.all)];
    if (appPropertyId) { promises.push(invokeAsync({ action: appPropertyActionCreator.getById, params: { id: appPropertyId } })) };
    return $q.all(promises);
}])
export class AppPropertysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private appPropertyActionCreator: AppPropertyActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.appPropertys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAppPropertyAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/apppropertys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAppPropertyAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/appproperty/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateAppPropertyAction)
            this.entity = new AppProperty();

        if (state.lastTriggeredByAction instanceof actions.RemoveAppPropertyAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["appPropertyId"]), items: this.entities }) as AppProperty;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/apppropertys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["appPropertyId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["appPropertyId"]), items: this.entities }) as AppProperty;
        } else {
            this.entity = new AppProperty();
        }
    }

    edit = entity => this.appPropertyActionCreator.edit(entity);
    remove = entity => this.appPropertyActionCreator.remove(entity);
    create = entity => this.appPropertyActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.appPropertyActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/apppropertys") {
                this.entity = new AppProperty();
            } else {
                this.$location.path("/admin/apppropertys")
            }
        });        
    };
    entity: AppProperty;
    entities: Array<AppProperty>;
}
