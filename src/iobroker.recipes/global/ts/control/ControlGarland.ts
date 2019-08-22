var defaultColorValue = 0.00;
var maxColorValue = 1.00;
var colorIncrement = 0.02;

var colorBlue = defaultColorValue;
var colorGreen = defaultColorValue;
var colorRed = defaultColorValue;

function SetColorState(paramColorId, paramColorValue) {
    log(lightBaumGarlandIrl + paramColorId);
    setState(lightBaumGarlandIrl + paramColorId, paramColorValue);
}

function ProcessOneStep() {
    log("b:" + colorBlue + " g: " + colorGreen + " r: " + colorRed);

    SetColorState("b", colorBlue);
    SetColorState("g", colorGreen);
    SetColorState("r", colorRed);

    if (colorRed >= maxColorValue) {
        if (colorBlue >= maxColorValue) {
            if (colorGreen >= maxColorValue) {
                colorBlue = defaultColorValue;
                colorRed = defaultColorValue;
                colorGreen = defaultColorValue;
            } else {
                colorGreen = colorGreen + colorIncrement;
            }
        } else {
            colorBlue = colorBlue + colorIncrement;
        }
    } else {
        colorRed = colorRed + colorIncrement;
    }
}

function GarlandChangeColor() {
    setInterval(ProcessOneStep, 2000);
}

GarlandChangeColor();