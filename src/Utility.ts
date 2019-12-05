const createQuery_ = (params): string => {

    return params.map(param => `${param.key}=${param.value}`);
};
