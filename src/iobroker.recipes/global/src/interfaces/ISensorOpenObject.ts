export interface ISensorOpenObject {
    RootUri: string;
    Initialize();
    Register(paramIrl: string);
}