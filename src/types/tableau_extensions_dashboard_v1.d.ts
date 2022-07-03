// type: interface
// name: BlockListItem
// namespace: tableau.extensions.dashboard.v1
export interface BlockListItem {
    url?: string;
    block_list_item_luid?: string;
}

// type: interface
// name: BlockListItems
// namespace: tableau.extensions.dashboard.v1
export interface BlockListItems {
    block_list_items?: BlockListItem[];
}

// type: interface
// name: SafeListItem
// namespace: tableau.extensions.dashboard.v1
export interface SafeListItem {
    safe_list_item_luid?: string;
    url?: string;
    allow_full_data?: boolean;
    prompt_needed?: boolean;
}

// type: interface
// name: SafeListItems
// namespace: tableau.extensions.dashboard.v1
export interface SafeListItems {
    safe_list_items?: SafeListItem[];
}

// type: interface
// name: ServerSettings
// namespace: tableau.extensions.dashboard.v1
export interface ServerSettings {
    block_list_items?: {
        url?: string;
        block_list_item_luid?: string;
    }[];
    extensions_enabled?: boolean;
}

// type: interface
// name: SiteSettings
// namespace: tableau.extensions.dashboard.v1
export interface SiteSettings {
    extensions_enabled?: boolean;
    allow_sandboxed?: boolean;
    safe_list_items?: {
        safe_list_item_luid?: string;
        url?: string;
        allow_full_data?: boolean;
        prompt_needed?: boolean;
    }[];
}
