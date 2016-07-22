import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllSituationsAction, RemoveSituationAction, SituationsFilterAction, SetCurrentSituationAction,AddOrUpdateSituationAction, AddOrUpdateSituationSuccessAction, CurrentSituationRemovedAction } from "./situation.actions";

@Service({
    serviceName: "situationActionCreator",
    viewProviders: ["$location", "dispatcher", "situationService", "guid", "invokeAsync","modalActionCreator"]
})
export class SituationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, situationService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,situationService,dispatcher,guid,AddOrUpdateSituationAction,AllSituationsAction,RemoveSituationAction,SetCurrentSituationAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateSituationSuccessAction(options.entity));

    currentSituationRemoved = () => this.dispatcher.dispatch(new CurrentSituationRemovedAction());

    openAllSituationsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-situation-modal></all-situation-modal>" });
        });
    }
}



