/**
 * High level Microservice entities
 */
import { Backend_Database } from "./high-level-backend"
import { Backend_Kafka } from "./high-level-backend"
import { MobileAppAPI, ThirdPartyAPI, WebClientAPI } from "./high-level-device"
import { Hospital } from "./high-level-hospital"
import { Patient } from "./high-level-patient"

export interface MicroServices {
    ExternalChannelAdapter,
    InternalChannelAdapter,
    OAuth2
}

export interface API extends WebClientAPI, MobileAppAPI, ThirdPartyAPI {
    restAPI,
    SOAP,
    WebSocket,
    RPC

    APICalls() : MicroServices
}

