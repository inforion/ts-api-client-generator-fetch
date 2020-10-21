import {
    AnyMethodConfig,
    ConnectionConfig,
    Credentials,
    EndpointFunctionArgument,
    getHeadersCommon
} from 'ts-api-client-generator';

function getAuthHeader(credentials: Credentials): string {
    const base64Credentials = btoa(`${credentials.login}:${credentials.password}`);
    return `Basic ${base64Credentials}`;
}

export function getHeaders<TMethod extends AnyMethodConfig>(
    connectionConfig: ConnectionConfig,
    functionArgument?: EndpointFunctionArgument<TMethod>
): Record<string, string> {
    const headers = getHeadersCommon(connectionConfig, functionArgument);

    if (connectionConfig.credentials != null) {
        headers.Authorization = getAuthHeader(connectionConfig.credentials);
    }

    return headers;
}