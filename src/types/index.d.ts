type Method = 'get' | 'post' | 'put';

interface BasicAuthInfo {
    userName: string;
    pass: string;
}

interface RequeestOptions {
    method?: Method;
    headers: {
        'Content-Type': string;
        'Authorization': string;
        'X-Redmine-API-Key': string;
    };
    payload?: any;
    muteHttpExceptions: boolean;
}

interface IssueCustomeField {
    id: number;
    value: string;
}

interface Issue {
    project_id: number;
    tracker_id?: number;
    status_id?: number;
    priority_id?: number;
    subject: string;
    description?: string;
    category_id?: number;
    fixed_version_id?: Number;
    assigned_to_id?: number;
    parent_issue_id?: number;
    custom_fields?: IssueCustomeField[];
    watcher_user_ids?: number[];
    is_private?: boolean;
    estimated_hours?: number;
}

interface Payload {
    issue: Issue;
}

interface Params {
    [key: string]: string
}
