export class sceneZwift {
    private Delay(ms: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(resolve, ms);
        })
    }

    public async Run() {
        // setState("harmony.0.Harmony_Hub.Ole-AppleTV.Menu", 1);
        await this.Delay(3000);
        console.log("After sleep:  " + new Date().toString());
    }
}

let sceneZwiftInstance: sceneZwift = new sceneZwift();
sceneZwiftInstance.Run();