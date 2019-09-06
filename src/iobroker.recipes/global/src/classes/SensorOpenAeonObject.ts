// Model: Door/ Window Sensor 6 (ZW112-C)
// https://products.z-wavealliance.org/products/1615/configs

// AEON

import { SensorOpenObject } from './SensorOpenObject';

export class SensorOpenAeonObject extends SensorOpenObject {
    protected get StateClosed() {
        return 0;
    }
    protected get StateOpened() {
        return 255;
    }
}