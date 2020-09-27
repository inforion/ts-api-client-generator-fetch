import {
    AnyMethodConfig,
    ConnectionConfig,
    EndpointFunctionArgument,
    getEndpointUrl
} from 'ts-api-client-generator';

import { getHeaders } from './get-headers';
import { serializeRequestBody } from './serialize-request-body';

export function getFetchParameters<TMethod extends AnyMethodConfig>(
    functionArgument: EndpointFunctionArgument<TMethod> | undefined,
    methodConfig: TMethod,
    path: string,
    connectionConfig: ConnectionConfig
): { url: string, init: RequestInit } {
    const url = getEndpointUrl(
        path,
        methodConfig.endpoint,
        functionArgument?.endpointParams,
        functionArgument?.queryParams
    );

    return {
        url,
        init: {
            method: methodConfig.method,
            body: serializeRequestBody(functionArgument?.body),
            headers: getHeaders(connectionConfig, functionArgument)
        }
    };
}