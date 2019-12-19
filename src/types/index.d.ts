export interface BasicAuthInfo {
    userName: string;
    pass: string;
}

export type Method = 'get' | 'post' | 'put';

export interface RequeestOptions {
    method?: Method;
    headers: {
        'Content-Type': string;
        'Authorization': string;
        'X-Redmine-API-Key': string;
    };
    payload?: any;
    muteHttpExceptions: boolean;
}

export interface Issue {
    project_id: number;
    tracker_id: number;
    status_id: number;
    priority_id: number;
    subject: string;
    description: string;
    category_id: number;
    fixed_version_id?: Number;
    assigned_to_id?: number;
    parent_issue_id?: number;
    custom_fields - See Custom fields
    watcher_user_ids?: number[];
    is_private - Use true or false to indicate whether the issue is private or not
    estimated_hours - Number of hours estimated for issue
}