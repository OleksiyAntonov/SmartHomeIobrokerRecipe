import {
    ISensorOpenObject
} from "./..";

export abstract class SensorOpenObject implements ISensorOpenObject {
    /*
    * Private fields
    */
    private initiatorId: number;
    private stateId: number;
    private initiator: string;
    private state: string;
    private timestampDiff: number;
    private timestampPrevious: number;

    protected abstract get StateClosed(): string;
    protected abstract get StateOpened(): string;

    /*
    * Public properties
    */
    public get InitiatorId(): number {
        return this.initiatorId;
    }
    public get StateId(): number {
        return this.stateId;
    }
    public get Initiator(): string {
        return this.initiator;
    }
    public get State(): string {
        return this.state;
    }
    public get TimestampDiff(): number {
        return this.timestampDiff;
    }
    public get TimestampPrevious(): number {
        return this.timestampPrevious;
    }

    constructor(paramRootUri: string) {
        this.initiatorId = numUndefined;
        this.stateId = numUndefined;
        this.initiator = stringEmpty;
        this.state = stringEmpty;
        this.timestampDiff = numZero;
        this.timestampPrevious = numZero;
    }

    public Initialize() {
    
    }

    public Register(paramIrl: string) {
        
    }
}