function MonitorGarland() {

    schedule(
        {
            hour: 6,
            minute: 0
        },
        function () {
            setState(switchAussenraumEvent, true);
        }
    );

    schedule(
        {
            hour: 22,
            minute: 0
        },
        function () {
            setState(switchAussenraumEvent, false);
        }
    );

    schedule(
        {
            astro: "sunrise"
        },
        function () {
            setState(switchAussenraumEvent, false);
        }
    );

    schedule(
        {
            astro: "sunset"
        },
        function () {
            setState(switchAussenraumEvent, true);
        }
    );

}

MonitorGarland();

