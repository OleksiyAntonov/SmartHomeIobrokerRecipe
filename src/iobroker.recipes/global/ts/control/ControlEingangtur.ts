function HandleChangedState(paramIrl, paramEvent) {
    var processedObject = new SensorOpenObject();
    SensorOpenObjectInitialize(processedObject, paramIrl);
    SensorOpenObjectLoadFromMemory(processedObject);

    processedObject.StateId = SensorOpenAeonObjectConvertState(paramEvent.newState.val);
    processedObject.Timestamp = paramEvent.newState.ts;
    processedObject.LatestChange = paramEvent.oldState.ts;

    SensorOpenObjectSaveToMemory(processedObject);

    if (processedObject.StateId == SensorClosed) {
        NotificationEmailObjectSend(processedObject);
    }

    return processedObject;
}

// ***** State subscription processing: Start ***** //
var sensorObject = SensorOpenObjectRegister(sensorOpenObjectEingangturIrl);

sensorObject.InitiatorId = 0;
sensorObject.StateId = SensorOpenAeonObjectConvertState(getState(sensorEingangturEvent).val);
SensorOpenObjectSaveToMemory(sensorObject);

var cacheState = $(sensorEingangturEvent);
cacheState.on(function (obj) {
    HandleChangedState(sensorOpenObjectEingangturIrl, obj);
})
// ***** State subscription processing: End ***** //
