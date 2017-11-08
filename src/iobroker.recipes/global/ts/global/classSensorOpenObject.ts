// Constants
var numUndefined = -1;
var stringEmpty = "";

/* ***** Open sensor: Start ***** */
function SensorOpenObject() {
    this.InitiatorId = numUndefined;
    this.StateId = numUndefined;
    this.Initiator = stringEmpty;
    this.State = stringEmpty;
    this.TimestampDiff = numUndefined;
    this.TimestampPrevious = numUndefined;
}

function SensorOpenObjectInitialize(paramObject, paramRootUri) {
    paramObject.IrlInitiatorId = paramRootUri + objectInitiatorId;
    paramObject.IrlInitiator = paramRootUri + objectInitiator;
    paramObject.IrlStateId = paramRootUri + objectStateId;
    paramObject.IrlState = paramRootUri + objectState;
    paramObject.IrlTsDiff = paramRootUri + objectTimestampDiff;
    paramObject.IrlTsPrevious = paramRootUri + objectTimestampPrevious;
}

function SensorOpenObjectLoad(paramObject) {
    paramObject.InitiatorId = SensorOpenObjectGetInitiatorId(paramObject);
    paramObject.Initiator = SensorOpenObjectGetInitiator(paramObject);
    paramObject.StateId = SensorOpenObjectGetStateId(paramObject);
    paramObject.State = SensorOpenObjectGetState(paramObject);
    paramObject.TimestampDiff = SensorOpenObjectGetTimestampDiff(paramObject);
    paramObject.TimestampPrevious = SensorOpenObjectGetTimestampPrevious(paramObject);
}

function SensorOpenObjectRegister(paramIrl, paramInitiatorId) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);

    createState(sensorOpenObject.IrlInitiatorId, paramInitiatorId);
    createState(sensorOpenObject.IrlInitiator, stringEmpty);
    createState(sensorOpenObject.IrlStateId, numUndefined);
    createState(sensorOpenObject.IrlState, stringEmpty);
    createState(sensorOpenObject.IrlTsDiff, numUndefined);
    createState(sensorOpenObject.IrlTsPrevious, numUndefined);
}

function SensorOpenObjectGetInitiatorId(paramObject) {
    return getState(paramObject.IrlInitiatorId).val;
}

function SensorOpenObjectGetInitiator(paramObject) {
    return getState(paramObject.IrlInitiator).val;
}

function SensorOpenObjectGetStateId(paramObject) {
    return getState(paramObject.IrlStateId).val;
}

function SensorOpenObjectGetState(paramObject) {
    return getState(paramObject.IrlState).val;
}

function SensorOpenObjectGetTimestampDiff(paramObject) {
    return getState(paramObject.IrlTsDiff).val;
}

function SensorOpenObjectGetTimestampPrevious(paramObject) {
    return getState(paramObject.IrlTsPrevious).val;
}

function SensorOpenObjectSetInitiatorId(paramIrl, paramInitiatorId) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);

    var currentInitiatorId = SensorOpenObjectGetInitiatorId(sensorOpenObject);
    if (currentInitiatorId != paramInitiatorId) {
        setState(sensorOpenObject.IrlInitiatorId, paramInitiatorId);
        setState(sensorOpenObject.IrlInitiator, SensorOpenObjectInitiatorToString(sensorOpenObject));
    }
}

function SensorOpenObjectSetStateId(paramIrl, paramStateId, paramEventTimestamp) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);

    var currentStateId = SensorOpenObjectGetStateId(sensorOpenObject);
    if (currentStateId != paramStateId) {
        setState(sensorOpenObject.IrlStateId, paramStateId);
        setState(sensorOpenObject.IrlState, SensorOpenObjectStateToString(sensorOpenObject));
        setState(sensorOpenObject.IrlTsDiff, paramEventTimestamp - SensorOpenObjectGetTimestampPrevious(sensorOpenObject));
        setState(sensorOpenObject.IrlTsPrevious, paramEventTimestamp);
    }
}

function SensorOpenObjectInitiatorToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.InitiatorId) {
        case "0":
            result = "Eingangtur";
            break;
        default:
        // Do nothing
    }
    log("Initiator: " + result);
    return result;
}

function SensorOpenObjectStateToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.StateId) {
        case 0:
            result = "Offnen";
            break;
        case 1:
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
    // return (this.TimestampPrevious != numUndefined) && (this.TimestampPrevious != numUndefined);
    return true;
}

function SensorOpenObjectTimeStampDiffs(paramObject) {
    var result = numUndefined;
    if (SensorOpenObjectTimeStampIsCorrect(paramObject)) {
        //        result = paramObject.TimeStampPrevious - paramObject.TimeStampCurrent;
    }
    return result;
}

function SensorOpenObjectTimeStampDiffSeconds(paramObject) {
    //  var result = SensorOpenObjectTimeStampDiffs(paramObject);
    var result = paramObject.TimestampDiff;
    if (result != numUndefined) {
        result = Math.round(result / 1000);
    }
    return result;
}
/* ***** Open sensor: End ***** */
