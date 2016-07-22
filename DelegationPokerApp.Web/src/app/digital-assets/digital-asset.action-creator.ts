import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllDigitalAssetsAction, RemoveDigitalAssetAction, DigitalAssetsFilterAction, SetCurrentDigitalAssetAction,AddOrUpdateDigitalAssetAction, AddOrUpdateDigitalAssetSuccessAction, CurrentDigitalAssetRemovedAction } from "./digital-asset.actions";

@Service({
    serviceName: "digitalAssetActionCreator",
    viewProviders: ["$location", "dispatcher", "digitalAssetService", "guid", "invokeAsync","modalActionCreator"]
})
export class DigitalAssetActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, digitalAssetService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,digitalAssetService,dispatcher,guid,AddOrUpdateDigitalAssetAction,AllDigitalAssetsAction,RemoveDigitalAssetAction,SetCurrentDigitalAssetAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateDigitalAssetSuccessAction(options.entity));

    currentDigitalAssetRemoved = () => this.dispatcher.dispatch(new CurrentDigitalAssetRemovedAction());

    openAllDigitalAssetsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-digital-asset-modal></all-digital-asset-modal>" });
        });
    }
}



