function SensorConverterStateIdDecoder(paramState, paramInitiatorId) {
    switch (paramInitiatorId) {
        case sensorOpenObjectInstanceEingangtur:
            return SensorOpenAeonObjectConvertState(paramState);
        case sensorOpenObjectInstanceBalkonDoor:
            return SensorOpenFibaroObjectConvertState(paramState);
        default:
            return numUndefined;
    }
}

