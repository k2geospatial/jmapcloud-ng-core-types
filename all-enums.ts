export const ALL_PHOTO_PROJECTION_TYPES: JPHOTO_PROJECTION_TYPES[] = [
  JPHOTO_PROJECTION_TYPES.NONE,
  JPHOTO_PROJECTION_TYPES.EQUIRECTANGULAR
]

export const ALL_FORM_TYPES: JFORM_TYPES[] = [
  JFORM_TYPES.DEPRECATED,
  JFORM_TYPES.ATTRIBUTE,
  JFORM_TYPES.ATTRIBUTE_SUB_FORM,
  JFORM_TYPES.EXTERNAL,
  JFORM_TYPES.EXTERNAL_SUB_FORM
]

export const ALL_FORM_UI_CONTROL_ALIGNMENTS: JFORM_UI_CONTROL_ALIGNMENTS[] = [
  JFORM_UI_CONTROL_ALIGNMENTS.LEFT,
  JFORM_UI_CONTROL_ALIGNMENTS.CENTER,
  JFORM_UI_CONTROL_ALIGNMENTS.RIGHT
]

export const ALL_FORM_WIDGET_TYPES: JFORM_WIDGET_TYPES[] = [
  JFORM_WIDGET_TYPES.INPUT,
  JFORM_WIDGET_TYPES.RANGE,
  JFORM_WIDGET_TYPES.SWITCH,
  JFORM_WIDGET_TYPES.SELECT,
  JFORM_WIDGET_TYPES.DATE,
  JFORM_WIDGET_TYPES.PHOTO,
  JFORM_WIDGET_TYPES.TREE,
  JFORM_WIDGET_TYPES.LABEL,
  JFORM_WIDGET_TYPES.SPAN,
  JFORM_WIDGET_TYPES.TABLE
]

export const ALL_JSON_SCHEMA_TYPES: JJSON_SCHEMA_TYPES[] = [
  JJSON_SCHEMA_TYPES.STRING,
  JJSON_SCHEMA_TYPES.NUMBER,
  JJSON_SCHEMA_TYPES.INTEGER,
  JJSON_SCHEMA_TYPES.BOOLEAN,
  JJSON_SCHEMA_TYPES.ARRAY,
  JJSON_SCHEMA_TYPES.OBJECT
]

export const ALL_FORM_OPERATION_TYPES: JFORM_OPERATION_TYPES[] = [
  JFORM_OPERATION_TYPES.CREATION,
  JFORM_OPERATION_TYPES.UPDATE,
  JFORM_OPERATION_TYPES.DELETE
]

export const ALL_FORM_FIELD_TYPES: JFORM_FIELD_TYPES[] = [
  JFORM_FIELD_TYPES.EMPTY,
  JFORM_FIELD_TYPES.COLUMN_SPAN,
  JFORM_FIELD_TYPES.LABEL,
  JFORM_FIELD_TYPES.TEXT,
  JFORM_FIELD_TYPES.RANGE,
  JFORM_FIELD_TYPES.SELECT_ONE,
  JFORM_FIELD_TYPES.SELECT_MANY,
  JFORM_FIELD_TYPES.DATE,
  JFORM_FIELD_TYPES.BOOLEAN,
  JFORM_FIELD_TYPES.GROUP_PANEL,
  JFORM_FIELD_TYPES.DOCUMENT,
  JFORM_FIELD_TYPES.TREE,
  JFORM_FIELD_TYPES.TABLE
]

export const ALL_TIME_UNITS: JTIME_UNITS[] = [
  JTIME_UNITS.SECONDS,
  JTIME_UNITS.MINUTES,
  JTIME_UNITS.HOURS,
  JTIME_UNITS.DAYS,
  JTIME_UNITS.WEEKS,
  JTIME_UNITS.MONTHS,
  JTIME_UNITS.YEARS
]

export const ALL_GEOMETRY_UNITS: JGEOMETRY_UNITS[] = [
  JGEOMETRY_UNITS.KILOMETERS,
  JGEOMETRY_UNITS.MILES,
  JGEOMETRY_UNITS.DEGREES,
  JGEOMETRY_UNITS.RADIANS
]

export const ALL_LOCALES: JLOCALES[] = [JLOCALES.FR, JLOCALES.EN, JLOCALES.ES]

export const ALL_LAYER_LAYER_TYPES: JLAYER_LAYER_TYPES[] = [
  JLAYER_LAYER_TYPES.VECTOR,
  JLAYER_LAYER_TYPES.RASTER,
  JLAYER_LAYER_TYPES.OGC_API_FEATURES
]

export const ALL_LAYER_LAYER_REQUEST_MODES: JLAYER_LAYER_REQUEST_MODES[] = [
  JLAYER_LAYER_REQUEST_MODES.BY_TILE,
  JLAYER_LAYER_REQUEST_MODES.BY_REGION
]

export const ALL_LAYER_ELEMENT_TYPES: JLAYER_ELEMENT_TYPES[] = [
  JLAYER_ELEMENT_TYPES.POINT,
  JLAYER_ELEMENT_TYPES.LINE,
  JLAYER_ELEMENT_TYPES.POLYGON,
  JLAYER_ELEMENT_TYPES.TEXT,
  JLAYER_ELEMENT_TYPES.IMAGE,
  JLAYER_ELEMENT_TYPES.LABEL,
  JLAYER_ELEMENT_TYPES.ELLIPSE,
  JLAYER_ELEMENT_TYPES.MIXED
]

export const ALL_LAYER_GEOMETRIES: JLAYER_GEOMETRIES[] = [
  JLAYER_GEOMETRIES.ANNOTATION,
  JLAYER_GEOMETRIES.CURVE,
  JLAYER_GEOMETRIES.COMPLEX,
  JLAYER_GEOMETRIES.POINT,
  JLAYER_GEOMETRIES.RASTER,
  JLAYER_GEOMETRIES.SURFACE,
  JLAYER_GEOMETRIES.ELLIPSE,
  JLAYER_GEOMETRIES.NONE
]

export const ALL_LAYER_ATTRIBUTE_TYPES: JLAYER_ATTRIBUTE_TYPES[] = [
  JLAYER_ATTRIBUTE_TYPES.STRING,
  JLAYER_ATTRIBUTE_TYPES.NUMBER,
  JLAYER_ATTRIBUTE_TYPES.DATE,
  JLAYER_ATTRIBUTE_TYPES.DATETIME,
  JLAYER_ATTRIBUTE_TYPES.BOOLEAN,
  JLAYER_ATTRIBUTE_TYPES.BINARY
]

export const ALL_LAYER_THEMATIC_TYPES: JLAYER_THEMATIC_TYPES[] = [
  JLAYER_THEMATIC_TYPES.INDIVIDUAL,
  JLAYER_THEMATIC_TYPES.GRADUATED,
  JLAYER_THEMATIC_TYPES.OTHER,
  JLAYER_THEMATIC_TYPES.STYLE_RULE
]

export const ALL_LAYER_THEMATIC_FAMILY_TYPES: JLAYER_THEMATIC_FAMILY_TYPES[] = [
  JLAYER_THEMATIC_FAMILY_TYPES.CLASSIFICATION,
  JLAYER_THEMATIC_FAMILY_TYPES.PROPORTIONAL_SYMBOL,
  JLAYER_THEMATIC_FAMILY_TYPES.STYLE_RULE,
  JLAYER_THEMATIC_FAMILY_TYPES.OTHER
]

export const ALL_LAYER_STYLE_TYPES: JLAYER_STYLE_TYPES[] = [
  JLAYER_STYLE_TYPES.POINT,
  JLAYER_STYLE_TYPES.LINE,
  JLAYER_STYLE_TYPES.SURFACE,
  JLAYER_STYLE_TYPES.ANNOTATION,
  JLAYER_STYLE_TYPES.IMAGE,
  JLAYER_STYLE_TYPES.MIXED
]

export const ALL_LAYER_STYLE_ARROWS: JLAYER_STYLE_ARROWS[] = [
  JLAYER_STYLE_ARROWS.NONE,
  JLAYER_STYLE_ARROWS.FORWARD,
  JLAYER_STYLE_ARROWS.BACKWARD
]

export const ALL_LAYER_INFORMATION_REPORT_TYPES: JLAYER_INFORMATION_REPORT_TYPES[] = [
  JLAYER_INFORMATION_REPORT_TYPES.JSP,
  JLAYER_INFORMATION_REPORT_TYPES.BIRT,
  JLAYER_INFORMATION_REPORT_TYPES.BIRT_HTML,
  JLAYER_INFORMATION_REPORT_TYPES.BIRT_PDF,
  JLAYER_INFORMATION_REPORT_TYPES.WMS,
  JLAYER_INFORMATION_REPORT_TYPES.CUSTOM
]

export const ALL_LAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS: JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS[] = [
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.EMPTY,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.NOT_EMPTY,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.IS_NULL,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.IS_NOT_NULL,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.EQUALS,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.NOT_EQUALS,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.GREATER_THAN,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.LOWER_THAN,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.GREATER_OR_EQUALS_TO,
  JLAYER_STYLE_RULE_CONDITION_EXPRESSION_OPERATORS.LOWER_OR_EQUALS_TO
]

export const ALL_LAYER_DYNAMIC_FILTER_OPERATORS: JLAYER_DYNAMIC_FILTER_OPERATORS[] = [
  JLAYER_DYNAMIC_FILTER_OPERATORS.EQUALS,
  JLAYER_DYNAMIC_FILTER_OPERATORS.NOT_EQUALS,
  JLAYER_DYNAMIC_FILTER_OPERATORS.GREATER_THAN,
  JLAYER_DYNAMIC_FILTER_OPERATORS.GREATER_OR_EQUALS_TO,
  JLAYER_DYNAMIC_FILTER_OPERATORS.LESS_THAN,
  JLAYER_DYNAMIC_FILTER_OPERATORS.LESS_OR_EQUALS_TO,
  JLAYER_DYNAMIC_FILTER_OPERATORS.CONTAINS,
  JLAYER_DYNAMIC_FILTER_OPERATORS.NOT_CONTAINS,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_EMPTY,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_NOT_EMPTY,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_NULL,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_NOT_NULL,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_IN_RANGE,
  JLAYER_DYNAMIC_FILTER_OPERATORS.IS_NOT_IN_RANGE,
  JLAYER_DYNAMIC_FILTER_OPERATORS.LAST,
  JLAYER_DYNAMIC_FILTER_OPERATORS.INTERVAL
]

export const ALL_LAYER_STYLE_LINE_STROKE_CAP: JLAYER_STYLE_LINE_STROKE_CAP[] = [
  JLAYER_STYLE_LINE_STROKE_CAP.BUTT,
  JLAYER_STYLE_LINE_STROKE_CAP.ROUND,
  JLAYER_STYLE_LINE_STROKE_CAP.SQUARE
]

export const ALL_LAYER_STYLE_LINE_STROKE_JOIN: JLAYER_STYLE_LINE_STROKE_JOIN[] = [
  JLAYER_STYLE_LINE_STROKE_JOIN.MITER,
  JLAYER_STYLE_LINE_STROKE_JOIN.ROUND,
  JLAYER_STYLE_LINE_STROKE_JOIN.BEVEL
]

export const ALL_LAYER_METADATA_TYPES: JLAYER_METADATA_TYPES[] = [
  JLAYER_METADATA_TYPES.DATE,
  JLAYER_METADATA_TYPES.TEXT,
  JLAYER_METADATA_TYPES.NUMBER,
  JLAYER_METADATA_TYPES.TEXTAREA,
  JLAYER_METADATA_TYPES.URL
]

export const ALL_OPERATING_SYSTEMS: JOPERATING_SYSTEMS[] = [
  JOPERATING_SYSTEMS.UNKNOWN,
  JOPERATING_SYSTEMS.MAC,
  JOPERATING_SYSTEMS.WINDOWS,
  JOPERATING_SYSTEMS.IOS,
  JOPERATING_SYSTEMS.ANDROID,
  JOPERATING_SYSTEMS.LINUX
]

export const ALL_FATAL_ERROR_CONTEXTS: JFATAL_ERROR_CONTEXTS[] = [
  JFATAL_ERROR_CONTEXTS.FORM,
  JFATAL_ERROR_CONTEXTS.LAYER,
  JFATAL_ERROR_CONTEXTS.MAP,
  JFATAL_ERROR_CONTEXTS.PROJECT
]

export const ALL_MAP_CONTEXT_APPLY_TYPES: JMAP_CONTEXT_APPLY_TYPES[] = [
  JMAP_CONTEXT_APPLY_TYPES.STANDARD,
  JMAP_CONTEXT_APPLY_TYPES.DEFAULT,
  JMAP_CONTEXT_APPLY_TYPES.SHARED
]

export const ALL_MAP_CONTEXT_TAB: JMAP_CONTEXT_TABS[] = [JMAP_CONTEXT_TABS.LIST, JMAP_CONTEXT_TABS.CREATE]

export const ALL_MAP_CONTEXT_SORT_BY_OPTIONS: JMAP_CONTEXT_SORT_BY_OPTIONS[] = [
  JMAP_CONTEXT_SORT_BY_OPTIONS.ALPHABETIC,
  JMAP_CONTEXT_SORT_BY_OPTIONS.LAST_UPDATE
]

export const ALL_MAP_CONTEXT_SORT_BY_DIRECTIONS: JMAP_CONTEXT_SORT_BY_DIRECTIONS[] = [
  JMAP_CONTEXT_SORT_BY_DIRECTIONS.ASC,
  JMAP_CONTEXT_SORT_BY_DIRECTIONS.DESC
]

export const ALL_MAP_CONTEXT_VERSIONS: JMAP_CONTEXT_VERSIONS[] = [JMAP_CONTEXT_VERSIONS.V0, JMAP_CONTEXT_VERSIONS.V1]

export const ALL_MAP_MODIFICATION_TYPES: JMAP_MODIFICATION_TYPES[] = [
  JMAP_MODIFICATION_TYPES.NONE,
  JMAP_MODIFICATION_TYPES.CENTER,
  JMAP_MODIFICATION_TYPES.SCALE
]

export const ALL_MAP_POSITIONS: JMAP_POSITIONS[] = [
  JMAP_POSITIONS.TOP_LEFT,
  JMAP_POSITIONS.TOP_RIGHT,
  JMAP_POSITIONS.BOTTOM_LEFT,
  JMAP_POSITIONS.BOTTOM_RIGHT
]

export const ALL_MAP_DISTANCE_UNITS: JMAP_DISTANCE_UNITS[] = [
  JMAP_DISTANCE_UNITS.MILLIMETERS,
  JMAP_DISTANCE_UNITS.CENTIMETERS,
  JMAP_DISTANCE_UNITS.METERS,
  JMAP_DISTANCE_UNITS.KILOMETERS,
  JMAP_DISTANCE_UNITS.INCHES,
  JMAP_DISTANCE_UNITS.FEETS,
  JMAP_DISTANCE_UNITS.YARDS,
  JMAP_DISTANCE_UNITS.MILES,
  JMAP_DISTANCE_UNITS.NAUTICAL_MILES
]

export const ALL_MAP_RASTER_SCHEME_TYPES: JMAP_RASTER_SCHEME_TYPES[] = [
  JMAP_RASTER_SCHEME_TYPES.TMS,
  JMAP_RASTER_SCHEME_TYPES.XYZ
]

export const ALL_SERVER_STATUS: JSERVER_STATUS[] = [JSERVER_STATUS.STARTING, JSERVER_STATUS.UP, JSERVER_STATUS.DOWN]

export const ALL_JORGANIZATION_EXTERNAL_API_KEY_TYPES: JORGANIZATION_EXTERNAL_API_KEY_TYPES[] = [
  JORGANIZATION_EXTERNAL_API_KEY_TYPES.MAPBOX_ACCESS_TOKEN
]
