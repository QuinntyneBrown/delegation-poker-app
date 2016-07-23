import { Action } from "angular-rx-ui/src/components/core"

export class AddOrUpdateYouTubeVideoAction { constructor(public id, public entity) { } }

export class AllYouTubeVideosAction { constructor(public id, public entities) { } }

export class RemoveYouTubeVideoAction { constructor(public id, public entity) { } }

export class YouTubeVideosFilterAction { constructor(public id, public term) { } }

export class SetCurrentYouTubeVideoAction { constructor(public entity) { } }

export class AddOrUpdateYouTubeVideoSuccessAction { constructor(public entity) { } }

export class CurrentYouTubeVideoRemovedAction { constructor() { } }
