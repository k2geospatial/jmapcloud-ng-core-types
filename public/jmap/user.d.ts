// ALL_LOGIN_STATUS in all-enum.ts
declare const enum LOGIN_STATUS {
  LOGGING_IN = "LOGGING_IN",
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGIN_ERROR_INSUFFICIENT_ROLES = "LOGIN_ERROR_INSUFFICIENT_ROLES",
  SWITCHING_ORG = "SWITCHING_ORG"
}

// ALL_ROLES in all-enum.ts
declare const enum ROLES {
  SYS_ADMIN = "SYS_ADMIN",
  ORG_ADMIN = "ORG_ADMIN",
  ORG_EDITOR = "ORG_EDITOR",
  ORG_VIEWER = "ORG_VIEWER",
  ACCOUNT_MANAGER = "ACCOUNT_MANAGER"
}

// ALL_MEMBER_ROLES in all-enum.ts
declare type MEMBER_ROLES = ROLES.ORG_ADMIN | ROLES.ORG_EDITOR | ROLES.ORG_VIEWER

declare interface JUserEventSessionChangedParams {
  session: JSessionData
}

declare interface JTokenInfo {
  /**
   * The JMap Cloud access token.
   */
  accessToken: string

  // TODO: remove
  /**
   * The refresh token.
   * @deprecated
   */
  refreshToken: string

  // TODO: remove
  /**
   * The access token expiration time in seconds.
   * @deprecated
   */
  accessTokenExpiration: number

  /**
   * The access token expiration time in miliseconds.
   */
  accessTokenExpirationInMSecs: number
  roles: ROLES[]
  organizationId: string
  idToken: import("@auth0/auth0-spa-js").IdToken
  picture: string
}

declare interface JSessionData extends JUser, JTokenInfo {
  /**
   * The user permission to change his password
   * @deprecated
   */
  changePasswordAllowed: boolean

  /**
   * Infos about the user's organizations.
   */
  organizationInfos: JOrganizationInfo[]

  /**
   * THe JMap Cloud organization in which the user is currently logged in.
   */
  currentOrganization: JOrganization
}

declare interface JUser {
  name: string
  email: string
  organizationInfos: JOrganizationInfo[]
  roles: ROLES[]
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
  createdBy: string
  creationDate: Date
  lastModifiedBy: string
  lastModificationDate: Date
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
