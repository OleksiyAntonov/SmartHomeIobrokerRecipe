// Constants

// Statuses
var SensorOpened = "0";
var SensorClosed = "1";

/* ***** Open sensor: Start ***** */
function SensorOpenObject() {
    this.InitiatorId = numUndefined;
    this.StateId = numUndefined;
    this.Initiator = stringEmpty;
    this.State = stringEmpty;
    this.TimestampDiff = numZero;
    this.TimestampPrevious = numZero;
}

function SensorOpenObjectInitialize(paramObject, paramRootUri) {
    paramObject.IrlInitiatorId = paramRootUri + objectInitiatorId;
    paramObject.IrlInitiator = paramRootUri + objectInitiator;
    paramObject.IrlStateId = paramRootUri + objectStateId;
    paramObject.IrlState = paramRootUri + objectState;
    paramObject.IrlTimestamp = paramRootUri + objectTimestamp;
    paramObject.IrlLatestChange = paramRootUri + objectLatestChange;
}

function SensorOpenObjectLoad(paramObject) {
    paramObject.InitiatorId = SensorOpenObjectGetInitiatorId(paramObject);
    paramObject.Initiator = SensorOpenObjectGetInitiator(paramObject);
    paramObject.StateId = SensorOpenObjectGetStateId(paramObject);
    paramObject.State = SensorOpenObjectGetState(paramObject);
    paramObject.Timestamp = SensorOpenObjectGetTimestamp(paramObject);
    paramObject.LatestChange = SensorOpenObjectGetLatestChange(paramObject);
}

function SensorOpenObjectRegister(paramIrl, paramInitiatorId, paramStateId) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);

    createState(sensorOpenObject.IrlInitiatorId, paramInitiatorId);
    createState(sensorOpenObject.IrlInitiator, stringEmpty);
    createState(sensorOpenObject.IrlStateId, numUndefined);
    createState(sensorOpenObject.IrlState, stringEmpty);
    createState(sensorOpenObject.IrlTimestamp, numZero);
    createState(sensorOpenObject.IrlLatestChange, numZero);

    SensorOpenObjectSetInitiatorId(sensorOpenObject, "", paramInitiatorId);
    SensorOpenObjectSetStateId(sensorOpenObject, "", paramStateId, sensorOpenObject.Timestamp, sensorOpenObject.LatestChange);
}

function SensorOpenObjectGetInitiatorId(paramObject) {
    paramObject.InitiatorId = getState(paramObject.IrlInitiatorId).val;
    return paramObject.InitiatorId;
}

function SensorOpenObjectGetInitiator(paramObject) {
    paramObject.Initiator = getState(paramObject.IrlInitiator).val;
    return paramObject.Initiator;
}

function SensorOpenObjectGetStateId(paramObject) {
    paramObject.StateId = getState(paramObject.IrlStateId).val;
    return paramObject.StateId;
}

function SensorOpenObjectGetState(paramObject) {
    paramObject.State = getState(paramObject.IrlState).val;
    return paramObject.State;
}

function SensorOpenObjectGetTimestamp(paramObject) {
    paramObject.Timestamp = getState(paramObject.IrlTimestamp).val;
    return paramObject.Timestamp;
}

function SensorOpenObjectGetLatestChange(paramObject) {
    paramObject.LatestChange = getState(paramObject.IrlLatestChange).val;
    return paramObject.LatestChange;
}

function SensorOpenObjectSetInitiatorId(paramObject, paramIrl, paramInitiatorId) {
    var isObject = UtilsIsObject(paramObject);
    if (!isObject) {
        paramObject = new SensorOpenObject();
        SensorOpenObjectInitialize(paramObject, paramIrl);
        SensorOpenObjectGetInitiatorId(paramObject);
    }

    if (isObject || (paramObject.InitiatorId != paramInitiatorId)) {
        paramObject.InitiatorId = paramInitiatorId;
        setState(paramObject.IrlInitiatorId, paramInitiatorId);
        setState(paramObject.IrlInitiator, SensorOpenObjectInitiatorToString(paramObject));
    }
}

function SensorOpenObjectSetStateId(paramObject, paramIrl, paramStateId, paramEventTimestamp, paramLatestChange) {
    var isObject = UtilsIsObject(paramObject);
    if (!isObject) {
        paramObject = new SensorOpenObject();
        SensorOpenObjectInitialize(paramObject, paramIrl);
        SensorOpenObjectGetStateId(paramObject);
    }

    if (isObject || (paramObject.StateId != paramStateId)) {
        paramObject.StateId = paramStateId;
        setState(paramObject.IrlStateId, paramObject.StateId);
        setState(paramObject.IrlState, SensorOpenObjectStateToString(paramObject));
        setState(paramObject.IrlTimestamp, paramEventTimestamp);
        setState(paramObject.IrlLatestChange, paramLatestChange);
    }
}

function SensorOpenObjectInitiatorToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.InitiatorId) {
        case 0:
            result = "Eingangtur";
            break;
        default:
        // Do nothing
    }
    return result;
}

function SensorOpenObjectStateToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.StateId) {
        case SensorOpened:
            result = "Offnen";
            break;
        case SensorClosed:
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
/* ***** Open sensor: End ***** */
