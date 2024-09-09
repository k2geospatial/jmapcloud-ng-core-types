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
}

declare interface JJsonFormUISchema {
  type: "VerticalLayout"
  elements: JJsonFormControlElement[]
}
