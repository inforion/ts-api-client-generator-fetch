import { ClientAdapterConfig } from 'ts-api-client-generator';

export interface FetchAdapterConfig<TContext> extends ClientAdapterConfig<Response, TContext> { }