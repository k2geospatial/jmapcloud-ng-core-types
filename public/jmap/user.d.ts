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

declare interface JUserResource {
  id: string
  type: JUserResourceType
  extensionId: string
  projectId: string
  content: Record<string, any>
}

declare interface JUserResourceCreateParams {
  type: JUserResourceType
  extensionId?: string
  projectId: string
  content: Record<string, any>
}

declare interface JUserResourceUpdateParams {
  id: string
  type: JUserResourceType
  projectId: string
  content: Record<string, any>
}

declare interface JUserResourcePermission {
  permission: "MODIFY" | "VIEW"
  principal: string
}
