/* ***** Socket: Start ***** */
function SocketObject() {
    this.InitiatorId = numUndefined;
    this.StateId = numUndefined;
    this.Initiator = stringEmpty;
    this.State = stringEmpty;
    this.TimestampDiff = numZero;
    this.TimestampPrevious = numZero;
}

function SocketObjectInitialize(paramObject, paramRootUri) {
    paramObject.IrlInitiatorId = paramRootUri + objectInitiatorId;
    paramObject.IrlInitiator = paramRootUri + objectInitiator;
    paramObject.IrlStateId = paramRootUri + objectStateId;
    paramObject.IrlState = paramRootUri + objectState;
    paramObject.IrlTimestamp = paramRootUri + objectTimestamp;
    paramObject.IrlLatestChange = paramRootUri + objectLatestChange;
}

function SocketObjectLoadFromMemory(paramObject) {
    paramObject.InitiatorId = SensorOpenObjectGetFromMemoryInitiatorId(paramObject);
    paramObject.Initiator = SensorOpenObjectGetFromMemoryInitiator(paramObject);
    paramObject.StateId = SensorOpenObjectGetFromMemoryStateId(paramObject);
    paramObject.State = SensorOpenObjectGetFromMemoryState(paramObject);
    paramObject.Timestamp = SensorOpenObjectGetFromMemoryTimestamp(paramObject);
    paramObject.LatestChange = SensorOpenObjectGetFromMemoryLatestChange(paramObject);
}

function SensorOpenObjectSaveToMemory(paramObject) {
    SensorOpenObjectSetToMemoryInitiatorId(paramObject);
    SensorOpenObjectSetToMemoryStateId(paramObject); 
}

function SensorOpenObjectRegister(paramIrl) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);

    createState(sensorOpenObject.IrlInitiatorId, numUndefined);
    createState(sensorOpenObject.IrlInitiator, stringEmpty);
    createState(sensorOpenObject.IrlStateId, numUndefined);
    createState(sensorOpenObject.IrlState, stringEmpty);
    createState(sensorOpenObject.IrlTimestamp, numZero);
    createState(sensorOpenObject.IrlLatestChange, numZero);

    return sensorOpenObject;
}

function SensorOpenObjectGetFromMemoryInitiatorId(paramObject) {
    paramObject.InitiatorId = getState(paramObject.IrlInitiatorId).val;
    return paramObject.InitiatorId;
}

function SensorOpenObjectGetFromMemoryInitiator(paramObject) {
    paramObject.Initiator = getState(paramObject.IrlInitiator).val;
    return paramObject.Initiator;
}

function SensorOpenObjectGetFromMemoryStateId(paramObject) {
    paramObject.StateId = getState(paramObject.IrlStateId).val;
    return paramObject.StateId;
}

function SensorOpenObjectGetFromMemoryState(paramObject) {
    paramObject.State = getState(paramObject.IrlState).val;
    return paramObject.State;
}

function SensorOpenObjectGetFromMemoryTimestamp(paramObject) {
    paramObject.Timestamp = getState(paramObject.IrlTimestamp).val;
    return paramObject.Timestamp;
}

function SensorOpenObjectGetFromMemoryLatestChange(paramObject) {
    paramObject.LatestChange = getState(paramObject.IrlLatestChange).val;
    return paramObject.LatestChange;
}

function SensorOpenObjectSetToMemoryInitiatorId(paramObject) {
    paramObject.Initiator = SensorOpenObjectInitiatorToString(paramObject);
    setState(paramObject.IrlInitiatorId, paramObject.InitiatorId);
    setState(paramObject.IrlInitiator, paramObject.IrlInitiator);
}

function SensorOpenObjectSetToMemoryStateId(paramObject) {
    paramObject.State = SensorOpenObjectStateToString(paramObject);
    setState(paramObject.IrlStateId, paramObject.StateId);
    setState(paramObject.IrlState, paramObject.State);
    setState(paramObject.IrlTimestamp, paramObject.Timestamp);
    setState(paramObject.IrlLatestChange, paramObject.LatestChange);
}

function SensorOpenObjectInitiatorToString(paramObject) {
    return SensorConverterInitiatorIdDecoder(paramObject.InitiatorId);
}

function SensorOpenObjectStateToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.StateId) {
        case sensorStatusOpened:
            result = "Offnen";
            break;
        case sensorStatusClosed:
            result = "Zu";
            break;
        default:
        // Do nothing
    }
    return result;
}

function SensorOpenObjectStatusToString(paramObject) {
    paramObject.Initiator = SensorOpenObjectInitiatorToString(paramObject);
    paramObject.State = SensorOpenObjectStateToString(paramObject);
}

function SensorOpenObjectTimeStampIsCorrect(paramObject) {
    return (paramObject.Timestamp != numUndefined) && (paramObject.LatestChange != numUndefined);
}

function SensorOpenObjectGetDiff(paramObject) {
    var result = numUndefined;
    if (SensorOpenObjectTimeStampIsCorrect(paramObject)) {
        result = paramObject.Timestamp - paramObject.LatestChange;
    }

    return result;
}

function SensorOpenObjectTimeStampDiffSeconds(paramObject) {
    var result = SensorOpenObjectGetDiff(paramObject);
    if (result != numUndefined) {
        result = Math.round(result / 1000);
    }
    return result;
}

/* ***** Socket: End ***** */