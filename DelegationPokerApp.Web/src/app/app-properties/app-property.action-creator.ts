import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllAppPropertysAction, RemoveAppPropertyAction, AppPropertysFilterAction, SetCurrentAppPropertyAction,AddOrUpdateAppPropertyAction, AddOrUpdateAppPropertySuccessAction, CurrentAppPropertyRemovedAction } from "./app-property.actions";

@Service({
    serviceName: "appPropertyActionCreator",
    viewProviders: ["$location", "dispatcher", "appPropertyService", "guid", "invokeAsync","modalActionCreator"]
})
export class AppPropertyActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, appPropertyService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,appPropertyService,dispatcher,guid,AddOrUpdateAppPropertyAction,AllAppPropertysAction,RemoveAppPropertyAction,SetCurrentAppPropertyAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAppPropertySuccessAction(options.entity));

    currentAppPropertyRemoved = () => this.dispatcher.dispatch(new CurrentAppPropertyRemovedAction());

    openAllAppPropertysModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-app-property-modal></all-app-property-modal>" });
        });
    }
}



