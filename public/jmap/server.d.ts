// ALL_SERVER_TYPES in all-enum.ts
declare const enum JSERVER_TYPES {
  SAAS = "saas"
}

// ALL_SERVER_SAAS_STATUS in all-enum.ts
declare const enum JSERVER_STATUS {
  STARTING = "STARTING",
  UP = "UP",
  DOWN = "DOWN"
}

// ALL_SERVER_SAAS_STATUS in all-enum.ts
declare const enum JSERVER_IDENTITY_PROVIDER_TYPES {
  SSO = "sso",
  AUTH0_SPA = "auth0-spa"
}

declare interface JServerIdentityProviderById {
  [id: string]: JServerAnyIdentityProvider
}

declare interface JServerServiceById {
  [id: string]: JServerService
}

declare interface JServerInfo {
  identityProviderById: JServerIdentityProviderById
  standardLoginAvailable: boolean
  version: JServerVersion
  type: JSERVER_TYPES
  serviceById?: JServerServiceById
}

declare interface JServerService {
  id: string
  name: string
  version: string
  status: JSERVER_STATUS
  restBaseUrl: string
}

declare type JServerAnyIdentityProvider = JServerIdentityProviderAuth0Password | JServerIdentityProviderSso

declare interface JServerIdentityProviderBase {
  id: string
  name: string
  type: JSERVER_IDENTITY_PROVIDER_TYPES
}

declare interface JServerIdentityProviderAuth0Password extends JServerIdentityProviderBase {
  type: JSERVER_IDENTITY_PROVIDER_TYPES.AUTH0_SPA
  domain: string
  clientId: string
  realm: string
}

declare interface JServerIdentityProviderSso extends JServerIdentityProviderBase {
  type: JSERVER_IDENTITY_PROVIDER_TYPES.SSO
  imageData: string
  loginUrl: string
}

declare interface JServerVersion {
  title: string
  mainVersion: number
  buildNumber: number
}

declare interface JMinimumServerVersion {
  legacy: JServerVersion
  saas: JServerVersion
}

declare interface JServerInfoReadyEventParams {
  serverInfo: JServerInfo
  isMinimumVersionRespected: boolean
}
