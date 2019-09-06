import { ISensorOpenObject } from '../';
import * as globalConsts from '../consts/GlobalConsts';

export abstract class SensorOpenObject implements ISensorOpenObject {
    /*
    * Private fields
    */
    private rootUri: string;
    private initiatorId: number;
    private stateId: number;
    private initiator: string;
    private state: string;
    private timestampDiff: number;
    private timestampPrevious: number;

    protected abstract get StateClosed();
    protected abstract get StateOpened();

    /*
    * Public properties
    */
    public get RootUri(): string {
        return this.rootUri;
    }

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
        this.rootUri = paramRootUri;

        this.initiatorId = globalConsts.numUndefined;
        this.stateId = globalConsts.numUndefined;
        this.initiator = globalConsts.stringEmpty;
        this.state = globalConsts.stringEmpty;
        this.timestampDiff = globalConsts.numZero;
        this.timestampPrevious = globalConsts.numZero;
    }

    public Initialize() {
      //
    }

    public Register(paramIrl: string) {
      //
    }
}