import { BaseService, Injectable, Service } from "angular-rx-ui/src/components/core";

@Injectable()
@Service({
	serviceName: "situationService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class SituationService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/situation"; }

}
