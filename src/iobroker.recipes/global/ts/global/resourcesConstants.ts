// Iobroker resources prefixes
var ioBrokerDivider = ".";
var iobrokerEvent = "event";

/***** Iobroker resources: End *****/

/***** Iobroker.zwave resources: Start *****/

var iobrokerZwaveSensor_1 = "Sensor_1";
var iobrokerZwaveBasic = "Basic";
var iobrokerZwaveSensor_Binary = "SENSOR_BINARY";
var iobrokerZwaveSensor_BasicSection = "BASIC";
var iobrokerZwaveEvent = "event";

var iobrokerZwaveSwitch_1 = "Switch_1";
var iobrokerZwave_Switch_BinarySection = "SWITCH_BINARY";

// Iobroker resource location (IRL)
var sensorZwaveInstance = "zwave.0";
var devicesHueInstance = "hue.0";
var devicesHueNode = "AntonovMering";

// Aussenraum
var switchAussenraumNode = "NODE24";
var switchAussenraumIrl = sensorZwaveInstance + ioBrokerDivider + switchAussenraumNode + ioBrokerDivider;
var switchAussenraumEvent = switchAussenraumIrl + iobrokerZwave_Switch_BinarySection + ioBrokerDivider + iobrokerZwaveSwitch_1;

// Tannenbaum
var switchTannenbaumNode = "NODE15";
var switchTannenbaumIrl = sensorZwaveInstance + ioBrokerDivider + switchTannenbaumNode + ioBrokerDivider;
var switchTannenbaumEvent = switchTannenbaumIrl + iobrokerZwave_Switch_BinarySection + ioBrokerDivider + iobrokerZwaveSwitch_1;

// Eingangtur
var sensorEingangturNode = "NODE20";
var sensorEingangturIrl = sensorZwaveInstance + ioBrokerDivider + sensorEingangturNode + ioBrokerDivider;
var sensorEingangturEvent = sensorEingangturIrl + iobrokerZwaveSensor_BasicSection + ioBrokerDivider + iobrokerZwaveBasic;

// Balkon door
var sensorBalkonDoorNode = "NODE9";
var sensorBalkonDoorIrl = sensorZwaveInstance + ioBrokerDivider + sensorBalkonDoorNode + ioBrokerDivider;
var sensorBalkonDoorEvent = sensorBalkonDoorIrl + iobrokerZwaveSensor_Binary + ioBrokerDivider + iobrokerZwaveSensor_1;

// Mailbox
var sensorMailboxNode = "NODE11";
var sensorMailboxIrl = sensorZwaveInstance + ioBrokerDivider + sensorMailboxNode + ioBrokerDivider;
var sensorMailboxEvent = sensorMailboxIrl + iobrokerZwaveSensor_Binary + ioBrokerDivider + iobrokerZwaveSensor_1;

// Baum Garland
var lightBaumGarlandNode = "Weihnachtsbaum";
var lightBaumGarlandIrl = devicesHueInstance + ioBrokerDivider + devicesHueNode + ioBrokerDivider + lightBaumGarlandNode + ioBrokerDivider;

// Internal intercommunication objects properties
var objectName = "name";
var objectInitiatorId = "initiatorid";
var objectInitiator = "initiator";
var objectStateId = "stateid";
var objectState = "state";
var objectTimestamp = "ts";
var objectLatestChange = "lc";

// Internal intercommunication objects inside homeBrain adapter
var sensorOpenObjectInstance = "homebrain.0";

var sensorOpenObjectLocationEingangtur = "eingangtur";
var sensorOpenObjectLocationBalkonDoor = "balkondoor";
var sensorOpenObjectLocationMailbox = "mailbox";
var switchObjectLocationZwiftTv = "zwifttv";

var sensorOpenObjectName = "sensoropen"
var switchObjectName = "switchbinary"

// Statuses
var sensorStatusOpened = "0";
var sensorStatusClosed = "1";

var sensorOpenObjectInstanceEingangtur = 0;
var sensorOpenObjectInstanceBalkonDoor = 1;
var sensorOpenObjectInstanceMailbox = 2;

var sensorOpenObjectInstanceEingangturName = "Eingangtur";
var sensorOpenObjectInstanceBalkonDoorName = "Balkon-Door";
var sensorOpenObjectInstanceMailboxName = "Mailbox";

// Intercommunication objects instances
var sensorOpenObjectEingangturIrl = sensorOpenObjectInstance + ioBrokerDivider + sensorOpenObjectLocationEingangtur + ioBrokerDivider + sensorOpenObjectName + ioBrokerDivider;
var sensorOpenObjectBalkonDoorIrl = sensorOpenObjectInstance + ioBrokerDivider + sensorOpenObjectLocationBalkonDoor + ioBrokerDivider + sensorOpenObjectName + ioBrokerDivider;
var sensorOpenObjectMailboxIrl = sensorOpenObjectInstance + ioBrokerDivider + sensorOpenObjectLocationMailbox + ioBrokerDivider + sensorOpenObjectName + ioBrokerDivider;

var switchZwiftTvIrl = sensorOpenObjectInstance + ioBrokerDivider + switchObjectLocationZwiftTv + ioBrokerDivider + switchObjectName + ioBrokerDivider;
