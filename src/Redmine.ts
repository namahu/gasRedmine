import * as rm from "./types";
import Request_ from "./Request";


export const getRedmine = (APIKey: string, baseURL: string, basicAuthInfo: rm.BasicAuthInfo | null): Redmine_ => {
    return new Redmine_(APIKey, baseURL, basicAuthInfo);
}

class Redmine_ {

    private APIKey: string;
    private baseURL: string;
    private basicAuthInfo: rm.BasicAuthInfo | null;

    constructor(APIKey: string, baseURL: string, basicAuthInfo: rm.BasicAuthInfo | null) {
        this.APIKey = APIKey;
        this.baseURL = baseURL;
        this.basicAuthInfo = basicAuthInfo || null;
    }

    getIssues(path: string, params?: Params) {
        let query: string = '';
        if(params) {
            query = `?${createQuery_(params)}`;
        }
        const reqPath: string = `${this.baseURL}/${path}${query}`;
        console.log(reqPath);
        const req: Request_ = new Request_(this.APIKey, this.basicAuthInfo);
        return req.get_(reqPath);
    }
};
