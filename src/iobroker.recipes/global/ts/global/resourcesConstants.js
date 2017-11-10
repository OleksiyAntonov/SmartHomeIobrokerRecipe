/***** Iobroker resources: Start *****/
// Iobroker resources prefixes
var iobrokerEvent = "event";
/***** Iobroker resources: End *****/
/***** Iobroker.zwave resources: Start *****/
// Iobroker resource location (IRL)
var sensorZwaveInstance = "zwave.0";
var sensorEingangturNode = "NODE4";
var sensorEingangturIrl = sensorZwaveInstance + "." + sensorEingangturNode + ".";
var sensorEingangturEvent = sensorEingangturIrl + iobrokerEvent;
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
var sensorOpenObjectLocation = "eingangtur";
var sensorOpenObjectName = "open";
// Intercommunication objects instances
// Eingangtur open/close sensor
var sensorOpenObjectEingangturIrl = sensorOpenObjectInstance + "." + sensorOpenObjectLocation + "." + sensorOpenObjectName + ".";
/***** Iobroker.zwave resources: End *****/
//# sourceMappingURL=resourcesConstants.js.map