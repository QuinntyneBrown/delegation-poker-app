import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./digital-asset.actions";
import { DigitalAssetActionCreator } from "./digital-asset.action-creator";
import { DigitalAsset } from "./digital-asset.model";

@Component({
    routes: ["/admin/digitalassets","/admin/digitalasset/edit/:digitalAssetId"],
    template: require("./digital-assets-container.component.html"),
    styles: [require("./digital-assets-container.component.scss")],
    selector: "digital-assets-container",
    viewProviders: ["$location","$routeParams","digitalAssetActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "digitalAssetActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, digitalAssetActionCreator: DigitalAssetActionCreator) => {
    let digitalAssetId = $route.current.params.digitalAssetId;
    let promises = [invokeAsync(digitalAssetActionCreator.all)];
    if (digitalAssetId) { promises.push(invokeAsync({ action: digitalAssetActionCreator.getById, params: { id: digitalAssetId } })) };
    return $q.all(promises);
}])
export class DigitalAssetsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private digitalAssetActionCreator: DigitalAssetActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.digitalAssets;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentDigitalAssetAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/digitalassets");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentDigitalAssetAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/digitalasset/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateDigitalAssetAction)
            this.entity = new DigitalAsset();

        if (state.lastTriggeredByAction instanceof actions.RemoveDigitalAssetAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["digitalAssetId"]), items: this.entities }) as DigitalAsset;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/digitalassets"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["digitalAssetId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["digitalAssetId"]), items: this.entities }) as DigitalAsset;
        } else {
            this.entity = new DigitalAsset();
        }
    }

    edit = entity => this.digitalAssetActionCreator.edit(entity);
    remove = entity => this.digitalAssetActionCreator.remove(entity);
    create = entity => this.digitalAssetActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.digitalAssetActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/digitalassets") {
                this.entity = new DigitalAsset();
            } else {
                this.$location.path("/admin/digitalassets")
            }
        });        
    };
    entity: DigitalAsset;
    entities: Array<DigitalAsset>;
}
