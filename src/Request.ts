class Request_ {

    private options;

    constructor(email: string, pass: string, baseURL: string) {

        this.options = {
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Basic ${Utilities.base64Encode(`${email}:${pass}`)}`
            },
            "muteHttpExceptions": true
        }

    }
};
