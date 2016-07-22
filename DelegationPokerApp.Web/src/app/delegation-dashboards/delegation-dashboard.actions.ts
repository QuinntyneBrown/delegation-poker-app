import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateDelegationDashboardAction { constructor(public id, public entity) { } }

export class AllDelegationDashboardsAction { constructor(public id, public entities) { } }

export class RemoveDelegationDashboardAction { constructor(public id, public entity) { } }

export class DelegationDashboardsFilterAction { constructor(public id, public term) { } }

export class SetCurrentDelegationDashboardAction { constructor(public entity) { } }

export class AddOrUpdateDelegationDashboardSuccessAction { constructor(public entity) { } }

export class CurrentDelegationDashboardRemovedAction { constructor() { } }
