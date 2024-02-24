import createHttpClient from './httpClient';

const defaultApi = createHttpClient('');

const studentApi = createHttpClient('api/v1');
const lectureApi = createHttpClient('api/v1');

export { studentApi,lectureApi, defaultApi };
