declare interface JJsonFormSchemas {
  schema: JFormSchemaJMC | null
  uiSchema: FormNodeVertical | undefined
}

declare interface JFormSchemaJMC {
  type: "object"
  properties: {
    [key: string]: JFormSchemaPropertyJMC
  }
  required: string[]
}

declare interface JFormSchemaPropertyJMC {
  type: FORMSCHEMA_TYPES
  format?: string
  title?: string
  default?: any
  minimum?: number
  maximum?: number
  enum?: any[]
}

declare const enum FORMSCHEMA_TYPES {
  STRING = "string",
  INTEGER = "integer",
  NUMBER = "number",
  BOOLEAN = "boolean",
  ARRAY = "array"
}

declare interface JFormJMC {
  id: string
  name: any
  createdBy: string
  creationDate: Date
  lastModifiedBy: string
  lastModificationDate: Date
  organizationId: string
  uiSchema: FormNodeVertical
  formSchema: any
  tags: any[]
  dataSourceId: string
}

interface FormNodeBase {
  type: string
  designComponent: string
  id: string
  icon: any
}

declare interface FormNodeControl extends FormNodeBase {
  type: "Control"
  title?: string
  scope: string
  options: {
    readonly: boolean
  }
}
declare interface FormNodeLabel extends FormNodeBase {
  designComponent: "Label"
  type: "Label"
  text?: string
}

declare interface FormNodeText extends FormNodeControl {
  designComponent: "Text"
  options: FormNodeControl["options"] & {
    multi: boolean
  }
}
declare interface FormNodeNumber extends FormNodeControl {
  designComponent: "Number"
  options: FormNodeControl["options"] & {
    slider: boolean
  }
}
declare interface FormNodeBoolean extends FormNodeControl {
  designComponent: "Boolean"
  options: FormNodeControl["options"] & {
    toggle: boolean
    asBoolean: boolean
    checkedValue: string | number
    uncheckedValue: string | number
  }
}
declare interface FormNodeDate extends FormNodeControl {
  designComponent: "Date"
}
declare interface FormNodeList extends FormNodeControl {
  designComponent: "List"
  options: FormNodeControl["options"] & {
    format?: string
  }
}

declare interface FormNodeLayout extends FormNodeBase {
  type: string
  elements: FormNode[]
}

declare interface FormNodeVertical extends FormNodeLayout {
  type: "VerticalLayout"
  designComponent: "VerticalLayout"
  isRoot?: boolean
}

declare interface FormNodeHorizontal extends FormNodeLayout {
  type: "HorizontalLayout"
  designComponent: "HorizontalLayout"
}
declare interface FormNodeGroup extends FormNodeLayout {
  type: "Group"
  designComponent: "Group"
  label?: string
}

declare interface FormNodeTabs extends FormNodeLayout {
  type: "Categorization"
  designComponent: "Tabs"
}

declare interface FormNodeTab extends FormNodeLayout {
  type: "Category"
  designComponent: "Category"
  label?: string
}

declare type FormNodesControl = FormNodeText | FormNodeNumber | FormNodeBoolean | FormNodeDate | FormNodeList
declare type FormNodesLayout = FormNodeVertical | FormNodeHorizontal | FormNodeGroup | FormNodeTabs | FormNodeTab

declare type FormNode = FormNodesControl | FormNodesLayout | FormNodeLabel
