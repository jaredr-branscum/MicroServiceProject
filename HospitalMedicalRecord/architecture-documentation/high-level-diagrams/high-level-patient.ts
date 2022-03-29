/**
 * High level Microservice entities
 */

import { API } from "./high-level-micro-services";
import { MicroServices } from "./high-level-micro-services";

export interface Patient {
    Send_Data( data, credentials ) : API
    Receive_Data( data, credentials ) : API
}

export interface In_Network_Patient extends Patient {  

}

export interface Out_Network_Patient extends Patient {

}