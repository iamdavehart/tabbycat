import { PaginationType, PaginatedResponseGroup } from "./tableau_restapi_v0";
export type Pagination = { pagination?: PaginationType };
export type FilteredPaginationGroup<T> = { [k in keyof Extract<PaginatedResponseGroup, { [k: string]: T }>]: T };
export type Paginated<T> = Pagination & FilteredPaginationGroup<T>;
