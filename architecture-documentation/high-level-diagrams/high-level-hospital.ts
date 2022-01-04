/**
 * High level Microservice entities
 */
import { API } from "./high-level-micro-services";
import { MicroServices } from "./high-level-micro-services";

/** 
 * General Hospital Administrators
 * Hospital Devices / Applications / Services
 */
 export interface Hospital {
    
    readPatientData( query, credentials ) : API
    publishPatientData() : API

}

export interface Medical_Practitioners {
    practice : Private_Practice | Hospital
}
export interface Private_Practice {
}