// Declarations
// Sensor abstracts
function SendNotification(paramIrl) {
    NotificationEmailObjectSend(paramIrl);
}
function HandleChangedState(paramIrl, paramState, paramTimeStamp, paramLatestChange) {
    SensorOpenObjectSetStateId(null, paramIrl, paramState, paramTimeStamp, paramLatestChange);
    return paramIrl;
}
// ***** State subscription processing: Start ***** //
SensorOpenObjectRegister(sensorOpenObjectEingangturIrl, 0, SensorOpenAeonObjectConvertState(getState(sensorEingangturEvent).val));
var cacheState = $(sensorEingangturEvent);
cacheState.on(function (obj) {
    var currentState = SensorOpenAeonObjectConvertState(obj.newState.val);
    HandleChangedState(sensorOpenObjectEingangturIrl, currentState, obj.newState.ts, obj.oldState.ts);
    if (currentState == SensorClosed) {
        SendNotification(sensorOpenObjectEingangturIrl);
    }
});
// ***** State subscription processing: End ***** //
//# sourceMappingURL=ControlEingangtur.js.map