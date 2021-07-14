import { RestOptions } from '../interfaces';
import axios from 'axios';

export default async function(userId: string, options?: RestOptions): Promise<string | undefined> {
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