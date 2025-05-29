declare interface JTable {
  id: string
  organizationId: string
  projectId: string
  name: string
  description: JLocaleTranslation
  dataSourceId: string
  allowClientSideEditing: boolean
  permissions: JTablePermissions
}

declare interface JTableData {
  columns: string[]
  links: Array<{ href: string; rel: string; title: string; type: string }>
  numberReturned: number
  rows: []
}

declare interface JTableDataParams {
  startIndex?: number
  limit?: number
  filter?: string
  sort?: string
}

declare interface JTablePermissions {
  EXTRACT_ROW: boolean
  CREATE_ROW: boolean
  EDIT_ROW: boolean
  DELETE_ROW: boolean
}
