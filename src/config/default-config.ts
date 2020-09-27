import { FetchAdapterConfig } from './fetch-adapter-config';

export const defaultConfig: FetchAdapterConfig<any> = {
    transformResponse: <T>(response: Response) => response.json() as Promise<T>
};