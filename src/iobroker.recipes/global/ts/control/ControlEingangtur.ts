// Declarations
var valueUndefined = "Undefined";


// Constants
var numUndefined = -1;
var stringEmpty = "";

// Sensor abstracts
function SendNotification(paramIrl) {
    NotificationEmailObjectSend(paramIrl);
}

function HandleChangedState(paramIrl, paramState, paramTimeStamp) {
    SensorOpenObjectSetStateId(paramIrl, paramState, paramTimeStamp);
    return paramIrl;
}

// ***** State subscription processing: Start ***** //
SensorOpenObjectRegister(sensorOpenObjectEingangturIrl, 0);

var cacheState = $(sensorEingangturEvent);
cacheState.on(function (obj) {
    switch (obj.newState.val) {
        case "0":
            SendNotification(HandleChangedState(sensorOpenObjectEingangturIrl, 0, obj.newState.ts));
            break;
        case "255":
            HandleChangedState(sensorOpenObjectEingangturIrl, 1, obj.newState.ts);
            break;
        default:
        // do nothing
    }
})
// ***** State subscription processing: End ***** //
