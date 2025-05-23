declare interface JTable {
  id: string
  organizationId: string
  projectId: string
  name: JLocaleTranslation
  description: JLocaleTranslation
  dataSourceId: string
  allowClientSideEditing: boolean
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

declare const enum JTABLE_PERMISSION {
  OWNER = "OWNER",
  MODIFY = "MODIFY",
  VIEW = "VIEW",
  TABULAR_EXTRACT_ROW = "EXTRACT_ROW",
  TABULAR_CREATE_ROW = "CREATE_ROW",
  TABULAR_EDIT_ROW = "EDIT_ROW",
  TABULAR_DELETE_ROW = "DELETE_ROW"
}
