// Constants
var numUndefined = -1;
var stringEmpty = "";

/* ***** Open sensor: Start ***** */
function SensorOpenObject() {
    this.SourceId = numUndefined;
    this.Source = stringEmpty;
    this.StateId = numUndefined;
    this.State = stringEmpty;
    this.TimestampDiff = numUndefined;
    this.TimestampPrevious = numUndefined;
}

function SensorOpenObjectSetStateId(paramObject, paramState, paramEventTimestamp) {
    if (paramObject.StateId != paramState) {
        paramObject.StateId = paramState;
        paramObject.TimestampDiff = paramEventTimestamp - paramObject.TimestampPrevious;
        paramObject.TimestampPrevious = paramEventTimestamp;
    }
}

function SensorOpenObjectSourceToString(paramObject) {
    var result = stringEmpty;
    switch (paramObject.SourceId) {
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
    paramObject.Source = SensorOpenObjectSourceToString(paramObject);
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
