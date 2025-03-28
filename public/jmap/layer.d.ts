// ALL_LAYER_LAYER_TYPES in all-enum.ts
declare const enum JLAYER_LAYER_TYPES {
  VECTOR = "VECTOR",
  RASTER = "RASTER",
  OGC_API_FEATURES = "OGC_API_FEATURES",
  WMS = "WMS",
  WMTS = "WMTS"
}

// ALL_LAYER_LAYER_REQUEST_MODES in all-enum.ts
declare const enum JLAYER_LAYER_REQUEST_MODES {
  BY_TILE = "BY_TILE",
  BY_REGION = "BY_REGION"
}

// ALL_LAYER_ELEMENT_TYPES in all-enum.ts
declare const enum JLAYER_ELEMENT_TYPES {
  POINT = "POINT",
  LINE = "LINE",
  POLYGON = "POLYGON",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  LABEL = "LABEL",
  ELLIPSE = "ELLIPSE",
  MIXED = "MIXED"
}

// ALL_LAYER_GEOMETRIES in all-enum.ts
declare const enum JLAYER_GEOMETRIES {
  ANNOTATION = "ANNOTATION",
  CURVE = "CURVE",
  COMPLEX = "COMPLEX",
  POINT = "POINT",
  RASTER = "RASTER",
  SURFACE = "SURFACE",
  ELLIPSE = "ELLIPSE",
  NONE = "NONE"
}

// ALL_LAYER_ATTRIBUTE_TYPES in all-enum.ts
declare const enum JLAYER_ATTRIBUTE_TYPES {
  STRING = "string",
  NUMBER = "number",
  DATE = "date",
  DATETIME = "datetime",
  BOOLEAN = "boolean",
  BINARY = "binary"
}

// ALL_LAYER_THEMATIC_TYPES in all-enum.ts
declare const enum JLAYER_THEMATIC_TYPES {
  INDIVIDUAL = "INDIVIDUAL_VALUES",
  GRADUATED = "GRADUATED_STYLE",
  STYLE_RULE = "STYLE_RULE",
  OTHER = "OTHER"
}

// ALL_LAYER_THEMATIC_FAMILY_TYPES in all-enum.ts
declare const enum JLAYER_THEMATIC_FAMILY_TYPES {
  CLASSIFICATION = "Classification",
  PROPORTIONAL_SYMBOL = "ProportionalSymbol",
  STYLE_RULE = "StyleRule",
  OTHER = "Other"
}

// ALL_LAYER_STYLE_TYPES in all-enum.ts
declare const enum JLAYER_STYLE_TYPES {
  POINT = "POINT",
  LINE = "LINE",
  POLYGON = "POLYGON",
  TEXT = "TEXT",
  IMAGE = "IMAGE"
}

// ALL_LAYER_STYLE_ARROWS in all-enum.ts
declare const enum JLAYER_STYLE_ARROW_TYPES {
  NONE = "NONE",
  FORWARD = "FORWARD",
  BACKWARD = "BACKWARD"
}

// ALL_LAYER_INFORMATION_REPORT_TYPES in all-enum.ts
declare const enum JLAYER_INFORMATION_REPORT_TYPES {
  JSP = "JSP",
  BIRT = "BIRT",
  BIRT_HTML = "BIRT_HTML",
  BIRT_PDF = "BIRT_PDF",
  WMS = "WMS",
  CUSTOM = "CUSTOM"
}

// ALL_LAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS in all-enum.ts
declare const enum JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS {
  EMPTY = "EMPTY",
  NOT_EMPTY = "NOT_EMPTY",
  IS_NULL = "IS_NULL",
  IS_NOT_NULL = "IS_NOT_NULL",
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER_THAN = "GREATER_THAN",
  LOWER_THAN = "LOWER_THAN",
  GREATER_OR_EQUALS_TO = "GREATER_OR_EQUALS_TO",
  LOWER_OR_EQUALS_TO = "LOWER_OR_EQUALS_TO",
  IN = "IN", // This operator does not yet exist in JMC
  NOT_IN = "NOT_IN" // This operator does not yet exist in JMC
}

// ALL_LAYER_DYNAMIC_FILTER_OPERATORS in all-enum.ts
declare const enum JLAYER_DYNAMIC_FILTER_OPERATORS {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_OR_EQUALS_TO = "GREATER_OR_EQUALS_TO",
  LESS_THAN = "LESS_THAN",
  LESS_OR_EQUALS_TO = "LESS_OR_EQUALS_TO",
  CONTAINS = "CONTAINS",
  NOT_CONTAINS = "NOT_CONTAINS",
  IS_EMPTY = "IS_EMPTY",
  IS_NOT_EMPTY = "IS_NOT_EMPTY",
  IS_NULL = "IS_NULL",
  IS_NOT_NULL = "IS_NOT_NULL",
  IS_IN_RANGE = "IS_IN_RANGE",
  IS_NOT_IN_RANGE = "IS_NOT_IN_RANGE",
  LAST = "LAST",
  INTERVAL = "INTERVAL"
}

// ALL_LAYER_STYLE_LINE_CAP in all-enum.ts
declare const enum JLAYER_STYLE_LINE_CAP {
  BUTT = "BUTT",
  ROUND = "ROUND",
  SQUARE = "SQUARE"
}

// ALL_LAYER_STYLE_LINE_JOIN in all-enum.ts
declare const enum JLAYER_STYLE_LINE_JOIN {
  MITER = "MITER",
  ROUND = "ROUND",
  BEVEL = "BEVEL"
}

// ALL_LAYER_METADATA_TYPES in all-enum.ts
declare const enum JLAYER_METADATA_TYPES {
  DATE = "date",
  TEXT = "text",
  NUMBER = "number",
  TEXTAREA = "textarea",
  URL = "url"
}

declare type JLayerMetaDataValue = string | number | Date

declare interface JLayerBaseMetadata {
  id: JId
}

declare interface JLayerMetadataSchemaItem extends JLayerBaseMetadata {
  type: JLAYER_METADATA_TYPES
  label: string
  allowMultiple: boolean
}

declare interface JLayerStyleSamplesById {
  [styleId: string]: string
}

declare interface JLayersConfiguration {
  metadataSchema: JLayerMetadataSchemaItem[]
  layerTree: JLayerTree
  styleSamples: JLayerStyleSamplesById
}

declare interface JLayerMetadata extends JLayerBaseMetadata {
  value: JLayerMetaDataValue
  label: string
  type: JLAYER_METADATA_TYPES
}

interface JLayerMetadataSection {
  id: JId
  title: string
  metadatas: JLayerMetadata[]
}

declare interface JLayerEventChangeParams {
  layerTree: JLayerTree
}

declare interface JLayerEventThematicCategoryVisibilityParams {
  layerId: JId
  thematicId: JId
  hiddenCategoryIndexes: number[]
}

declare interface JLayerEventThematicConditionVisibilityParams {
  layerId: JId
  thematicId: JId
  hiddenConditionIds: string[]
}

declare interface JLayerEventThematicVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
  hiddenCategoryIndexes?: number[]
  hiddenConditionIds?: string[]
}

declare interface JLayerEventVisibilityParams {
  layerId: JId
  visibility: boolean
  areAllParentsVisible: boolean
}

declare interface JLayerEventRasterTransparencyParams {
  layerId: JId
  transparency: number
}

declare interface JLayerEventSelectabilityParams {
  layerId: JId
  selectability: boolean
}

declare interface JLayerEventParams {
  layerId: JId
}

declare interface JLayerThematicEventParams {
  layerId: JId
  thematicId: JId
}

declare interface JAddMapThematicEventParams {
  layerId: JId
  layerSpecifications: maplibregl.LayerSpecification[]
}

declare interface JLayerInitialSearchEventParams extends JLayerEventParams {
  features: GeoJSON.Feature[]
}

declare interface JLayerDynamicFilterSetParams {
  filters: JDynamicFilter[]
}

declare interface JLayerDynamicFilterActivationParams extends JLayerEventParams {
  isActivation: boolean
}

declare interface JLayerDynamicFilterConditionCreated extends JLayerEventParams {
  filter: JDynamicFilter
  condition: JDynamicFilterCondition
}

declare interface JLayerDynamicFilterConditionUpdated extends JLayerEventParams {
  filter: JDynamicFilter
  condition: JDynamicFilterCondition
}

declare interface JLayerDynamicFilterConditionsRemoved extends JLayerEventParams {
  filter: JDynamicFilter
  conditionIds: number[]
}

declare interface JMapEventLoadedParams {
  map: maplibregl.Map
}

declare interface JLayerGeometry {
  type: JLAYER_GEOMETRIES
  editable: boolean
}

declare interface JLayerPermissions {
  ADD_FEATURE: boolean
  DELETE_FEATURE: boolean
  EXTRACT_FEATURE: boolean
  EDIT_FEATURE_ATTRIBUTES: boolean
  EDIT_FEATURE_GEOMETRY: boolean
  EDIT_ONLY_OWN: boolean
}

declare interface JLayerGroup extends JLayerTreeElement {
  open: boolean
  image: string | null
  children: JLayerTreeElement[]
}

declare interface JLayer extends JLayerTreeElement {
  geometry: JLayerGeometry
  elementType: JLAYER_ELEMENT_TYPES
  layerType: JLAYER_LAYER_TYPES
  useClientCache: boolean
  defaultMetadatas: JLayerMetadata[]
  metadataSections: JLayerMetadataSection[]
  attributes: JLayerAttribute[]
  mouseOver: JMapMouseOver
  minimumZoom: number | undefined
  maximumZoom: number | undefined
  styleRules: JLayerStyleRule[]
  defaultStyleRule: JLayerStyleRule | undefined
  thematics: JLayerThematic[]
  queries: JQuery[]
  extent: JBoundaryBox | null
  permissions: JLayerPermissions
  hasAttributeForm: boolean
  hasExternalForms: boolean
  selectable: boolean
  listedInTree: boolean
  authorPropertyName: string
  lowercasedAttributeNames: string[]
  forms: JLayerForm[]
  hasInformationReport: boolean
  informationReports: JLayerInformationReport[]
  spatialDataSourceId: string
  selectionStyleId: string
  dynamicFilter: JDynamicFilter
  showEditingTools: boolean
}

declare interface JLayerInformationReport {
  type: JLAYER_INFORMATION_REPORT_TYPES
  title: string
  preFormatted: boolean
  singlePresentationPage: string
  multiplePresentationPage: string
}

declare interface JDynamicFilter {
  layerId: JId
  isAvailable: boolean // false means no dynamic filter for layer, ex: IMAGE layers
  isActive: boolean
  intervalOperatorDisabled: boolean // true if layer has less than 2 date attributes
  conditions: JDynamicFilterCondition[]
}

declare interface JDynamicFilterCondition {
  layerId: JId
  id: number
  attributeName: string
  endAttributeName?: string // used for INTERVAL operator
  filterOperator: JLAYER_DYNAMIC_FILTER_OPERATORS
  value: any | any[] // 2 items array for between
}

declare interface JDynamicFilterSetParams {
  layerId: JId
  conditions: JDynamicFilterCondition[]
  isActive?: boolean
}

declare interface JLayerForm {
  id: JId
  name: string
  type: JFORM_TYPES
}

declare interface JLayerAttribute {
  id: string
  name: string
  label: string
  type: JLAYER_ATTRIBUTE_TYPES
}

declare interface JLayerTreeElement {
  id: JId
  name: string
  description: string
  initialVisibility: boolean
  visible: boolean
  isGroup: boolean
  path: string
}

declare type JLayerTree = JLayerTreeElement[]

declare interface JLayerThematic {
  id: JId
  enabled: boolean // initial visibility
  isVisible: boolean // user visibility
  name: string
  description: string
  type: JLAYER_THEMATIC_TYPES
  dynamicLegend: boolean
}

declare interface JLayerThematicClassification extends JLayerThematic {
  categoryCount: number
  colorPaletteName: string
  attribute: string
  nullValueSupported: boolean
  outOfSampleDataIgnored: boolean
  categories: JLayerThematicCategory[]
  hiddenCategoryIndexes: number[]
}

declare interface JLayerThematicStyleRule extends JLayerThematic {
  type: JLAYER_THEMATIC_TYPES.STYLE_RULE
  conditions: JLayerThematicCondition[]
  hiddenConditionIds: string[]
}

declare interface JLayerThematicCondition {
  id: string
  title: string
  scaledStyles: JLayerThematicConditionScaledStyle[]
}

declare interface JLayerThematicConditionScaledStyle {
  minZoom: number
  maxZoom: number
  styleId: string
}

declare interface JLayerThematicCategory {
  title: string
  style: JLayerBaseStyle
  enabled: boolean
  nullValueCategory: boolean
  index: number
}

declare interface JLayerThematicCategoryIndividual extends JLayerThematicCategory {
  type: JLAYER_THEMATIC_TYPES.INDIVIDUAL
  value: any
}

declare interface JLayerThematicCategoryRange extends JLayerThematicCategory {
  minimum: number
  maximum: number
  includeMax: boolean
  includeMin: boolean
  percentMinimum: number
  percentMaximum: number
}

declare interface JLayerSearchByAttributesParams {
  layerId: JId
  attributeName: string
  attributeValue: any | any[]
  projectionCode?: string
}

declare interface JLayerStyleRule {
  id: string
  layerId: string
  active: boolean
  defaultRule: boolean
  name: string
  conditions: JLayerStyleRuleCondition[]
}

declare interface JLayerStyleRuleCondition {
  id: string
  name: string
  conditionExpressions: JLayerStyleRuleConditionExpression[]
  styleMapScales: JLayerStyleScaled[]
}

declare interface JLayerStyleScaled {
  id: string
  styleId: string
  minimumZoom: number
  maximumZoom: number
  /**
   * @deprecated
   * this property will be removed in early 2025
   */
  minimumVisibleZoom?: number
  /**
   * @deprecated
   * this property will be removed in early 2025
   */
  maximumVisibleZoom?: number
}

declare interface JLayerStyleSample {
  styleId: string
  imageSampleInBase64: string
}

declare interface JLayerStyleRuleConditionExpression {
  id: string
  operator: JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS
  value: any
  attribute: JLayerAttribute
}

declare interface JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES
  id: string
  name: string
  /**
   * @deprecated
   * this property will be removed once the legacy support for JMS thematics will be removed
   */
  imageSampleInBase64: string
  transparency: number
}

declare interface JLayerImageStyle extends JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES.IMAGE
}

declare interface JLayerPointStyle extends JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES.POINT
  size: number
  rotation: number
  rotationLocked: boolean
  proportional: boolean
  proportionalScale: number
  symbolOffset: [number, number]
  symbolData: string
}

declare interface JLayerLineStyle extends JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES.LINE
  lineThickness: number
  lineColor: string
  arrowType: JLAYER_STYLE_ARROW_TYPES
  arrowPosition: number
  lineCap: JLAYER_STYLE_LINE_CAP
  lineJoin: JLAYER_STYLE_LINE_JOIN
  dashPattern: number[]
  patternData: string
}

declare interface JLayerPolygonStyle extends JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES.POLYGON
  fillColor: string
  borderColor: string
  transparentFill: boolean
  borderThickness: number
  borderTransparency: number
  borderDashPattern: number[]
  borderPatternData: string
  patternData: string
}

declare interface JLayerTextStyle extends JLayerBaseStyle {
  type: JLAYER_STYLE_TYPES.TEXT
  textColor: string
  outlineColor: string
  bold: boolean
  italic: boolean
}

declare type JLayerUserStyleRule = Omit<JLayerStyleRule, "defaultRule">

declare type JLayerAddThematicParams = {
  layerId: JId
  styleRule: JLayerUserStyleRule
  styles: JLayerSetStyleParams[]
}

declare type JLayerSetStyleParams =
  | (Pick<JLayerLineStyle, "type"> & Partial<Pick<JLayerLineStyle, "id" | "lineColor" | "lineThickness">>)
  | (Pick<JLayerPolygonStyle, "type"> &
      Partial<Pick<JLayerPolygonStyle, "id" | "fillColor" | "borderColor" | "borderThickness">>)
  | (Pick<JLayerPointStyle, "type"> & Partial<Pick<JLayerPointStyle, "id" | "symbolData">>)

declare interface JLayerSetLayersVisibilityParams {
  layerId: JId
  visibility: boolean
}

declare interface JLayerSetLayersSelectabilityParams {
  layerId: JId
  selectability: boolean
  ignoreVisibility?: boolean
}

declare interface JLayerThematicSetVisibilityParams {
  layerId: JId
  thematicId: JId
  visibility: boolean
  hiddenCategoryIndexes?: number[]
  hiddenConditionIds?: string[]
}

declare interface JLayerThematicSetCategoryVisibilityParams {
  layerId: JId
  thematicId: JId
  categoryIndex: number
  visibility: boolean
}

declare interface JLayerThematicSetConditionVisibilityParams {
  layerId: JId
  thematicId: string
  conditionId: string
  visibility: boolean
}

declare interface JLayerSetLayerGroupsExpansionParams {
  layerGroupId: JId
  open: boolean
}
