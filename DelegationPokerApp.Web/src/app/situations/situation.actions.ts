import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateSituationAction { constructor(public id, public entity) { } }

export class AllSituationsAction { constructor(public id, public entities) { } }

export class RemoveSituationAction { constructor(public id, public entity) { } }

export class SituationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSituationAction { constructor(public entity) { } }

export class AddOrUpdateSituationSuccessAction { constructor(public entity) { } }

export class CurrentSituationRemovedAction { constructor() { } }
