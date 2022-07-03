// type: interface
// name: ConnectionBrief
// namespace: tableau.analyticsextensions.v1
export interface ConnectionBrief {
    connection_name?: string;
    connection_type?: "UNDEFINED" | "TABPY" | "RSERVE" | "EINSTEIN_DISCOVERY" | "GENERIC_API";
}

// type: interface
// name: ConnectionItem
// namespace: tableau.analyticsextensions.v1
export interface ConnectionItem {
    connection_luid?: string;
    host?: string;
    port?: number;
    is_auth_enabled?: boolean;
    username?: string;
    password?: string;
    is_ssl_enabled?: boolean;
    connection_brief?: ConnectionBrief;
}

// type: interface
// name: ConnectionList
// namespace: tableau.analyticsextensions.v1
export interface ConnectionList {
    connectionList?: {
        connection_luid?: string;
        host?: string;
        port?: number;
        is_auth_enabled?: boolean;
        username?: string;
        password?: string;
        is_ssl_enabled?: boolean;
        connection_brief?: ConnectionBrief;
    }[];
}

// type: interface
// name: ConnectionMapping
// namespace: tableau.analyticsextensions.v1
export interface ConnectionMapping {
    workbook_luid?: string;
    connection_luid?: string;
}

// type: interface
// name: ConnectionMetadata
// namespace: tableau.analyticsextensions.v1
export interface ConnectionMetadata {
    connection_luid?: string;
    connection_brief?: ConnectionBrief;
}

// type: interface
// name: ConnectionMetadataList
// namespace: tableau.analyticsextensions.v1
export interface ConnectionMetadataList {
    connectionMetadataList?: {
        connection_luid?: string;
        connection_brief?: ConnectionBrief;
    }[];
}

// type: interface
// name: ServerSettings
// namespace: tableau.analyticsextensions.v1
export interface ServerSettings {
    enabled?: boolean;
}

// type: interface
// name: SiteSettings
// namespace: tableau.analyticsextensions.v1
export interface SiteSettings {
    enabled?: boolean;
}
