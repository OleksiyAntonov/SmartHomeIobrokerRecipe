function SensorOpenAeonObjectConvertState(paramState) {
    switch (paramState) {
        case SensorRegistryAeonStateClosed:
            return SensorClosed;
        case SensorRegistryAeonStateOpened:
            return SensorOpened;
        default:
            return stringEmpty;

    }
}