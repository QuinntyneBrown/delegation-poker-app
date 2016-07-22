require("./app/app-properties");

//import * as reducers from "./app/app.reducers";

import { AppPropertiesRoutes } from "./app/app-properties";
import { DelegationDashboardsRoutes } from "./app/delegation-dashboards";

import { provide, provideRoutePromise, bootstrap } from "angular-rx-ui/src/components/core";
import { authorizationGuard } from "angular-rx-ui/src/components/routing/authorization-guard";

import { routeChangeSuccessIsAdminReducer } from "angular-rx-ui/src/components/routing/route-change-success-is-admin.reducer";

import { AppComponent } from "./app/app.component";
import { AdminAppComponent } from "./app/admin-app.component";

const appModule = angular.module("app", [
    "components",
    "ui.tinymce",

    "app.appProperties",
]);

bootstrap(appModule, {
    api: "api",
    components: [AppComponent, AdminAppComponent],
    loginRedirectUrl: "/",
    html5Mode: true,
    guards: [authorizationGuard],
    run: [routeChangeSuccessIsAdminReducer],
    //reducers: reducers,
    routes: [
        ...AppPropertiesRoutes,
        ...DelegationDashboardsRoutes
    ]
});
