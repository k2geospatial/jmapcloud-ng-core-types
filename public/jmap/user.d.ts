declare interface JUserEventSessionChangedParams {
  session: JSessionData
}

declare interface JTokenInfo {
  /**
   * The JMap user session token (legacy) or access token (Saas JMap Cloud).
   */
  accessToken: string
  /**
   * The refresh token.
   */
  refreshToken: string
  /**
   * The access token expiration time in seconds.
   */
  accessTokenExpiration: number
}

declare interface JSessionData extends JTokenInfo {
  /**
   * The user permission to change his password
   */
  changePasswordAllowed: boolean
  /**
   * The user information.
   *
   * @example
   * ```ts
   * user: {
   *   username: "jdo@company.com",
   *   fullName: "John Do",
   *   admin: true
   * }
   * ```
   */
  user: JUserIdentity
  /**
   * Infos about the user's organizations, only for JMap Cloud servers.
   */
  organizationInfos: JOrganizationInfo[]
  /**
   * THe JMap Cloud organization in which the user is currently logged in, only for JMap Cloud servers.
   */
  currentOrganization: JOrganization
}

declare interface JUserIdentity {
  username: string
  fullName: string
  email: string
}

declare interface JUserInfo {
  id: string
  label: string
  value: undefined | null | string | number | Date
}

declare interface JOrganizationInfo {
  id: string
  auth0Id: string
  name: string
  logoUrl: string
  primaryColor: string
  backgroundColor: string
  active: boolean
}

declare interface JOrganization extends JOrganizationInfo {
  externalApiKeys: JOrganizationExternalApiKey[]
  enabledExtensions: JProjectServerExtension[]
}

declare interface JOrganizationExternalApiKey {
  id: string
  title: string
  apiKey: string
  type: JORGANIZATION_EXTERNAL_API_KEY_TYPES
}

declare interface JJMapPasswordPolicyCompliance {
  hasLowercaseLetters: boolean
  hasUppercaseLetters: boolean
  hasNumbers: boolean
  hasSpecialCharacters: boolean
  hasMinimumLength: boolean
}

// ALL_JORGANIZATION_EXTERNAL_API_KEY_TYPES in all-enum.ts
declare const enum JORGANIZATION_EXTERNAL_API_KEY_TYPES {
  MAPBOX_ACCESS_TOKEN = "MAPBOX_ACCESS_TOKEN"
}

declare type JUserResourceType = "MAPS" | "EXTENSION" | "PREFERENCE_PORTAL" | "PREFERENCES_NG"
declare type JUserResourceExtensionType = Extract<JUserResourceType, "EXTENSION">
declare type JUserResourceMapsType = Extract<JUserResourceType, "MAPS">
declare type JUserResourcePreferencesType = Extract<JUserResourceType, "PREFERENCE_PORTAL" | "PREFERENCES_NG">

declare interface JUserResourceBase {
  id: string
  type: JUserResourceType
  content: Record<string, any>
}

declare interface JUserResourceMaps extends JUserResourceBase {
  type: JUserResourceMapsType
  projectId: string
}

declare interface JUserResourceMapsUpdateParams extends JUserResourceMaps {}

declare type JUserResourceMapsCreateParams = Omit<JUserResourceMaps, "id">

declare interface JUserResourceExtension extends JUserResourceBase {
  type: JUserResourceExtensionType
  extensionId: string
  projectId: string
}

declare interface JUserResourceExtensionUpdateParams extends JUserResourceExtension {}

declare type JUserResourceExtensionCreateParams = Omit<JUserResourceExtension, "id">

// Eventually, the NG and Portal preferences will have an optional projectId to include in the logic below
declare interface JUserResourcePreferences extends JUserResourceBase {
  type: JUserResourcePreferencesType
}

declare interface JUserResourcePreferencesUpdateParams extends JUserResourcePreferences {}

declare type JUserResourcePreferencesCreateParams = Omit<JUserResourcePreferences, "id">

type JUserResourcePermissionType = "VIEW" | "MODIFY" | "OWNER"
type JUserViewPermissionType = Extract<JUserResourcePermissionType, "VIEW">

declare interface JUserResourcePermissionParams {
  permission: JUserViewPermissionType
  principal: string
}

declare interface JUserResourcePermissionsResponse {
  permissions: JUserResourcePermissionType[]
  principal: string
}
