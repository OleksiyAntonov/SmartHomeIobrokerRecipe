var telegramTarget = "telegram.0";
var telegramChatId = "-252122036";

function NotificationTelegramObjectSend(paramObject) {
    sendTo(telegramTarget, {
        text: NotificationObjectComposeBody(paramObject, SensorOpenObjectTimeStampDiffToString(paramObject)),
        chatId: telegramChatId
    });
}
// ***** Telegram stream emulation: End ***** //
