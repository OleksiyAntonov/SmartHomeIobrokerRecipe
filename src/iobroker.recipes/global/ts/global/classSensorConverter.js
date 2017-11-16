function SensorConverterStateIdDecoder(paramState, paramInitiatorId) {
    switch (paramInitiatorId) {
        case sensorOpenObjectInstanceEingangtur:
            return SensorOpenAeonObjectConvertState(paramState);
        case sensorOpenObjectInstanceBalkonDoor:
        case sensorOpenObjectInstanceMailbox:
            return SensorOpenFibaroObjectConvertState(paramState);
        default:
            return numUndefined;
    }
}
function SensorConverterInitiatorIdDecoder(paramInitiatorId) {
    switch (paramInitiatorId) {
        case sensorOpenObjectInstanceEingangtur:
            return sensorOpenObjectInstanceEingangturName;
        case sensorOpenObjectInstanceBalkonDoor:
            return sensorOpenObjectInstanceBalkonDoorName;
        case sensorOpenObjectInstanceMailbox:
            return sensorOpenObjectInstanceMailboxName;
        default:
            return stringEmpty;
    }
}
//# sourceMappingURL=classSensorConverter.js.map