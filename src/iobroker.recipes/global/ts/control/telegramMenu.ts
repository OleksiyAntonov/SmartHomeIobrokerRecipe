createState("Test.Switch.command", false);  // Тестовый выключатель света

var button = [
    {
        name: 'Menü',
        button: [
            'Зал',
            'Кухня',
            '?',
            'Ванная',
            'Закрыть',
            'Menü'
        ]
    },
    {
        name: 'Зал',
        button: [
            'Люстра',
            'Зал. Кондиционер',
            'Зал. Сцены',
            '◀️ Назад',
            'Закрыть',
            'Menü'
        ]
    },
    {
        name: 'Зал. Сцены',
        button: [
            'Кино',
            'Весь свет',
            'Приглушенный свет',
            '◀️ Назад',
            'Закрыть',
            'Зал'
        ]
    },
    {
        name: 'Кухня',
        button: [
            'Кухня ?',
            'Вентиляция',
            '◀️ Назад',
            'Закрыть',
            'Menü'
        ]
    },
    {
        name: 'Кухня ?',
        button: [
            'Включить',
            'Выключить',
            '◀️ Назад',
            'Закрыть',
            'Кухня'
        ]
    },
    {
        name: '?',
        button: [
            '? Спальня. Свет',
            '? Кондиционер',
            '? Сцены',
            '◀️ Назад',
            'Закрыть',
            'Menü'
        ]
    },
    {
        name: '? Свет',
        button: [
            'Верхний',
            'Бра',
            '◀️ Назад',
            'Закрыть',
            '?'
        ]
    },
    {
        name: '? Сцены',
        button: [
            'Сцена 1',
            'Сцена 2',
            '◀️ Назад',
            'Закрыть',
            '?'
        ]
    },
    {
        name: 'Ванная',
        button: [
            'Ванная. Свет',
            'Бойлер',
            'Вытяжка',
            '◀️ Назад',
            'Закрыть',
            'Menü'
        ]
    },
];

var menuUp = 'Menü';
var first_tap = false;
var menu_current;
var topTextGlobal;
var command;
var user;

on({ id: "telegram.0.communicate.request", change: 'any' }, function (obj) {
    command = obj.state.val.substring(obj.state.val.indexOf(']') + 1);
    user = obj.state.val.substring(obj.state.val.indexOf('[') + 1, obj.state.val.indexOf(']'));
    //log(command);
    //log(user);
    //************************************
    // Menü
    //************************************    
    if (command === "/buttons" || command === "кнопки" || command === "Кнопки")
        sendTo('telegram.0', {
            user: user,
            text: 'Menü anzeigen',
            reply_markup: {
                keyboard: [['Menü anzeigen']],
                resize_keyboard: true,
                one_time_keyboard: false
            }
        });

    //************************************
    //  Menü inline
    //************************************
    var menu = {
        reply_markup: {
            // inline_keyboard: [[], [], [], [], [], [], []],
            keyboard: [[], [], [], [], [], [], []],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    };

    if (command === 'Menü anzeigen') command = menuUp;
    log(command);
    if (command === 'Menü') first_tap = true;
    if (command === '◀️ Назад') command = menuUp;
    var but1 = getButtonArray(button, 'name', command).toString();

    if (but1.length > 0) {          // проверяем, что строка не пустая
        var but2 = but1.split(','); //преобразуем в массив
        menuUp = but2.pop();        //вырезаем последний элемент

        if (but2.length > 0) {      // проверяем что массив не пуст
            var index = 0;
            for (var i = 0, len = but2.length; i < len; i++) {
                // menu.reply_markup.inline_keyboard[index].push(
                menu.reply_markup.keyboard[index].push(
                    {
                        text: but2[i],
                        callback_data: but2[i]
                    }
                );
                if ((i % 3 >= 2) && (index < 6)) {
                    index = ++index;
                }
            }

            var topText = funcTopText(command);
            topTextGlobal = command;
            menu_current = menu.reply_markup;
            if (first_tap) {
                sendTo(
                    'telegram.0',
                    {
                        user: user,
                        text: topText,
                        parse_mode: 'markdown',
                        reply_markup: menu.reply_markup
                    }
                );
                first_tap = false;
            } else {
                updateMenuButton(
                    user,
                    topText,
                    menu.reply_markup
                );

            }
        }
    }
    //************************************
    // Команды
    //************************************
    // ищем в тексте команды 
    switch (command) {
        case "Включить": //включить свет на кухне
            setState("javascript.0.Test.Switch.command"/*Test.Switch.command*/, true);
            waitConfirmCommand("javascript.0.Test.Switch.command", topTextGlobal, 2000, true);
            break;

        case "Выключить": //выключить свет на кухне
            setState("javascript.0.Test.Switch.command"/*Test.Switch.command*/, false);
            waitConfirmCommand("javascript.0.Test.Switch.command", topTextGlobal, 2000);
            break;

        case "Закрыть":
            sendTo('telegram.0', {
                user: user,
                deleteMessage: {
                    options: {
                        chat_id: getState("telegram.0.communicate.requestChatId").val,
                        message_id: getState("telegram.0.communicate.requestMessageId").val,
                    }
                }
            });
            break;
    }
});


function updateMenuButton(user, topText, menu) {
    sendTo('telegram.0', {
        user: user,
        text: topText,
        editMessageText: {
            options: {
                chat_id: getState("telegram.0.communicate.requestChatId").val,
                message_id: getState("telegram.0.communicate.requestMessageId").val,
                parse_mode: 'markdown',
                reply_markup: menu
            }
        }
    });
}

function waitConfirmCommand(obj, command, timeout, ack = false) {
    var mySubscription;

    var timeID = setTimeout(() => {
        unsubscribe(mySubscription);
        CommandDone('Не выполнено!');
    }, timeout);

    mySubscription = on({ id: obj, change: 'any' }, function (data) {
        // unsubscribe after first trigger
        if (ack === true)
            if (data.state.ack) ack = false;
        if (!ack) {
            updateMenuButton(user, funcTopText(command), menu_current);
            unsubscribe(mySubscription);
            clearTimeout(timeID);
            CommandDone('Выполнено!');
        }
    });
}

function CommandDone(text) {
    if (text === '') text = "Выполнено!";
    sendTo('telegram.0', {
        user: user,
        answerCallbackQuery: {
            text: text,
            showAlert: false
        }
    });
}

function getButtonArray(obj, keyName, Name) {
    var result = [];
    for (var attr in obj) {
        if (obj[attr] && typeof obj[attr] === 'object') {
            result = result.concat(getButtonArray(obj[attr], keyName, Name));
        }
        if (attr === keyName && obj[attr] === Name) {
            result.push(obj.button);
        }
    }
    return result;
}

function stateSelection(state) {
    if ((state.val === false) || (state.val === 'false')) return "ВЫКЛ. в " + formatDate(state.lc, "SS:mm:ss TT.MM");
    if ((state.val === true) || (state.val === 'true')) return "ВКЛ. в " + formatDate(state.lc, "SS:mm:ss TT.MM");
    return "неопределено";
}

function funcTopText(command) {
    var text = command;
    switch (command) {
        case 'Menü':
            text = "*Зал*: ?️ " + getState("mysensors.0.70.3_TEMP.V_TEMP").val + "°C, \n"
                + "?  ? 23.5 градуса \n";
            break;
        case 'Кухня':
            text = "? " + stateSelection(getState("javascript.0.Test.Switch.command")) + "\n";
            break;
        case 'Кухня ?':
            text = "? " + stateSelection(getState("javascript.0.Test.Switch.command")) + "\n";
            break;
    }
    return text;
}