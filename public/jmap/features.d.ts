declare interface JAttributeValueByName {
  [attributeName: string]: any
}

declare interface JFeatureGeometryUpdateParams {
  layerId: JId
  featureId: JId
  geometry: GeoJSON.Geometry
  properties?: JAttributeValueByName
}

declare interface JFeatureEventGeometryUpdateParams {
  layerId: JId
  updatedFeature: GeoJSON.Feature
}

declare interface JFeatureEventDeleteParams {
  layerId: JId
  deletedFeatures: GeoJSON.Feature[]
}

declare interface JFeatureDeleteByIdsResult {
  layerId: JId
  inSuccessIds: JId[]
  inErrorIds: JId[]
}

declare interface JFeatureEventCreateParams {
  layerId: JId
  featureId: JId
  featureGeometry: GeoJSON.Geometry
  featureProperties: JAttributeValueByName
}

declare interface JFeatureGeometryCreateParams {
  layerId: JId
  geometry: GeoJSON.Geometry
  properties?: JAttributeValueByName
  crs: {
    type: string
    property: {
      code: number
    }
  }
}
