import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllDelegationDashboardsAction, RemoveDelegationDashboardAction, DelegationDashboardsFilterAction, SetCurrentDelegationDashboardAction,AddOrUpdateDelegationDashboardAction, AddOrUpdateDelegationDashboardSuccessAction, CurrentDelegationDashboardRemovedAction } from "./delegation-dashboard.actions";

@Service({
    serviceName: "delegationDashboardActionCreator",
    viewProviders: ["$location", "dispatcher", "delegationDashboardService", "guid", "invokeAsync","modalActionCreator"]
})
export class DelegationDashboardActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, delegationDashboardService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,delegationDashboardService,dispatcher,guid,AddOrUpdateDelegationDashboardAction,AllDelegationDashboardsAction,RemoveDelegationDashboardAction,SetCurrentDelegationDashboardAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateDelegationDashboardSuccessAction(options.entity));

    currentDelegationDashboardRemoved = () => this.dispatcher.dispatch(new CurrentDelegationDashboardRemovedAction());

    openAllDelegationDashboardsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-delegation-dashboard-modal></all-delegation-dashboard-modal>" });
        });
    }
}



