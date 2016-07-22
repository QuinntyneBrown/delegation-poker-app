import { BaseService, Injectable, Service } from "angular-rx-ui/src/components/core";

@Injectable()
@Service({
	serviceName: "appPropertyService",
	viewProviders: ["$q","apiEndpoint","fetch"]
})
export class AppPropertyService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/v1/appProperty"; }

}
