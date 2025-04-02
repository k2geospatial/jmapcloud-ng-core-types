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
