function NotificationObjectComposeBody(paramObject, paramTimeStampDiff) {
    return paramObject.Initiator + " ist " + paramObject.State + ": " + DateTimeUtilsNow() + " opened for " + paramTimeStampDiff + " seconds";
}

