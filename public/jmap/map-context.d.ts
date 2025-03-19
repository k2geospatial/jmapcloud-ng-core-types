// ALL_MAP_CONTEXT_APPLY_TYPES in all-enum.ts
declare const enum JMAP_CONTEXT_APPLY_TYPES {
  STANDARD = "standard",
  DEFAULT = "default",
  SHARED = "shared"
}

// ALL_MAP_CONTEXT_TAB in all-enum.ts
declare const enum JMAP_CONTEXT_TABS {
  LIST = "list",
  CREATE = "create"
}

// ALL_MAP_CONTEXT_SORT_BY_OPTIONS in all-enum.ts
declare const enum JMAP_CONTEXT_SORT_BY_OPTIONS {
  ALPHABETIC = "alphabetic",
  LAST_UPDATE = "lastUpdate"
}

// ALL_MAP_CONTEXT_SORT_BY_DIRECTIONS in all-enum.ts
declare const enum JMAP_CONTEXT_SORT_BY_DIRECTIONS {
  ASC = "asc",
  DESC = "desc"
}

declare interface JMapContextEditResponse {
  id: JId
  uuid: string
  modificationDate: string
}

declare interface JMapContextMetaData {
  title?: string
  shareLink?: boolean
  description?: string
  thumbnailUrl?: string
}

declare interface JMapContextData {
  layerElements: JMapContextDataLayerElement[]
  mapCenter: JLocation
  mapZoom: number
  mapPitch: number
  mapBearing: number
  baseMap: string | undefined
  selection: JMapSelection
  thumbnailUrl: string
  extensionData: { [extensionId: string]: any }
}

declare interface JMapContextDataLayerElement {
  id: JId
  isGroup: boolean
  isVisible: boolean
}

declare interface JMapContextDataLayer extends JMapContextDataLayerElement {
  selectable: boolean
  thematics: JMapContextDataThematic[]
  dynamicFilterConditions: JDynamicFilterCondition[]
  dynamicFilterIsActive: boolean
  transparency?: number
}

declare interface JMapContextDataThematic {
  id: JId
  isVisible: boolean
  hiddenCategoryIndexes?: number[]
  hiddenConditionIds?: string[]
}
declare interface JMapContext extends JMapContextCreationParams {
  id: string
}

declare interface JMapContextCreationParams {
  title: string
  description: string
  shared: boolean
  author: string
  creationDate: string
  modificationDate: string
  data: JMapContextData
}

declare interface JMapContext extends JMapContextCreationParams {
  id: string
}

declare interface JMapContextEventParams {
  context: JMapContext
  isExtensionDataSetById(extensionId: string): boolean
  getExtensionDataById(extensionId: string): any
}

declare interface JMapContextMapDataEventParams extends JMapContextEventParams {
  isCreation: boolean
}

declare interface JMapContextBeforeMapDataChangeEventParams extends JMapContextMapDataEventParams {
  setExtensionDataById(extensionId: string, data: any): void
  removeExtensionDataById(extensionId: string): void
}

declare interface JMapContextAfterMapDataChangeEventParams extends JMapContextMapDataEventParams {
  // nothing else
}

declare interface JMapContextBeforeApplyEventParams extends JMapContextEventParams {
  applyType: JMAP_CONTEXT_APPLY_TYPES
}

declare interface JMapContextAfterApplyEventParams extends JMapContextEventParams {
  applyType: JMAP_CONTEXT_APPLY_TYPES
}

declare interface JMapContextSetActiveResult {
  hasBeanInitialized: boolean
  hasLoadedDefault: boolean
  hasLoadedShared: boolean
  hasLoadingDefaultError?: boolean
  hasLoadingSharedError?: boolean
}
