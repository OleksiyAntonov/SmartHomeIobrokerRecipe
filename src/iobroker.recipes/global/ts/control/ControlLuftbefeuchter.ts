var sensorHumidityEvent = "zwave.0.NODE4.event";

// ***** State subscription processing: Start ***** //
var cacheState = $(sensorHumidityEvent);

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
// ***** State subscription processing: End ***** //
