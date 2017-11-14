var telegramTarget = "telegram.0";
var telegramChatId = "AntonovMering";

function NotificationTelegramObjectSend(paramObject) {
    sendTo(telegramTarget, {
        text: NotificationObjectComposeBody(paramObject, SensorOpenObjectTimeStampDiffSeconds(paramObject)),
        chatId: telegramChatId
    });
}
// ***** Telegram stream emulation: End ***** //
