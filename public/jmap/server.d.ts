// ALL_SERVER_MICRO_SERVICE_STATUSES in all-enum.ts
declare const enum JSERVER_MICRO_SERVICE_STATUSES {
  STARTING = "STARTING",
  UP = "UP",
  DOWN = "DOWN"
}

// ALL_SERVER_IDENTITY_PROVIDER_TYPES in all-enum.ts
declare const enum JSERVER_IDENTITY_PROVIDER_TYPES {
  JMAP_CLOUD = "jmapcloud.io", // reserved for future usage ("standard login" via REST API)
  AUTH0_SPA = "auth0-spa"
}

declare interface JServerIdentityProviderById {
  [id: string]: JServerAnyIdentityProvider
}

declare interface JServerMicroServiceById {
  [id: string]: JServerService
}

declare interface JServerInfo {
  identityProviderById: JServerIdentityProviderById
  standardLoginAvailable: boolean
  version: JServerVersion
  microServiceById: JServerMicroServiceById
}

declare interface JServerService {
  id: string
  name: string
  version: string
  status: JSERVER_MICRO_SERVICE_STATUSES
  restBaseUrl: string
}

declare type JServerAnyIdentityProvider = JServerIdentityProviderAuth0Spa | JServerIdentityProviderJMapCloudNative

declare interface JServerIdentityProviderBase {
  id: string
  name: string
  type: JSERVER_IDENTITY_PROVIDER_TYPES
}

declare interface JServerIdentityProviderAuth0Spa extends JServerIdentityProviderBase {
  type: JSERVER_IDENTITY_PROVIDER_TYPES.AUTH0_SPA
  domain: string
  clientId: string
  realm: string
  logoutRedirectUrl: string
}

declare interface JServerIdentityProviderJMapCloudNative extends JServerIdentityProviderBase {
  type: JSERVER_IDENTITY_PROVIDER_TYPES.JMAP_CLOUD
}

declare interface JServerVersion {
  title: string
  mainVersion: number
  buildNumber: number
}

declare interface JServerInfoReadyEventParams {
  serverInfo: JServerInfo
  isMinimumVersionRespected: boolean
}
