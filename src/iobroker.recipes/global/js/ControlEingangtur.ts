var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";
var valueUndefined = "Undefined";

// ***** Notification object emulation: Start ***** //
function NotificationObject() {
    this.SourceId = -1;
    this.Source = "";
    this.StateId = -1;
    this.State = "";
}

function NotificationObjectSource(paramSource) {
    var output = new NotificationObject();
    output.SourceId = paramSource;
    return output;
}

function NotificationObjectDoDecodeSource(paramObject) {
    switch (paramObject.SourceId) {
        case "0":
            paramObject.Source = "Eingangtur";
            break;
        default:
            paramObject.Source = valueUndefined;
    }
}

function NotificationObjectDoDecodeState(paramObject) {
    switch (paramObject.StateId) {
        case 0:
            paramObject.State = "Offnen";
            break;
        case 1:
            paramObject.State = "Zu";
            break;
        default:
            paramObject.State = valueUndefined;
    }
}

function NotificationObjectDoDecodeToStatus(paramObject) {
    NotificationObjectDoDecodeSource(paramObject);
    NotificationObjectDoDecodeState(paramObject);
}
// ***** Notification object emulation: End ***** //

// ***** EMail stream emulation: Start ***** //
function ComposeSubject(paramObject) {
    return emailKey + " " + paramObject.Source + "@" + paramObject.State;
}

function ComposeBody(paramObject) {
    var currentDateString = new Date(Date.now()).toLocaleString();
    return paramObject.Source + " ist " + paramObject.State + ": " + currentDateString;
}

function SendNotificationEMail(obj) {
    NotificationObjectDoDecodeState(obj);
    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: ComposeSubject(obj),
        text: ComposeBody(obj)
    });
}
// ***** EMail stream emulation: End ***** //

function SendNotification(obj) {
    SendNotificationEMail(obj);
}

var cacheState = $('zwave.0.NODE4.event');

cacheState.on(function (obj) {
    var notificationObject = NotificationObjectSource(0);
    switch (obj.newState.val) {
        case "0":
            notificationObject.StateId = 0;
            SendNotification(notificationObject);
            break;
        case "255":
            notificationObject.StateId = 1;
            SendNotification(notificationObject);
            break;
        default:
        // do nothing
    }
})