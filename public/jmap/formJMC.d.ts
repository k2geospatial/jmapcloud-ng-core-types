declare interface JJsonFormSchemas {
  schema: JJsonFormSchema | null
  uiSchema: JJsonFormUISchema | null
}

declare interface JJsonFormSchema {
  type: "object"
  properties: {
    [key: string]: {
      type: string
      format?: string
    }
  }
  required: string[]
}
declare interface JJsonFormControlElement {
  type: "Control"
  scope: string
  label: string
  options?: {
    [key: string]: any
  }
}

declare interface JJsonFormUISchema {
  type: "VerticalLayout"
  elements: JJsonFormControlElement[]
}

interface FormNodeBase {
  type: string
  designComponent: string
  id: string
  icon: IconDefinition
}

export interface FormNodeControl extends FormNodeBase {
  type: "Control"
  title?: string
  scope: string
  options: {
    readonly: boolean
  }
}
export interface FormNodeLabel extends FormNodeBase {
  designComponent: "Label"
  type: "Label"
  text?: string
}

export interface FormNodeText extends FormNodeControl {
  designComponent: "Text"
  options: FormNodeControl["options"] & {
    multi: boolean
  }
}
export interface FormNodeNumber extends FormNodeControl {
  designComponent: "Number"
  options: FormNodeControl["options"] & {
    slider: boolean
  }
}
export interface FormNodeBoolean extends FormNodeControl {
  designComponent: "Boolean"
  options: FormNodeControl["options"] & {
    toggle: boolean
    asBoolean: boolean
    checkedValue: string | number
    uncheckedValue: string | number
  }
}
export interface FormNodeDate extends FormNodeControl {
  designComponent: "Date"
}
export interface FormNodeList extends FormNodeControl {
  designComponent: "List"
  options: FormNodeControl["options"] & {
    format?: string
  }
}

export interface FormNodeLayout extends FormNodeBase {
  type: string
  elements: FormNode[]
}

export interface FormNodeVertical extends FormNodeLayout {
  type: "VerticalLayout"
  designComponent: "VerticalLayout"
  isRoot?: boolean
}

export interface FormNodeHorizontal extends FormNodeLayout {
  type: "HorizontalLayout"
  designComponent: "HorizontalLayout"
}
export interface FormNodeGroup extends FormNodeLayout {
  type: "Group"
  designComponent: "Group"
  label?: string
}

export interface FormNodeTabs extends FormNodeLayout {
  type: "Categorization"
  designComponent: "Tabs"
}

export interface FormNodeTab extends FormNodeLayout {
  type: "Category"
  designComponent: "Category"
  label?: string
}

export type FormNodesControl = FormNodeText | FormNodeNumber | FormNodeBoolean | FormNodeDate | FormNodeList
export type FormNodesLayout = FormNodeVertical | FormNodeHorizontal | FormNodeGroup | FormNodeTabs | FormNodeTab

export type FormNode = FormNodesControl | FormNodesLayout | FormNodeLabel
