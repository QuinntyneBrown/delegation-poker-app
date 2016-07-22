import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateDigitalAssetAction { constructor(public id, public entity) { } }

export class AllDigitalAssetsAction { constructor(public id, public entities) { } }

export class RemoveDigitalAssetAction { constructor(public id, public entity) { } }

export class DigitalAssetsFilterAction { constructor(public id, public term) { } }

export class SetCurrentDigitalAssetAction { constructor(public entity) { } }

export class AddOrUpdateDigitalAssetSuccessAction { constructor(public entity) { } }

export class CurrentDigitalAssetRemovedAction { constructor() { } }
