// Constants strings
var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";

// ***** EMail stream emulation: Start ***** //
function NotificationEmailObjectComposeSubject(paramObject) {
    return emailKey + " " + paramObject.Initiator + "@" + paramObject.State;
}

function NotificationEmailObjectSend(paramObject) {
    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: NotificationEmailObjectComposeSubject(paramObject),
        text: NotificationObjectComposeBody(paramObject, SensorOpenObjectTimeStampDiffSeconds(paramObject))
    });
}
// ***** EMail stream emulation: End ***** //
