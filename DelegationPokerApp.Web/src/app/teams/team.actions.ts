import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateTeamAction { constructor(public id, public entity) { } }

export class AllTeamsAction { constructor(public id, public entities) { } }

export class RemoveTeamAction { constructor(public id, public entity) { } }

export class TeamsFilterAction { constructor(public id, public term) { } }

export class SetCurrentTeamAction { constructor(public entity) { } }

export class AddOrUpdateTeamSuccessAction { constructor(public entity) { } }

export class CurrentTeamRemovedAction { constructor() { } }
