// Constants strings
var emailTarget = "email";
var emailAddressFrom = "antonovmering@live.com";
var emailAddressTo = "oleksiy.antonov@live.com";
var emailKey = "[SH@OAA]";
// ***** EMail stream emulation: Start ***** //
function ComposeSubject(paramObject) {
    return emailKey + " " + paramObject.Source + "@" + paramObject.State;
}
function ComposeBody(paramObject) {
    return paramObject.Source + " ist " + paramObject.State + ": " + Now() + " opened for " + SensorOpenObjectTimeStampDiffSeconds(paramObject) + " seconds";
}
// ***** EMail stream emulation: End ***** //
//# sourceMappingURL=classNotificationEmailObject.js.map