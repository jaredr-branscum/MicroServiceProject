/**
 * High level Microservice entities
 */

import { MicroServices } from "./high-level-micro-services";

export interface Backend_Database {
    NoSql,
    Sql

    sendData() : MicroServices
    receiveData() : MicroServices
}

export interface Backend_Kafka {
    sendData() : MicroServices
    receiveData() : MicroServices
}