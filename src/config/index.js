const CONFIG = {
    dev: {
        isDevMode: true,
        debugMode: false,
        baseURL: 'http://localhost:8080',
    },
    prod: {
        isDevMode: false,
        debugMode: false,
        baseURL: 'http://localhost:8080',
    },
    local: {
        isDevMode: true,
        debugMode: false,
        baseURL: 'http://localhost:8080',
    },
};

export const APP_CONFIG = CONFIG[process.env.REACT_APP_HOST_TYPE];
