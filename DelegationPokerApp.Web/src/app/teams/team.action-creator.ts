import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllTeamsAction, RemoveTeamAction, TeamsFilterAction, SetCurrentTeamAction,AddOrUpdateTeamAction, AddOrUpdateTeamSuccessAction, CurrentTeamRemovedAction } from "./team.actions";

@Service({
    serviceName: "teamActionCreator",
    viewProviders: ["$location", "dispatcher", "teamService", "guid", "invokeAsync","modalActionCreator"]
})
export class TeamActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, teamService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,teamService,dispatcher,guid,AddOrUpdateTeamAction,AllTeamsAction,RemoveTeamAction,SetCurrentTeamAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTeamSuccessAction(options.entity));

    currentTeamRemoved = () => this.dispatcher.dispatch(new CurrentTeamRemovedAction());

    openAllTeamsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-team-modal></all-team-modal>" });
        });
    }
}



