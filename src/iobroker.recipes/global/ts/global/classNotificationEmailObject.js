// Constants strings
var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";
// ***** EMail stream emulation: Start ***** //
function NotificationEmailObjectComposeSubject(paramObject) {
    return emailKey + " " + paramObject.InitiatorId + "@" + paramObject.StateId;
}
function NotificationEmailObjectSend(paramIrl) {
    var sensorOpenObject = new SensorOpenObject();
    SensorOpenObjectInitialize(sensorOpenObject, paramIrl);
    log("NEOS@sensorOpenObject.InitiatorId BL: " + sensorOpenObject.InitiatorId);
    log("NEOS@sensorOpenObject.Initiator BL: " + sensorOpenObject.Initiator);
    log("NEOS@sensorOpenObject.StateId BL: " + sensorOpenObject.StateId);
    log("NEOS@sensorOpenObject.State BL: " + sensorOpenObject.State);
    log("NEOS@sensorOpenObject.sensorOpenObject.TimestampDiff BL:" + sensorOpenObject.StateId);
    log("NEOS@sensorOpenObject.TimestampPrevious BL:" + sensorOpenObject.TimestampPrevious);
    SensorOpenObjectLoad(sensorOpenObject);
    // SensorOpenObjectStatusToString(sensorOpenObject);
    log("NEOS@sensorOpenObject.InitiatorId: " + sensorOpenObject.InitiatorId);
    log("NEOS@sensorOpenObject.Initiator: " + sensorOpenObject.Initiator);
    log("NEOS@sensorOpenObject.StateId: " + sensorOpenObject.StateId);
    log("NEOS@sensorOpenObject.State: " + sensorOpenObject.State);
    log("NEOS@sensorOpenObject.sensorOpenObject.TimestampDiff: " + sensorOpenObject.StateId);
    log("NEOS@sensorOpenObject.TimestampPrevious: " + sensorOpenObject.TimestampPrevious);
    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: NotificationEmailObjectComposeSubject(sensorOpenObject),
        text: NotificationObjectComposeBody(sensorOpenObject, SensorOpenObjectTimeStampDiffSeconds(sensorOpenObject))
    });
}
// ***** EMail stream emulation: End ***** //
//# sourceMappingURL=classNotificationEmailObject.js.map