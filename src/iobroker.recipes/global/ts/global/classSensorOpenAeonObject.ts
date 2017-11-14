

function SensorOpenAeonObjectConvertState(paramState) {
    switch (paramState) {
        case SensorRegistryAeonStateClosed:
            return sensorStatusClosed;
        case SensorRegistryAeonStateOpened:
            return sensorStatusOpened;
        default:
            return stringEmpty;
    }
}