import { LanyardResponse, RestOptions } from "../interfaces";
import getString from "./getString";
export default async function(userId: string, options?: RestOptions): Promise<LanyardResponse | undefined> {
    try {
        let result = await getString(userId, options);
        if(result === undefined) throw new Error("Something went wrong...");
        return JSON.parse(result);
    } catch (error) {
        throw error;
    }
}