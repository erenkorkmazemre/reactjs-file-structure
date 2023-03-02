import createHttpClient from './httpClient';

const defaultApi = createHttpClient('');

const studentApi = createHttpClient('api/v1');

export { studentApi, defaultApi };
