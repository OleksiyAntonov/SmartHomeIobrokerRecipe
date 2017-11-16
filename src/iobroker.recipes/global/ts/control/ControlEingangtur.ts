function HandleChangedState(paramIrl, paramInitiatorId, paramEvent, paramEnableChat) {
    var processedObject = new SensorOpenObject();
    SensorOpenObjectInitialize(processedObject, paramIrl);
    SensorOpenObjectLoadFromMemory(processedObject);

    processedObject.StateId = SensorConverterStateIdDecoder(paramEvent.newState.val, paramInitiatorId);
    processedObject.Timestamp = paramEvent.newState.ts;
    processedObject.LatestChange = paramEvent.oldState.ts;

    SensorOpenObjectSaveToMemory(processedObject);

    if (processedObject.StateId == sensorStatusClosed) {
        NotificationEmailObjectSend(processedObject);
        if (paramEnableChat === true) {
            NotificationTelegramObjectSend(processedObject);
        }
    }

    return processedObject;
}

function SubscriberAttachMailbox(paramEvent) {
    var sensorMailboxObject = SensorOpenObjectRegister(paramEvent);

    sensorMailboxObject.InitiatorId = sensorOpenObjectInstanceMailbox;
    sensorMailboxObject.StateId = SensorConverterStateIdDecoder(getState(sensorMailboxEvent).val, sensorMailboxObject.InitiatorId);
    SensorOpenObjectSaveToMemory(sensorMailboxObject);

    var cacheMailboxState = $(sensorMailboxEvent);
    cacheMailboxState.on(function (obj) {
        HandleChangedState(paramEvent, sensorMailboxObject.InitiatorId, obj, true);
    })
}

function SubscriberAttachEingangtur(paramEvent) {
    var sensorObject = SensorOpenObjectRegister(paramEvent);

    sensorObject.InitiatorId = sensorOpenObjectInstanceEingangtur;
    sensorObject.StateId = SensorConverterStateIdDecoder(getState(sensorEingangturEvent).val, sensorObject.InitiatorId);
    SensorOpenObjectSaveToMemory(sensorObject);

    var cacheEingangturState = $(sensorEingangturEvent);
    cacheEingangturState.on(function (obj) {
        HandleChangedState(paramEvent, sensorObject.InitiatorId, obj, true);
    })
}

function SubscriberAttachBalkonDoor(paramEvent) {
    var sensorBalkonDoorObject = SensorOpenObjectRegister(paramEvent);

    sensorBalkonDoorObject.InitiatorId = sensorOpenObjectInstanceBalkonDoor;
    sensorBalkonDoorObject.StateId = SensorConverterStateIdDecoder(getState(sensorBalkonDoorEvent).val, sensorBalkonDoorObject.InitiatorId);
    SensorOpenObjectSaveToMemory(sensorBalkonDoorObject);

    var cacheBalkonDoorState = $(sensorBalkonDoorEvent);
    cacheBalkonDoorState.on(function (obj) {
        HandleChangedState(paramEvent, sensorBalkonDoorObject.InitiatorId, obj, false);
    })
}

SubscriberAttachEingangtur(sensorOpenObjectEingangturIrl);
SubscriberAttachBalkonDoor(sensorOpenObjectBalkonDoorIrl);
SubscriberAttachMailbox(sensorOpenObjectMailboxIrl);

