/**
 * High level Microservice entities
 */

import { Hospital } from "./high-level-hospital";
import { API } from "./high-level-micro-services";
import { Patient } from "./high-level-patient";

export interface WebClientAPI {
    AppInterface(): API
}

export interface MobileAppAPI {
    Android,
    IOS,
    ReactNative

    AppInterface(): API
}

export interface ThirdPartyAPI {
    AppInterface(): API
}