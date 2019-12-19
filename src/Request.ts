import * as rm from "./types/";

export default class Request_ {

    private options: rm.RequeestOptions;
    private basicAuthInfo: rm.BasicAuthInfo | null;

    constructor(APIKey: string, basicAuthInfo: rm.BasicAuthInfo | null) {

        this.basicAuthInfo = basicAuthInfo;
        this.options = {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': '',
                'X-Redmine-API-Key': APIKey
            },
            'muteHttpExceptions': true
        }

        if (this.basicAuthInfo) {
            const userName: string = this.basicAuthInfo.userName;
            const pass: string = this.basicAuthInfo.pass;
            const encodedUserNameAndPass: string = Utilities.base64Encode(`${userName}:${pass}`);

            this.options.headers.Authorization = `Basic ${encodedUserNameAndPass}}`
        }

    };

    fetch_(path: string, options: rm.RequeestOptions) {
        const res: GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(path, options);
        console.log(res);
        const resJson: any = JSON.parse(res.getContentText());
        if (resJson.error) {
            const errCode: string = resJson.error.code;
            const errMsg: string = resJson.error.message
            throw new Error(JSON.stringify({ errCode, errMsg }));
        }
        return resJson;
    };

    get_(path: string) {
        this.options.method = 'get';
        return this.fetch_(path, this.options);
    }
};
