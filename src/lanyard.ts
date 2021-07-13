import * as https from "https";
import axios from "axios";
import { LanyardResponse, RestOptions } from "./interfaces";

export async function get(userId: string, options?: RestOptions): Promise<LanyardResponse | undefined> {
    try {
        let result = await getString(userId, options);
        if(result === undefined) throw new Error("Something went wrong...");
        return JSON.parse(result);
    } catch (error) {
        throw error;
    }
}

export async function getString(userId: string, options?: RestOptions): Promise<string | undefined> {
    let opts: RestOptions = {
        protocol: "https",
        url: "api.lanyard.rest",
        ...options
    };

    try {
        const result = await axios.get(`${opts.protocol}://${opts.url}/v1/users/${userId}`);
        return JSON.stringify(result.data?.data);
    } catch (error) {
        if(error.response?.data && !error.response.data.success) {
            throw new Error(error.response.data.error.message);
        }
    }

    throw new Error("Something went wrong...");
}