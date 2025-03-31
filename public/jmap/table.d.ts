declare interface JTable {
  id: string
  organizationId: string
  projectId: string
  name: JLocaleTranslation
  description: JLocaleTranslation
  dataSourceId: string
  allowClientSideEditing: boolean
}
