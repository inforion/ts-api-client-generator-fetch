import {
    AnyMethodConfig,
    ConnectionConfig,
    EndpointFunctionArgument,
    getEndpointUrl
} from 'ts-api-client-generator';

import { isObject } from '../utils/is-object';
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

    const additionalOptions = functionArgument != null && isObject(functionArgument.requestOptions)
        ? functionArgument.requestOptions as RequestInit
        : { };

    return {
        url,
        init: {
            ...additionalOptions,
            method: methodConfig.method,
            body: serializeRequestBody(functionArgument?.body),
            headers: getHeaders(connectionConfig, functionArgument)
        }
    };
}