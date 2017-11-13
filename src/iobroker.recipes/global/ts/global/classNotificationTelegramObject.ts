function NotificationTelegramObjectSend(paramObject) {
    sendTo(emailTarget, {
        from: emailAddressFrom,
        to: emailAddressTo,
        subject: NotificationEmailObjectComposeSubject(paramObject),
        text: NotificationObjectComposeBody(paramObject, SensorOpenObjectTimeStampDiffSeconds(paramObject))
    });
}
// ***** Telegram stream emulation: End ***** //
