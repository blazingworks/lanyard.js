import { RestOptions, LanyardResponse } from "../interfaces";
import get from "../functions/get";
import getString from "../functions/getString";
class Lanyard {
    private _options: RestOptions;
    
    constructor(options: RestOptions) {
        this._options = options;
    }

    public getOptions(): RestOptions {
        return this._options;
    }

    public setOptions(options: RestOptions): void {
        this._options = options;
    }

    public getString(userId: string): Promise<string | undefined> {
        return getString(userId, this._options);
    }

    public get(userId: string): Promise<LanyardResponse | undefined> {
        return get(userId, this._options);
    }
}

export default Lanyard;