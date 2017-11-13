function SensorOpenFibaroObjectConvertState(paramState) {
    switch (paramState) {
        case SensorRegistryFibaroStateClosed:
            return sensorStatusClosed;
        case SensorRegistryFibaroStateOpened:
            return sensorStatusOpened;
        default:
            return stringEmpty;
    }
}
//# sourceMappingURL=classSensorOpenFibaroObject.js.map