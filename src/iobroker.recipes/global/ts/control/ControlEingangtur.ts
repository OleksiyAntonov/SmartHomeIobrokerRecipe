// Declarations

// Constants strings
var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";
var valueUndefined = "Undefined";
var sensorEingangturEvent = "zwave.0.NODE4.event";

// Constants
var numUndefined = -1;
var stringEmpty = "";

// Sensor abstracts
var sensorSmarthomeEingangTurOpen = "smarthome.eingangTur.Open";

// ***** EMail stream emulation: Start ***** //
function ComposeSubject(paramObject) {
    return emailKey + " " + paramObject.Source + "@" + paramObject.State;
}

function ComposeBody(paramObject) {
    return paramObject.Source + " ist " + paramObject.State + ": " + Now() + " opened for " + SensorOpenObjectTimeStampDiffSeconds(paramObject) + " seconds";
}

function SendNotificationEMail(paramObject) {
    SensorOpenObjectStatusToString(paramObject);
    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: ComposeSubject(paramObject),
        text: ComposeBody(paramObject)
    });
}
// ***** EMail stream emulation: End ***** //

function Now() {
    var currentDate = new Date(Date.now());
    return currentDate.toString();
}

function SendNotification(obj) {
    SendNotificationEMail(obj);
}

function HandleChangedState(paramState, paramTimeStamp) {
    var notificationObject = getState(sensorSmarthomeEingangTurOpen);
    SensorOpenObjectSetStateId(notificationObject, paramState, paramTimeStamp);
    return notificationObject;
}

// ***** State subscription processing: Start ***** //
var sensorOpenObject = new SensorOpenObject();
sensorOpenObject.SourceId = 0;
createState(sensorSmarthomeEingangTurOpen, sensorOpenObject);

var cacheState = $(sensorEingangturEvent);
cacheState.on(function (obj) {
    switch (obj.newState.val) {
        case "0":
            SendNotification(HandleChangedState(0, obj.newState.ts));
            break;
        case "255":
            HandleChangedState(1, obj.newState.ts);
            break;
        default:
        // do nothing
    }
})
// ***** State subscription processing: End ***** //
