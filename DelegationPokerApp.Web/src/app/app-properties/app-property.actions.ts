import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateAppPropertyAction { constructor(public id, public entity) { } }

export class AllAppPropertysAction { constructor(public id, public entities) { } }

export class RemoveAppPropertyAction { constructor(public id, public entity) { } }

export class AppPropertysFilterAction { constructor(public id, public term) { } }

export class SetCurrentAppPropertyAction { constructor(public entity) { } }

export class AddOrUpdateAppPropertySuccessAction { constructor(public entity) { } }

export class CurrentAppPropertyRemovedAction { constructor() { } }
