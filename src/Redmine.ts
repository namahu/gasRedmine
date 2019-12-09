interface BasicAuthInfo {
    userName: string;
    pass: string;
};

const getRedmine = (APIKey: string, baseURL: string, basicAuthInfo: BasicAuthInfo | null): Redmine_ => {
    return new Redmine_(APIKey, baseURL, basicAuthInfo);
}

class Redmine_ {

    private APIKey: string;
    private baseURL: string;
    private basicAuthInfo: BasicAuthInfo | null;

    constructor(APIKey: string, baseURL: string, basicAuthInfo: BasicAuthInfo | null) {
        this.APIKey = APIKey;
        this.baseURL = baseURL;
        this.basicAuthInfo = basicAuthInfo || null;
    }

    getIssues(path: string, params: any = '') {
        let query: string = '';
        if(params) {
            query = `?${params}`;
        }
        const reqPath: string = `${this.baseURL}${path}${query}`;
        console.log(reqPath);
        const req: Request_ = new Request_(this.APIKey, this.basicAuthInfo);
        return req.get_(reqPath);
    }

    
};
