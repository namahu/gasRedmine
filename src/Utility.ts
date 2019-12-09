interface Params {
    [key: string]: string
};

const createQuery_ = (params: Params): string => {

    let query: string[] = [];
    for (const p in params) {
        query.push(`${p}=${params[p]}`);
    }

    return query.join('&');

};
