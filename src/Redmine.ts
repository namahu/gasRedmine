const getRedmine: Redmine = (email: string, pass: string, baseURL: string) => {
    return new Redmine_(email, pass, baseURL);
}

class Redmine_ {

    private email: string;
    private pass: string;
    private baseURL: string

    constructor(email: string, pass: string, baseURL: string) {
        this.email = email;
        this.pass = pass;
        this.baseURL = baseURL;
    }

    getIssue

    
}
