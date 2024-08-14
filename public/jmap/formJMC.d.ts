declare interface JJsonFormSchemas {
  schema: JSchema | null
  uiSchema: JUISchema | null
}

declare interface JSchema {
  type: "object"
  properties: {
    [key: string]: {
      type: string
      format?: string
    }
  }
  required: string[]
}
declare interface JControlElement {
  type: "Control"
  scope: string
  label: string
}

declare interface JUISchema {
  type: "VerticalLayout"
  elements: JControlElement[]
}
