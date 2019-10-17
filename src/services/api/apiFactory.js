import usersEndpoint from './usersEndpoint';

const endpoints = {
    users: usersEndpoint,
    // other endpoints ...
};

export const apiFactory = {
    get: (name) => endpoints[name],
};
