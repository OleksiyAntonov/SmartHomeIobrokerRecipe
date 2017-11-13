function HandleChangedState(paramIrl, paramEvent) {
    var processedObject = new SensorOpenObject();
    SensorOpenObjectInitialize(processedObject, paramIrl);
    SensorOpenObjectLoadFromMemory(processedObject);
    processedObject.StateId = SensorOpenAeonObjectConvertState(paramEvent.newState.val);
    processedObject.Timestamp = paramEvent.newState.ts;
    processedObject.LatestChange = paramEvent.oldState.ts;
    SensorOpenObjectSaveToMemory(processedObject);
    if (processedObject.StateId == sensorStatusClosed) {
        NotificationEmailObjectSend(processedObject);
    }
    return processedObject;
}
function SubscriberAttachEingangtur(paramEvent) {
    var sensorObject = SensorOpenObjectRegister(sensorOpenObjectEingangturIrl);
    sensorObject.InitiatorId = sensorOpenObjectInstanceEingangtur;
    sensorObject.StateId = SensorOpenAeonObjectConvertState(getState(sensorEingangturEvent).val);
    SensorOpenObjectSaveToMemory(sensorObject);
    var cacheEingangturState = $(sensorEingangturEvent);
    cacheEingangturState.on(function (obj) {
        HandleChangedState(sensorOpenObjectEingangturIrl, obj);
    });
}
function SubscriberAttachBalkonDoor(paramEvent) {
    var sensorObject = SensorOpenObjectRegister(sensorOpenObjectBalkonDoorIrl);
    sensorObject.InitiatorId = sensorOpenObjectInstanceBalkonDoor;
    sensorObject.StateId = SensorOpenFibaroObjectConvertState(getState(sensorBalkonDoorEvent).val);
    SensorOpenObjectSaveToMemory(sensorObject);
    var cacheBalkonDoorState = $(sensorBalkonDoorEvent);
    cacheBalkonDoorState.on(function (obj) {
        HandleChangedState(sensorOpenObjectBalkonDoorIrl, obj);
    });
}
SubscriberAttachEingangtur(sensorOpenObjectEingangturIrl);
SubscriberAttachBalkonDoor(sensorOpenObjectBalkonDoorIrl);
//# sourceMappingURL=ControlEingangtur.js.map