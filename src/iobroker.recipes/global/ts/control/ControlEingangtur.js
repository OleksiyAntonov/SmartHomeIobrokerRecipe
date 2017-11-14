function HandleChangedState(paramIrl, paramInitiatorId, paramEvent) {
    var processedObject = new SensorOpenObject();
    SensorOpenObjectInitialize(processedObject, paramIrl);
    SensorOpenObjectLoadFromMemory(processedObject);
    processedObject.StateId = SensorConverterStateIdDecoder(paramEvent.newState.val, paramInitiatorId);
    processedObject.Timestamp = paramEvent.newState.ts;
    processedObject.LatestChange = paramEvent.oldState.ts;
    SensorOpenObjectSaveToMemory(processedObject);
    if (processedObject.StateId == sensorStatusClosed) {
        NotificationEmailObjectSend(processedObject);
        NotificationTelegramObjectSend(processedObject);
    }
    return processedObject;
}
function SubscriberAttachEingangtur(paramEvent) {
    var sensorObject = SensorOpenObjectRegister(sensorOpenObjectEingangturIrl);
    sensorObject.InitiatorId = sensorOpenObjectInstanceEingangtur;
    sensorObject.StateId = SensorConverterStateIdDecoder(getState(sensorEingangturEvent).val, sensorObject.InitiatorId);
    SensorOpenObjectSaveToMemory(sensorObject);
    var cacheEingangturState = $(sensorEingangturEvent);
    cacheEingangturState.on(function (obj) {
        HandleChangedState(sensorOpenObjectEingangturIrl, sensorObject.InitiatorId, obj);
    });
}
function SubscriberAttachBalkonDoor(paramEvent) {
    var sensorBalkonDoorObject = SensorOpenObjectRegister(sensorOpenObjectBalkonDoorIrl);
    sensorBalkonDoorObject.InitiatorId = sensorOpenObjectInstanceBalkonDoor;
    sensorBalkonDoorObject.StateId = SensorConverterStateIdDecoder(getState(sensorBalkonDoorEvent).val, sensorBalkonDoorObject.InitiatorId);
    SensorOpenObjectSaveToMemory(sensorBalkonDoorObject);
    var cacheBalkonDoorState = $(sensorBalkonDoorEvent);
    cacheBalkonDoorState.on(function (obj) {
        HandleChangedState(sensorOpenObjectBalkonDoorIrl, sensorBalkonDoorObject.InitiatorId, obj);
    });
}
SubscriberAttachEingangtur(sensorOpenObjectEingangturIrl);
SubscriberAttachBalkonDoor(sensorOpenObjectBalkonDoorIrl);
//# sourceMappingURL=ControlEingangtur.js.map