// ALL_TERRAIN_ILLUMINATION_ANCHOR_TYPES in all-enum.ts
declare const enum JTERRAIN_ILLUMINATION_ANCHOR_TYPES {
  VIEWPORT = "VIEWPORT",
  MAP = "MAP"
}

declare interface JProjectLoadThumbnailsParams {
  width: number
  height: number
}

declare interface JProjectEventParams {
  project: JProject
}

declare interface JProjectAllEventParams {
  projects: JProject[]
}

declare interface JProjectServerExtension {
  id: string
  urn: string // Unique identifier. Same as id for JMS
  name: string
  jsUrl: string
  data: any | null
  version: string
}

declare interface JProject {
  id: JId //TODO: refactoring will be done in JWNG-351
  name: string
  description: string
  projection: JProjection
  initialRotation: number
  colorSelection: string
  colorBackground: string
  terrain?: JTerrainSpecification
  initialExtent: JBounds | null
  minimumVisibleZoom: number
  maximumVisibleZoom: number
  mapUnit: JMAP_DISTANCE_UNITS
  apiKey: {
    google: string | null
    bing: string | null
    mapBox: string | null
  }
  queryGroups: JQueryGroup[]
  defaultDistanceUnit: JMAP_DISTANCE_UNITS
  base64ImageThumbnail: string
  extensions: JProjectServerExtension[]
  usageStatisticsActive: boolean
}

declare interface JTerrainSpecification {
  dataSourceId?: string
  terrainExaggeration?: number
  hillshadeExaggeration?: number
  hillshadeIlluminationDirection?: number
  visible?: boolean
  hillshadeIlluminationAnchor?: JTERRAIN_ILLUMINATION_ANCHOR_TYPES
  hillshadeAccentColor?: string
  hillshadeHighlightColor?: string
  hillshadeShadowColor?: string
}
