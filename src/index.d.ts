

import { AxiosRequestConfig } from "axios";



/**
 * A REST Api Client that handles calls to the Tableau Server REST API
 */
export class TableauRestApiClient extends WrappedApiCalls {
    /**
     * Builds the Tableau Rest API client
     * @param {ClientConstructorOptions} options An options object containing the baseURL and version number
     */
    constructor(options?: ClientConstructorOptions);
    /**
     * The base URI for the server (e.g. https://tableauserver.com)
     */
    baseURL: any;
    /**
     * The specific version of the REST API to use (defaults to latest)
     */
    version: any;
    /**
     * The Current authenticated user id (site specific) (null if not authenticated)
     */
    currentUser: any;
    /**
     * The Current authenticatd site (authentication is site-specific)
     */
    currentSite: any;
}








export class UserFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactStringBuilder<UserFilterExpressionBuilder>;
  lastLogin: DateBuilder<UserFilterExpressionBuilder>;
  siteRole: ExactOrOneOfStringBuilder<UserFilterExpressionBuilder>;
}

export class DatasourceFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<DatasourceFilterExpressionBuilder>;
  favoritesTotal: NumberBuilder<DatasourceFilterExpressionBuilder>;
  type: ExactStringBuilder<DatasourceFilterExpressionBuilder>;
  ownerName: ExactStringBuilder<DatasourceFilterExpressionBuilder>;
  createdAt: DateBuilder<DatasourceFilterExpressionBuilder>;
  updatedAt: DateBuilder<DatasourceFilterExpressionBuilder>;
  tags: ExactOrOneOfStringBuilder<DatasourceFilterExpressionBuilder>;
}

export class GroupsFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
  domainName: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
  domainNickname: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
  isLocal: BooleanBuilder<GroupsFilterExpressionBuilder>;
  userCount: NumberBuilder<GroupsFilterExpressionBuilder>;
  minimumSiteRole: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
}

export class JobsFilterExpressionBuilder extends ExpressionBuilder {
  completedAt: DateBuilder<JobsFilterExpressionBuilder>;
  createdAt: DateBuilder<>;
  jobType: ExactOrOneOfStringBuilder<JobsFilterExpressionBuilder>;
  notes: LikeStringBuilder<JobsFilterExpressionBuilder>;
  startedAt: DateBuilder<JobsFilterExpressionBuilder>;
  status: ExactStringBuilder<JobsFilterExpressionBuilder>;
  subtitle: ExactOrLikeStringBuilder<JobsFilterExpressionBuilder>;
  title: ExactOrLikeStringBuilder<JobsFilterExpressionBuilder>;
}

export class ProjectsFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
  createdAt: DateBuilder<ProjectsFilterExpressionBuilder>;
  ownerName: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
  ownerDomain: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
  ownerEmail: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
  parentProjectId: ExactStringBuilder<ProjectsFilterExpressionBuilder>;
  updatedAt: DateBuilder<ProjectsFilterExpressionBuilder>;
}

export class ViewsFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<ViewsFilterExpressionBuilder>;
  createdAt: DateBuilder<ViewsFilterExpressionBuilder>;
  favoritesTotal: NumberBuilder<ViewsFilterExpressionBuilder>;
  updatedAt: DateBuilder<ViewsFilterExpressionBuilder>;
  hitsTotal: NumberBuilder<ViewsFilterExpressionBuilder>;
  tags: ExactOrOneOfStringBuilder<ViewsFilterExpressionBuilder>;
  ownerName: ExactStringBuilder<ViewsFilterExpressionBuilder>;
}

export class WorkbooksFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<WorkbooksFilterExpressionBuilder>;
  createdAt: DateBuilder<WorkbooksFilterExpressionBuilder>;
  favoritesTotal: NumberBuilder<WorkbooksFilterExpressionBuilder>;
  updatedAt: DateBuilder<WorkbooksFilterExpressionBuilder>;
  tags: ExactOrOneOfStringBuilder<WorkbooksFilterExpressionBuilder>;
  ownerName: ExactStringBuilder<WorkbooksFilterExpressionBuilder>;
}

export class FlowsFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<FlowsFilterExpressionBuilder>;
  projectName: ExactStringBuilder<FlowsFilterExpressionBuilder>;
  createdAt: DateBuilder<FlowsFilterExpressionBuilder>;
  updatedAt: DateBuilder<FlowsFilterExpressionBuilder>;
  ownerName: ExactStringBuilder<FlowsFilterExpressionBuilder>;
}

export class MetricsFilterExpressionBuilder extends ExpressionBuilder {
  name: ExactOrOneOfStringBuilder<MetricsFilterExpressionBuilder>;
  projectName: ExactStringBuilder<MetricsFilterExpressionBuilder>;
  createdAt: DateBuilder<MetricsFilterExpressionBuilder>;
  favoritesTotal: NumberBuilder<MetricsFilterExpressionBuilder>;
  updatedAt: DateBuilder<MetricsFilterExpressionBuilder>;
  hitsTotal: NumberBuilder<MetricsFilterExpressionBuilder>;
  ownerName: ExactOrOneOfStringBuilder<MetricsFilterExpressionBuilder>;
  ownerDomain: ExactOrOneOfStringBuilder<MetricsFilterExpressionBuilder>;
  ownerEmail: ExactOrOneOfStringBuilder<MetricsFilterExpressionBuilder>;
  tags: ExactOrOneOfStringBuilder<MetricsFilterExpressionBuilder>;
}

export class ExpressionBuilder {
  build(): string;
}

export class LikeStringBuilder<T> {
  has(value): T;
}

export class ExactStringBuilder<T> {
  eq(value): T;
}

export class ExactOrOneOfStringBuilder<T> {
  eq(value): T;
  in(values): T;
}

export class ExactOrLikeStringBuilder<T> {
  eq(value): T;
  has(values): T;
}

export class BooleanBuilder<T> {
  eq(value): T;
}

export class NumberBuilder<T> {
  eq(value): T;
  gt(value): T;
  gte(value): T;
  lt(value): T;
  lte(value): T;
}

export class DateBuilder<T> {
  eq(value): T;
  gt(value): T;
  gte(value): T;
  lt(value): T;
  lte(value): T;
}







export class FieldExpressionBuilder<TSelf> {
  withAllFields(): TSelf;
  withDefaultFields(): TSelf;
  build(): string;
}

export interface IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class DatasourceFieldExpressionBuilder extends FieldExpressionBuilder<DatasourceFieldExpressionBuilder> {
  addContentUrl(): DatasourceFieldExpressionBuilder;
  addId(): DatasourceFieldExpressionBuilder;
  addName(): DatasourceFieldExpressionBuilder;
  addType(): DatasourceFieldExpressionBuilder;
  addDescription(): DatasourceFieldExpressionBuilder;
  addCreatedAt(): DatasourceFieldExpressionBuilder;
  addUpdatedAt(): DatasourceFieldExpressionBuilder;
  addEncryptExtracts(): DatasourceFieldExpressionBuilder;
  addIsCertified(): DatasourceFieldExpressionBuilder;
  addUseRemoteQueryAgent(): DatasourceFieldExpressionBuilder;
  addWebPageUrl(): DatasourceFieldExpressionBuilder;
  addSize(): DatasourceFieldExpressionBuilder;
  addTag(): DatasourceFieldExpressionBuilder;
  addFavoritesTotal(): DatasourceFieldExpressionBuilder;
  addDatabaseName(): DatasourceFieldExpressionBuilder;
  addConnectedWorkbooksCount(): DatasourceFieldExpressionBuilder;
  addHasAlert(): DatasourceFieldExpressionBuilder;
  addHasExtracts(): DatasourceFieldExpressionBuilder;
  addIsPublished(): DatasourceFieldExpressionBuilder;
  addServerName(): DatasourceFieldExpressionBuilder;
  withProjectResource(): ProjectFieldExpressionBuilderWithParent<DatasourceFieldExpressionBuilder>;
  withOwnerResource(): OwnerFieldExpressionBuilderWithParent<DatasourceFieldExpressionBuilder>;
}

export class UserFieldExpressionBuilder extends FieldExpressionBuilder<UserFieldExpressionBuilder> {
  addExternalAuthUserId() : UserFieldExpressionBuilder;
  addId() : UserFieldExpressionBuilder;
  addName() : UserFieldExpressionBuilder;
  addSiteRole() : UserFieldExpressionBuilder;
  addLastLogin() : UserFieldExpressionBuilder;
  addFullName() : UserFieldExpressionBuilder;
  addEmail() : UserFieldExpressionBuilder;
  addAuthSetting() : UserFieldExpressionBuilder;
}

export class ViewFieldExpressionBuilder extends FieldExpressionBuilder<ViewFieldExpressionBuilder> {
  addId() : ViewFieldExpressionBuilder;
  addName() : ViewFieldExpressionBuilder;
  addContentUrl() : ViewFieldExpressionBuilder;
  addCreatedAt() : ViewFieldExpressionBuilder;
  addUpdatedAt() : ViewFieldExpressionBuilder;
  addTags() : ViewFieldExpressionBuilder;
  addSheetType() : ViewFieldExpressionBuilder;
  addUsage() : ViewFieldExpressionBuilder;
  withWorkbookResource() : WorkbookFieldExpressionBuilderWithParent<ViewFieldExpressionBuilder>;
  withProjectResource() : ProjectFieldExpressionBuilderWithParent<ViewFieldExpressionBuilder>;
  withOwnerResource() : OwnerFieldExpressionBuilderWithParent<ViewFieldExpressionBuilder>;
}

export class WorkbookFieldExpressionBuilder extends FieldExpressionBuilder<WorkbookFieldExpressionBuilder> {
  addDescription() : WorkbookFieldExpressionBuilder;
  addId() : WorkbookFieldExpressionBuilder;
  addName() : WorkbookFieldExpressionBuilder;
  addContentUrl() : WorkbookFieldExpressionBuilder;
  addShowTabs() : WorkbookFieldExpressionBuilder;
  addWebpageUrl() : WorkbookFieldExpressionBuilder;
  addSize() : WorkbookFieldExpressionBuilder;
  addCreatedAt() : WorkbookFieldExpressionBuilder;
  addUpdatedAt() : WorkbookFieldExpressionBuilder;
  addEncryptExtracts() : WorkbookFieldExpressionBuilder;
  addDefaultViewId() : WorkbookFieldExpressionBuilder;
  addTag() : WorkbookFieldExpressionBuilder;
  addSheetCount() : WorkbookFieldExpressionBuilder;
  addHasExtracts() : WorkbookFieldExpressionBuilder;
  withProjectResource() : ProjectFieldExpressionBuilderWithParent<WorkbookFieldExpressionBuilder>;
  withOwnerResource() : OwnerFieldExpressionBuilderWithParent<WorkbookFieldExpressionBuilder>;
}

export class JobFieldExpresionBuilder extends FieldExpressionBuilder<JobFieldExpresionBuilder> {
  addId() : JobFieldExpresionBuilder;
  addStatus() : JobFieldExpresionBuilder;
  addCreatedAt() : JobFieldExpresionBuilder;
  addStartedAt() : JobFieldExpresionBuilder;
  addEndedAt() : JobFieldExpresionBuilder;
  addPriority() : JobFieldExpresionBuilder;
  addJobType() : JobFieldExpresionBuilder;
  addTitle() : JobFieldExpresionBuilder;
  addSubtitle() : JobFieldExpresionBuilder;
}

export class GroupFieldExpressionBuilder extends FieldExpressionBuilder<GroupFieldExpressionBuilder> {
  addId() : GroupFieldExpressionBuilder;
  addName() : GroupFieldExpressionBuilder;
  addDomainName() : GroupFieldExpressionBuilder;
  addUserCount() : GroupFieldExpressionBuilder;
  addMinimumSiteRole() : GroupFieldExpressionBuilder;
}

export class FavoritesFieldExpressionBuilder extends FieldExpressionBuilder<FavoritesFieldExpressionBuilder> { 
  addLabel() : FavoritesFieldExpressionBuilder;
  addParentProjectName   () : FavoritesFieldExpressionBuilder;
  addTargetOwnerName() : FavoritesFieldExpressionBuilder;
  withDatasourceResource() : DatasourceFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
  withProjectResource() : ProjectFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
  withUserResource() : UserFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
  withWorkbookResource() : WorkbookFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
  withViewResource() : ViewFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
}

export class MetricsFieldExpressionBuilder extends FieldExpressionBuilder<MetricsFieldExpressionBuilder> {
  addId() : MetricsFieldExpressionBuilder;
  addName() : MetricsFieldExpressionBuilder;
  withProjectResource() : ProjectFieldExpressionBuilderWithParent<MetricsFieldExpressionBuilder>;
  withOwnerResource() : OwnerFieldExpressionBuilderWithParent<MetricsFieldExpressionBuilder>;
}


export class ProjectFieldExpressionBuilder extends FieldExpressionBuilder<ProjectFieldExpressionBuilder> {
  addId(): ProjectFieldExpressionBuilder;
  addName(): ProjectFieldExpressionBuilder;
  addDescription(): ProjectFieldExpressionBuilder;
}

export class OwnerFieldExpressionBuilder extends FieldExpressionBuilder<OwnerFieldExpressionBuilder> {
  addId(): OwnerFieldExpressionBuilder;
  addName(): OwnerFieldExpressionBuilder;
  addFullName(): OwnerFieldExpressionBuilder;
  addSiteRole(): OwnerFieldExpressionBuilder;
  addLastLogin(): OwnerFieldExpressionBuilder;
  addEmail(): OwnerFieldExpressionBuilder;
}

export class ProjectFieldExpressionBuilderWithParent<TParent> 
extends ProjectFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class ViewFieldExpressionBuilderWithParent<TParent> 
extends ViewFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class WorkbookFieldExpressionBuilderWithParent<TParent> 
extends WorkbookFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class DatasourceFieldExpressionBuilderWithParent<TParent> 
extends DatasourceFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class UserFieldExpressionBuilderWithParent<TParent> 
extends UserFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}

export class OwnerFieldExpressionBuilderWithParent<TParent> 
extends OwnerFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
  and(): TParent;
}










/**
 * Options Object used to configure the client
 */
interface ClientConstructorOptions {
    /**
     * The base URI for the server (e.g. https://tableauserver.com)
     */
    baseURL?: string;
    /**
     * The specific version of the REST API to use (defaults to latest)
     */
    version?: string;
    /**
     * An object that is passed directly to the internal axios executive
     */
    axios?: AxiosRequestConfig;
}



export interface ApiRequest {}


export interface RecommendationDismissalRequest extends ApiRequest {}
export interface TagBatchRequest extends ApiRequest {}
export interface DatasourcesRequest extends ApiRequest {}




export interface ColumnRequest extends ApiRequest {
    column: ColumnType;
}
export interface ConnectionRequest extends ApiRequest {
    connection: ConnectionType;
}
export interface ConnectionsRequest extends ApiRequest {
    connections: ConnectionListType;
}
export interface CredentialsRequest extends ApiRequest {
    credentials: TableauCredentialsType;
}
export interface DataAlertRequest extends ApiRequest {
    dataAlert: DataAlertType;
}
export interface DataQualityWarningRequest extends ApiRequest {
    dataQualityWarning: DataQualityWarningType;
}
export interface DataRoleRequest extends ApiRequest {
    dataRole: DataRoleType;
}
export interface DatabaseRequest extends ApiRequest {
    database: DatabaseType;
}
export interface DatabaseGroupRequest extends ApiRequest {
    databaseGroup: DatabaseGroupType;
}
export interface DatasourceRequest extends ApiRequest {
    datasource: DataSourceType;
}
export interface DistinctValuesRequest extends ApiRequest {
    distinctValues: DistinctValueListType;
}
export interface FavoriteRequest extends ApiRequest {
    favorite: FavoriteType;
}
export interface FavoriteOrderingsRequest extends ApiRequest {
    favoriteOrderings: FavoriteOrderingListType;
}
export interface FieldRequest extends ApiRequest {
    field: FieldType;
}
export interface FieldConceptRequest extends ApiRequest {
    fieldConcept: FieldConceptType;
}
export interface FlowRequest extends ApiRequest {
    flow: FlowType;
}
export interface FlowWarningsRequest extends ApiRequest {
    flowWarnings: FlowWarningsListContainerType;
}
export interface GroupRequest extends ApiRequest {
    group: GroupType;
}
export interface MetricRequest extends ApiRequest {
    metric: MetricType;
}
export interface PermissionsRequest extends ApiRequest {
    permissions: PermissionsType;
}
export interface ProjectRequest extends ApiRequest {
    project: ProjectType;
}
export interface ScheduleRequest extends ApiRequest {
    schedule: ScheduleType;
}
export interface SiteRequest extends ApiRequest {
    site: SiteType;
}
export interface TableRequest extends ApiRequest {
    table: TableType;
}
export interface TagsRequest extends ApiRequest {
    tags: TagListType;
}
export interface UserRequest extends ApiRequest {
    user: UserType;
}
export interface WebhookRequest extends ApiRequest {
    webhook: WebhookType;
}
export interface WorkbookRequest extends ApiRequest {
    workbook: WorkbookType;
}
export interface SubscriptionRequest extends ApiRequest {
    subscription: SubscriptionType;
}
export interface TaskRequest extends ApiRequest {
    task: TaskType;
}



export interface ApiResponse {}

export interface PaginatedApiResponse extends ApiResponse {
    pagination: PaginationType;
}


export interface DataAccelerationReportResponse extends ApiResponse {}
export interface ParentResponse extends ApiResponse {}

export interface BackgroundJobResponse extends ApiResponse {
    backgroundJob: BackgroundJobType;
}
export interface BackgroundJobsResponse extends ApiResponse {
    backgroundJobs: BackgroundJobListType;
}
export interface ColumnResponse extends ApiResponse {
    column: ColumnType;
}
export interface ConnectionResponse extends ApiResponse {
    connection: ConnectionType;
}
export interface ConnectionsResponse extends ApiResponse {
    connections: ConnectionListType;
}
export interface CredentialsResponse extends ApiResponse {
    credentials: TableauCredentialsType;
}
export interface DataAlertResponse extends ApiResponse {
    dataAlert: DataAlertType;
}
export interface DataAlertsResponse extends ApiResponse {
    dataAlerts: DataAlertListType;
}
export interface DataQualityWarningResponse extends ApiResponse {
    dataQualityWarning: DataQualityWarningType;
}
export interface DataQualityWarningListResponse extends ApiResponse {
    dataQualityWarningList: DataQualityWarningListType;
}
export interface DataRoleResponse extends ApiResponse {
    dataRole: DataRoleType;
}
export interface DatabaseResponse extends ApiResponse {
    database: DatabaseType;
}
export interface DatasourceResponse extends ApiResponse {
    datasource: DataSourceType;
}
export interface ErrorResponse extends ApiResponse {
    error: ErrorType;
}
export interface FavoritesResponse extends ApiResponse {
    favorites: FavoriteListType;
}
export interface FileUploadResponse extends ApiResponse {
    fileUpload: FileUploadType;
}
export interface FlowResponse extends ApiResponse {
    flow: FlowType;
}
export interface GroupResponse extends ApiResponse {
    group: GroupType;
}
export interface JobResponse extends ApiResponse {
    job: JobType;
}
export interface MetricResponse extends ApiResponse {
    metric: MetricType;
}
export interface PermissionsResponse extends ApiResponse {
    permissions: PermissionsType;
}
export interface ProjectResponse extends ApiResponse {
    project: ProjectType;
}
export interface DataAlertsRecipientResponse extends ApiResponse {
    dataAlertsRecipient: DataAlertsRecipientType;
}
export interface DataAlertsRecipientListResponse extends ApiResponse {
    dataAlertsRecipientList: DataAlertsRecipientListType;
}
export interface ScheduleResponse extends ApiResponse {
    schedule: ScheduleType;
}
export interface ServerInfoResponse extends ApiResponse {
    serverInfo: ServerInfo;
}
export interface ServerSettingsResponse extends ApiResponse {
    serverSettings: ServerSettings;
}
export interface SiteResponse extends ApiResponse {
    site: SiteType;
}
export interface TableResponse extends ApiResponse {
    table: TableType;
}
export interface TagsResponse extends ApiResponse {
    tags: TagListType;
}
export interface UserResponse extends ApiResponse {
    user: UserType;
}
export interface ViewResponse extends ApiResponse {
    view: ViewType;
}
export interface ViewsResponse extends ApiResponse {
    views: ViewListType;
}
export interface WebhookResponse extends ApiResponse {
    webhook: WebhookType;
}
export interface WebhooksResponse extends ApiResponse {
    webhooks: WebhookListType;
}
export interface WebhookTestResultResponse extends ApiResponse {
    webhookTestResult: WebhookTestResultType;
}
export interface WorkbookResponse extends ApiResponse {
    workbook: WorkbookType;
}
export interface SubscriptionResponse extends ApiResponse {
    subscription: SubscriptionType;
}
export interface TaskResponse extends ApiResponse {
    task: TaskType;
}
export interface TasksResponse extends ApiResponse {
    tasks: TaskListType;
}
export interface WarningsResponse extends ApiResponse {
    warnings: WarningListType;
}
export interface DegradationsResponse extends ApiResponse {
    degradations: DegradationListType;
}
export interface ListFieldConceptsResponse extends ApiResponse {
    listFieldConcepts: ListFieldConceptsType;
}
export interface FieldMatchesResponse extends ApiResponse {
    fieldMatches: FieldMatchListType;
}
export interface ValueMatchesResponse extends ApiResponse {
    valueMatches: MatchValuesResultType;
}
export interface ValueConceptCountResponse extends ApiResponse {
    valueConceptCount: ValueConceptCountType;
}
export interface ListValueConceptsResponse extends ApiResponse {
    listValueConcepts: ListValueConceptsType;
}
export interface FieldConceptResponse extends ApiResponse {
    fieldConcept: FieldConceptType;
}
export interface GetIndexingStatusResponse extends ApiResponse {
    getIndexingStatus: IndexingStatusType;
}
export interface UngroupedDatabasesResponse extends ApiResponse {
    ungroupedDatabases: DatabaseIdListType;
}
export interface ColumnsResponse extends PaginatedApiResponse {
    columns: ColumnListType;
}
export interface DatabasesResponse extends PaginatedApiResponse {
    databases: DatabaseListType;
}
export interface DatasourcesResponse extends PaginatedApiResponse {
    datasources: DataSourceListType;
}
export interface ExtractsResponse extends PaginatedApiResponse {
    extracts: ExtractListType;
}
export interface FlowsResponse extends PaginatedApiResponse {
    flows: FlowListType;
}
export interface FlowOutputStepsResponse extends PaginatedApiResponse {
    flowOutputSteps: FlowOutputStepListType;
}
export interface GroupsResponse extends PaginatedApiResponse {
    groups: GroupListType;
}
export interface MetricsResponse extends PaginatedApiResponse {
    metrics: MetricListType;
}
export interface ProjectsResponse extends PaginatedApiResponse {
    projects: ProjectListType;
}
export interface RevisionsResponse extends PaginatedApiResponse {
    revisions: RevisionListType;
}
export interface SchedulesResponse extends PaginatedApiResponse {
    schedules: ScheduleListType;
}
export interface SitesResponse extends PaginatedApiResponse {
    sites: SiteListType;
}
export interface TablesResponse extends PaginatedApiResponse {
    tables: TableListType;
}
export interface UsersResponse extends PaginatedApiResponse {
    users: UserListType;
}
export interface WorkbooksResponse extends PaginatedApiResponse {
    workbooks: WorkbookListType;
}
export interface SubscriptionsResponse extends PaginatedApiResponse {
    subscriptions: SubscriptionListType;
}








export type ResourceIdType = string;
export type SiteQuotaType = number;
export type SiteCapacityType = number;
export type StateType = "Active" | "Suspended";
/**
 * Not a real value. Used to specify 'no limit' when site is created or updated. Never returned from server in response.
 */
export type RevisionLimitType = "-1";
export type SiteRoleType =
  | "Creator"
  | "Explorer"
  | "ExplorerCanPublish"
  | "Guest"
  | "Interactor"
  | "Publisher"
  | "ReadOnly"
  | "ServerAdministrator"
  | "SiteAdministrator"
  | "SiteAdministratorCreator"
  | "SiteAdministratorExplorer"
  | "Unlicensed"
  | "UnlicensedWithPublish"
  | "Viewer"
  | "ViewerWithPublish";
export type SiteUserAuthSettingType = "ServerDefault" | "SAML";
export type NameCharacteristicsType =
  | {
      textPattern?: TextPatternType;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
export type DataTypeType = "DATA_TYPE_UNSPECIFIED" | "DATE" | "DATETIME" | "STRING" | "INT" | "FLOAT" | "BOOL";
export type FieldRoleType = "FIELD_ROLE_UNSPECIFIED" | "DIMENSION" | "MEASURE";
export type ValueCharacteristicsType =
  | {
      textPattern?: TextPatternType;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
export type ValueSourceType =
  | {
      datasourceValueStore?: DataSourceValueStoreType;
      [k: string]: unknown;
    }
  | {
      [k: string]: unknown;
    };
export type DatabaseTypeType = "DatabaseServer" | "File" | "WebDataConnector" | "CloudFile";
export type SemanticsValueType =
  | (
      | {
          numberValue?: number;
          [k: string]: unknown;
        }
      | {
          stringValue?: string;
          [k: string]: unknown;
        }
      | {
          timeValue?: string;
          [k: string]: unknown;
        }
      | {
          boolValue?: boolean | number;
          [k: string]: unknown;
        }
    )
  | {
      [k: string]: unknown;
    };
export type FavoriteType =
  | {
      view: ViewType;
      [k: string]: unknown;
    }
  | {
      workbook: WorkbookType;
      [k: string]: unknown;
    }
  | {
      datasource: DataSourceType;
      [k: string]: unknown;
    }
  | {
      project: ProjectType;
      [k: string]: unknown;
    }
  | {
      flow: FlowType;
      [k: string]: unknown;
    };
export type FavoriteTypeType = "view" | "workbook" | "flow" | "metric" | "datasource" | "project" | "datarole";
export type FlowWarningsListContainerType =
  | {
      connectionWarnings?: WarningListType;
      [k: string]: unknown;
    }
  | {
      nodeWarnings?: WarningListType;
      [k: string]: unknown;
    };
export type ImportSourceType = "ActiveDirectory";
export type PermissionsType =
  | (
      | {
          flow: FlowType;
          [k: string]: unknown;
        }
      | {
          datasource: DataSourceType;
          [k: string]: unknown;
        }
      | {
          project: ProjectType;
          [k: string]: unknown;
        }
      | {
          view: ViewType;
          [k: string]: unknown;
        }
      | {
          workbook: WorkbookType;
          [k: string]: unknown;
        }
      | {
          metric: MetricType;
          [k: string]: unknown;
        }
    )
  | {
      [k: string]: unknown;
    };
export type WebhookSourceType =
  | {
      "webhook-source-event-datasource-refresh-started": WebhookSourceEventDatasourceRefreshStartedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-datasource-refresh-succeeded": WebhookSourceEventDatasourceRefreshSucceededType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-datasource-refresh-failed": WebhookSourceEventDatasourceRefreshFailedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-datasource-updated": WebhookSourceEventDatasourceUpdatedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-datasource-created": WebhookSourceEventDatasourceCreatedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-datasource-deleted": WebhookSourceEventDatasourceDeletedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-updated": WebhookSourceEventWorkbookUpdatedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-created": WebhookSourceEventWorkbookCreatedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-deleted": WebhookSourceEventWorkbookDeletedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-view-deleted": WebhookSourceEventViewDeletedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-refresh-started": WebhookSourceEventWorkbookRefreshStartedType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-refresh-succeeded": WebhookSourceEventWorkbookRefreshSucceededType;
      [k: string]: unknown;
    }
  | {
      "webhook-source-event-workbook-refresh-failed": WebhookSourceEventWorkbookRefreshFailedType;
      [k: string]: unknown;
    };
export type WebhookDestinationType = {
  "webhook-destination-http": WebhookDestinationHttpType;
  [k: string]: unknown;
};
export type TaskType =
  | {
      extractRefresh: TaskExtractRefreshType;
      [k: string]: unknown;
    }
  | {
      flowRun: TaskRunFlowType;
      [k: string]: unknown;
    }
  | {
      dataAcceleration: TaskDataAccelerationType;
      [k: string]: unknown;
    }
  | {
      schedule?: ScheduleType;
      [k: string]: unknown;
    };
export type TaskExtractRefreshType =
  | {
      view: ViewType;
      [k: string]: unknown;
    }
  | {
      workbook: WorkbookType;
      [k: string]: unknown;
    }
  | {
      datasource: DataSourceType;
      [k: string]: unknown;
    };
export type TaskDataAccelerationType = {
  workbook: WorkbookType;
  [k: string]: unknown;
};
export type FileUploadSessionIdType = string;
export type ExtractRefreshJobType =
  | {
      view: ViewType;
      [k: string]: unknown;
    }
  | {
      workbook: WorkbookType;
      [k: string]: unknown;
    }
  | {
      datasource: DataSourceType;
      [k: string]: unknown;
    };
export type ProductVersion = string;
export type RestApiVersion = string;
export type ExtractType =
  | {
      datasource: DataSourceType;
      [k: string]: unknown;
    }
  | {
      workbook: WorkbookType;
      [k: string]: unknown;
    };


export interface ColumnType {
  site?: SiteType;
  tags: TagListType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  remoteType?: string;
  parentTableId?: ResourceIdType;
  [k: string]: unknown;
}
export interface SiteType {
  usage?: {
    numUsers: number;
    numCreators?: number;
    numExplorers?: number;
    numViewers?: number;
    storage: number;
    [k: string]: unknown;
  };
  id?: ResourceIdType;
  name?: string;
  contentUrl?: string;
  adminMode?: "ContentOnly" | "ContentAndUsers";
  userQuota?: SiteQuotaType;
  storageQuota?: SiteQuotaType;
  tierCreatorCapacity?: SiteCapacityType;
  tierExplorerCapacity?: SiteCapacityType;
  tierViewerCapacity?: SiteCapacityType;
  disableSubscriptions?: boolean | number;
  state?: StateType;
  revisionHistoryEnabled?: boolean | number;
  revisionLimit?: RevisionLimitType;
  subscribeOthersEnabled?: boolean | number;
  allowSubscriptionAttachments?: boolean | number;
  guestAccessEnabled?: boolean | number;
  cacheWarmupEnabled?: boolean | number;
  dataAlertsEnabled?: boolean | number;
  commentingEnabled?: boolean | number;
  commentingMentionsEnabled?: boolean | number;
  cacheeWarmupThreshold?: number;
  flowsEnabled?: boolean | number;
  extractEncryptionMode?: string;
  dataAccelerationMode?: string;
  mobileBiometricsEnabled?: boolean | number;
  sheetImageEnabled?: boolean | number;
  catalogingEnabled?: boolean | number;
  derivedPermissionsEnabled?: boolean | number;
  askDataMode?: "EnabledByDefault" | "DisabledByDefault" | "DisabledAlways";
  authoringEnabled?: boolean | number;
  customSubscriptionEmailEnabled?: boolean | number;
  customSubscriptionEmail?: string;
  customSubscriptionFooterEnabled?: boolean | number;
  customSubscriptionFooter?: string;
  userVisibilityMode?: string;
  requestAccessEnabled?: boolean | number;
  catalogObfuscationEnabled?: boolean | number;
  flowAutoSaveEnabled?: boolean | number;
  webExtractionEnabled?: boolean | number;
  runNowEnabled?: boolean | number;
  metricsContentTypeEnabled?: boolean | number;
  notifySiteAdminsOnThrottle?: boolean | number;
  namedSharingEnabled?: boolean | number;
  useDefaultTimeZone?: boolean | number;
  timeZone?: string;
  autoSuspendRefreshEnabled?: boolean | number;
  autoSuspendRefreshInactivityWindow?: number;
  [k: string]: unknown;
}
export interface TagListType {
  tag?: TagType | TagType[];
  [k: string]: unknown;
}
export interface TagType {
  label: string;
  [k: string]: unknown;
}
export interface ConnectionType {
  datasource?: DataSourceType;
  connectionCredentials?: ConnectionCredentialsType;
  id?: ResourceIdType;
  type?: string;
  dbClass?: string;
  scope?: string;
  filename?: string;
  googleSheetId?: string;
  embedPassword?: boolean | number;
  serverAddress?: string;
  serverPort?: number;
  userName?: string;
  password?: string;
  [k: string]: unknown;
}
export interface DataSourceType {
  connectionCredentials?: ConnectionCredentialsType;
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  askData?: AskDataType;
  id?: ResourceIdType;
  name?: string;
  contentUrl?: string;
  webpageUrl?: string;
  description?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  isCertified?: boolean | number;
  certificationNote?: string;
  serverName?: string;
  databaseName?: string;
  hasExtracts?: boolean | number;
  hasAlert?: boolean | number;
  size?: number;
  isPublished?: boolean | number;
  connectedWorkbooksCount?: number;
  favoritesTotal?: number;
  encryptExtracts?: string;
  useRemoteQueryAgent?: boolean | number;
  [k: string]: unknown;
}
export interface ConnectionCredentialsType {
  name?: string;
  password?: string;
  embed?: boolean | number;
  oAuth?: boolean | number;
  [k: string]: unknown;
}
export interface ProjectType {
  owner?: UserType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  topLevelProject?: boolean | number;
  parentProjectId?: ResourceIdType;
  controllingPermissionsProjectId?: ResourceIdType;
  createdAt?: string;
  updatedAt?: string;
  favoritesTotal?: number;
  contentPermissions?: "LockedToProject" | "ManagedByOwner" | "LockedToProjectWithoutNested";
  [k: string]: unknown;
}
export interface UserType {
  domain?: DomainDirectiveType;
  id?: ResourceIdType;
  name?: string;
  fullName?: string;
  email?: string;
  password?: string;
  siteRole?: SiteRoleType;
  authSetting?: SiteUserAuthSettingType;
  lastLogin?: string;
  externalAuthUserId?: string;
  [k: string]: unknown;
}
export interface DomainDirectiveType {
  name: string;
  [k: string]: unknown;
}
export interface AskDataType {
  enablement?: "Enabled" | "Disabled" | "SiteDefault";
  [k: string]: unknown;
}
export interface ConnectionListType {
  connection?: ConnectionType | ConnectionType[];
  [k: string]: unknown;
}
export interface TableauCredentialsType {
  site: SiteType;
  user?: UserType;
  name?: string;
  password?: string;
  token?: string;
  personalAccessTokenName?: string;
  personalAccessTokenSecret?: string;
  [k: string]: unknown;
}
export interface DataAlertType {
  owner: UserType;
  view: ViewType;
  recipients?: DataAlertsRecipientListType;
  id?: ResourceIdType;
  subject?: string;
  creatorId?: ResourceIdType;
  createdAt?: string;
  updatedAt?: string;
  frequency?: "AsFrequentlyAsPossible" | "Hourly" | "Daily" | "Weekly" | "Once";
  alertCondition?: string;
  alertThreshold?: string;
  [k: string]: unknown;
}
export interface ViewType {
  workbook?: WorkbookType;
  owner?: UserType;
  project?: ProjectType;
  tags?: TagListType;
  usage?: {
    totalViewCount: number;
    [k: string]: unknown;
  };
  id?: ResourceIdType;
  name?: string;
  contentUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  sheetType?: string;
  favoritesTotal?: number;
  hidden?: boolean | number;
  recentlyViewed?: boolean | number;
  viewUrlName?: string;
  [k: string]: unknown;
}
export interface WorkbookType {
  connections?: ConnectionListType;
  connectionCredentials?: ConnectionCredentialsType;
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  views?: ViewListType;
  dataAccelerationConfig?: DataAccelerationInfoType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  contentUrl?: string;
  webpageUrl?: string;
  showTabs?: boolean | number;
  thumbnailsUserId?: ResourceIdType;
  size?: number;
  createdAt?: string;
  updatedAt?: string;
  sheetCount?: number;
  hasExtracts?: boolean | number;
  encryptExtracts?: string;
  recentlyViewed?: boolean | number;
  defaultViewId?: ResourceIdType;
  [k: string]: unknown;
}
export interface ViewListType {
  view?: ViewType | ViewType[];
  [k: string]: unknown;
}
export interface DataAccelerationInfoType {
  accelerationEnabled?: boolean | number;
  accelerateNow?: boolean | number;
  [k: string]: unknown;
}
export interface DataAlertsRecipientListType {
  recipient?: DataAlertsRecipientType | DataAlertsRecipientType[];
  [k: string]: unknown;
}
export interface DataAlertsRecipientType {
  id?: ResourceIdType;
  name?: string;
  lastSent?: string;
  [k: string]: unknown;
}
export interface DataQualityWarningType {
  site?: SiteType;
  owner?: UserType;
  id?: ResourceIdType;
  userDisplayName?: string;
  contentId?: ResourceIdType;
  contentType?: string;
  message?: string;
  type?: string;
  isActive?: boolean | number;
  createdAt?: string;
  updatedAt?: string;
  [k: string]: unknown;
}
export interface DataRoleType {
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  fieldConcept: FieldConceptType;
  url: string;
  [k: string]: unknown;
}
export interface FieldConceptType {
  uri: string;
  objectConceptURI: string;
  names?: NameType | NameType[];
  nameCharacteristics?: NameCharacteristicsType;
  description?: string;
  parentFieldConceptURI?: string;
  dataTypes?: DataTypeType | DataTypeType[];
  fieldRoles?: FieldRoleType | FieldRoleType[];
  defaultFormats?: unknown;
  valueCharacteristics?: ValueCharacteristicsType;
  ownerID?: string;
  createdAt?: string;
  updatedAt?: string;
  valueSource?: ValueSourceType;
  [k: string]: unknown;
}
export interface NameType {
  locale?: string;
  name?: string;
  weight?: number;
  isPrimary?: boolean | number;
  [k: string]: unknown;
}
export interface TextPatternType {
  regex?: unknown;
  [k: string]: unknown;
}
export interface DataSourceValueStoreType {
  datasourceID?: string;
  fieldName?: string;
  [k: string]: unknown;
}
export interface DatabaseType {
  site?: SiteType;
  contact: UserType;
  certifier: UserType;
  tags: TagListType;
  id?: ResourceIdType;
  name?: string;
  connectionType?: string;
  isEmbedded?: boolean | number;
  description?: string;
  isCertified?: boolean | number;
  certificationNote?: string;
  type?: DatabaseTypeType;
  hostName?: string;
  port?: number;
  filePath?: string;
  provider?: string;
  mimeType?: string;
  fileId?: string;
  connectorUrl?: string;
  requestUrl?: string;
  fileExtension?: string;
  contentPermissions?: "LockedToDatabase" | "ManagedByOwner";
  [k: string]: unknown;
}
export interface DatabaseGroupType {
  database?: DatabaseIdType | DatabaseIdType[];
  metadataDatabaseId?: ResourceIdType;
  [k: string]: unknown;
}
export interface DatabaseIdType {
  id?: ResourceIdType;
  [k: string]: unknown;
}
export interface DistinctValueListType {
  distinctValue?: DistinctValueType | DistinctValueType[];
  [k: string]: unknown;
}
export interface DistinctValueType {
  value: SemanticsValueType;
  frequency: number;
  [k: string]: unknown;
}
export interface FlowType {
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  webpageUrl?: string;
  fileType?: string;
  createdAt?: string;
  updatedAt?: string;
  [k: string]: unknown;
}
export interface FavoriteOrderingListType {
  favoriteOrdering?: FavoriteOrderingType | FavoriteOrderingType[];
  [k: string]: unknown;
}
export interface FavoriteOrderingType {
  favoriteId: ResourceIdType;
  favoriteType: FavoriteTypeType;
  favoriteIdMoveAfter: ResourceIdType;
  favoriteTypeMoveAfter: FavoriteTypeType;
  [k: string]: unknown;
}
export interface FieldType {
  sampleValues?: DistinctValueType | DistinctValueType[];
  dataType?: DataTypeType;
  fieldRole?: FieldRoleType;
  name?: string;
  [k: string]: unknown;
}
export interface WarningListType {
  warning?: WarningType | WarningType[];
  [k: string]: unknown;
}
export interface WarningType {
  message?: string;
  id?: string;
  errorCode?: string;
  [k: string]: unknown;
}
export interface GroupType {
  domain?: DomainDirectiveType;
  import?: ImportDirectiveType;
  id?: ResourceIdType;
  name?: string;
  userCount?: number;
  minimumSiteRole?: SiteRoleType;
  [k: string]: unknown;
}
export interface ImportDirectiveType {
  source: ImportSourceType;
  domainName: string;
  siteRole: SiteRoleType;
  grantLicenseMode?: "onSync" | "onLogin";
  [k: string]: unknown;
}
export interface MetricType {
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  webpageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  suspended?: boolean | number;
  [k: string]: unknown;
}
export interface ScheduleType {
  frequencyDetails?: FrequencyDetailsType;
  id?: ResourceIdType;
  name?: string;
  state?: StateType;
  priority?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: "Extract" | "Subscription" | "ActiveDirectorySync" | "Flow" | "DataAcceleration";
  frequency?: "Hourly" | "Daily" | "Weekly" | "Monthly";
  nextRunAt?: string;
  endScheduleAt?: string;
  executionOrder?: "Parallel" | "Serial";
  [k: string]: unknown;
}
export interface FrequencyDetailsType {
  intervals: {
    interval:
      | IntervalType
      | [IntervalType]
      | [IntervalType, IntervalType]
      | [IntervalType, IntervalType, IntervalType]
      | [IntervalType, IntervalType, IntervalType, IntervalType]
      | [IntervalType, IntervalType, IntervalType, IntervalType, IntervalType]
      | [IntervalType, IntervalType, IntervalType, IntervalType, IntervalType, IntervalType]
      | [IntervalType, IntervalType, IntervalType, IntervalType, IntervalType, IntervalType, IntervalType];
    [k: string]: unknown;
  };
  start: string;
  end?: string;
  [k: string]: unknown;
}
export interface IntervalType {
  minutes?: "15" | "30";
  hours?: "1" | "2" | "4" | "6" | "8" | "12";
  weekDay?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  monthDay?: "LastDay";
  [k: string]: unknown;
}
export interface TableType {
  site?: SiteType;
  contact: UserType;
  certifier: UserType;
  tags: TagListType;
  id?: ResourceIdType;
  name?: string;
  description?: string;
  isEmbedded?: boolean | number;
  isCertified?: boolean | number;
  certificationNote?: string;
  schema?: string;
  [k: string]: unknown;
}
export interface WebhookType {
  "webhook-source": WebhookSourceType;
  "webhook-destination": WebhookDestinationType;
  owner?: UserType;
  id?: ResourceIdType;
  name?: string;
  event?: string;
  enabled?: boolean | number;
  createdAt?: string;
  updatedAt?: string;
  statusChangeReason?: string;
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceRefreshStartedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceRefreshSucceededType {
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceRefreshFailedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceUpdatedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceCreatedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventDatasourceDeletedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookUpdatedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookCreatedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookDeletedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventViewDeletedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookRefreshStartedType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookRefreshSucceededType {
  [k: string]: unknown;
}
export interface WebhookSourceEventWorkbookRefreshFailedType {
  [k: string]: unknown;
}
export interface WebhookDestinationHttpType {
  method?: "POST";
  url?: string;
  [k: string]: unknown;
}
export interface SubscriptionType {
  content: SubscriptionContentType;
  schedule: ScheduleType;
  user: UserType;
  id?: ResourceIdType;
  subject: string;
  attachImage?: boolean | number;
  attachPdf?: boolean | number;
  [k: string]: unknown;
}
export interface SubscriptionContentType {
  id: ResourceIdType;
  type: "Workbook" | "View";
  name?: unknown;
  [k: string]: unknown;
}
export interface TaskRunFlowType {
  schedule?: ScheduleType;
  flow: FlowType;
  id?: string;
  priority?: number;
  consecutiveFailedCount?: number;
  type?: string;
  [k: string]: unknown;
}
export interface BackgroundJobType {
  id?: ResourceIdType;
  status?: "Pending" | "InProgress" | "Success" | "Failed" | "Cancelled";
  createdAt?: string;
  startedAt?: string;
  endedAt?: string;
  priority?: number;
  jobType?: string;
  title?: string;
  subtitle?: string;
  [k: string]: unknown;
}
export interface BackgroundJobListType {
  backgroundJob?: BackgroundJobType | BackgroundJobType[];
  [k: string]: unknown;
}
export interface DataAlertListType {
  dataAlert?: DataAlertType | DataAlertType[];
  [k: string]: unknown;
}
export interface DataQualityWarningListType {
  dataQualityWarning?: DataQualityWarningType | DataQualityWarningType[];
  [k: string]: unknown;
}
export interface ErrorType {
  summary: string;
  detail: string;
  code: number;
  [k: string]: unknown;
}
export interface FavoriteListType {
  favorite?: FavoriteType | FavoriteType[];
  [k: string]: unknown;
}
export interface FileUploadType {
  uploadSessionId: FileUploadSessionIdType;
  fileSize?: number;
  [k: string]: unknown;
}
export interface JobType {
  statusNotes?: StatusNoteListType;
  extractRefreshJob?: ExtractRefreshJobType;
  runFlowJobType?: RunFlowJobType;
  id?: ResourceIdType;
  mode?: "Asynchronous";
  type?: "GroupSync" | "RefreshExtract" | "PublishWorkbook" | "PublishDatasource" | "RunFlow";
  progress?: number;
  createdAt?: string;
  startedAt?: string;
  updatedAt?: string;
  completedAt?: string;
  finishCode?: number;
  [k: string]: unknown;
}
export interface StatusNoteListType {
  statusNote?: StatusNoteType | StatusNoteType[];
  [k: string]: unknown;
}
export interface StatusNoteType {
  type:
    | "CountOfUsersAddedToGroup"
    | "CountOfUsersAddedToSite"
    | "CountOfUsersWithInsufficientLicenses"
    | "CountOfUsersInActiveDirectoryGroup"
    | "CountOfUsersProcessed"
    | "CountOfUsersSkipped"
    | "CountOfUsersInformationUpdated"
    | "CountOfUsersSiteRoleUpdated"
    | "CountOfUsersRemovedFromGroup"
    | "CountOfUsersUnlicensed";
  value?: string;
  text?: string;
  [k: string]: unknown;
}
export interface RunFlowJobType {
  notes: string;
  flow: FlowType;
  flowRunId?: string;
  [k: string]: unknown;
}
export interface ServerInfo {
  productVersion: ProductVersion;
  prepConductorVersion: string;
  restApiVersion: RestApiVersion;
  platform: string;
  serverSettings: ServerSettings;
  [k: string]: unknown;
}
export interface ServerSettings {
  oAuthEnabled: boolean | number;
  sheetImageMaxAgeFloor: number;
  sheetImageMaxAgeCeiling: number;
  offlineInteractionSupportedPhase: number;
  [k: string]: unknown;
}
export interface WebhookListType {
  webhook?: WebhookType | WebhookType[];
  [k: string]: unknown;
}
export interface WebhookTestResultType {
  body: string;
  id?: ResourceIdType;
  status?: number;
  [k: string]: unknown;
}
export interface TaskListType {
  task?: TaskType | TaskType[];
  [k: string]: unknown;
}
export interface DegradationListType {
  degradation?: DegradationType | DegradationType[];
  [k: string]: unknown;
}
export interface DegradationType {
  name?: string;
  severity?: string;
  [k: string]: unknown;
}
export interface ListFieldConceptsType {
  fieldConcepts?: FieldConceptType | FieldConceptType[];
  nextPageToken: string;
  [k: string]: unknown;
}
export interface FieldMatchListType {
  fieldMatch?: FieldMatchType | FieldMatchType[];
  [k: string]: unknown;
}
export interface FieldMatchType {
  fieldConceptURI: string;
  weight: number;
  fieldConcept?: FieldConceptType;
  valueMatches?: ValueMatchType | ValueMatchType[];
  [k: string]: unknown;
}
export interface ValueMatchType {
  value?: SemanticsValueType;
  weight?: number;
  valueConcept?: ValueConceptType;
  valueConceptURI?: string;
  fieldConceptURI?: string;
  [k: string]: unknown;
}
export interface ValueConceptType {
  uri: string;
  fieldConceptURI: string;
  names?: NameType | NameType[];
  nameCharacteristics?: NameCharacteristicsType;
  description?: string;
  parentValueConceptURI?: string;
  value?: SemanticsValueType;
  [k: string]: unknown;
}
export interface MatchValuesResultType {
  averageMatchWeight?: number;
  valueMatches?: ValueMatchType | ValueMatchType[];
  [k: string]: unknown;
}
export interface ValueConceptCountType {
  count: number;
  [k: string]: unknown;
}
export interface ListValueConceptsType {
  valueConcepts?: ValueConceptType | ValueConceptType[];
  nextPageToken?: string;
  [k: string]: unknown;
}
export interface IndexingStatusType {
  indexingStatusCode: string;
  indexingErrorCode: string;
  indexedValueConceptVersion?: number;
  [k: string]: unknown;
}
export interface DatabaseIdListType {
  database?: DatabaseIdType | DatabaseIdType[];
  [k: string]: unknown;
}
export interface PaginationType {
  pageNumber: number;
  pageSize: number;
  totalAvailable: number;
  [k: string]: unknown;
}
export interface ColumnListType {
  column?: ColumnType | ColumnType[];
  [k: string]: unknown;
}
export interface DatabaseListType {
  database?: DatabaseType | DatabaseType[];
  [k: string]: unknown;
}
export interface DataSourceListType {
  datasource?: DataSourceType | DataSourceType[];
  [k: string]: unknown;
}
export interface ExtractListType {
  extract?: ExtractType | ExtractType[];
  [k: string]: unknown;
}
export interface FlowListType {
  flow?: FlowType | FlowType[];
  [k: string]: unknown;
}
export interface FlowOutputStepListType {
  flowOutputStep?: FlowOutputStepType | FlowOutputStepType[];
  [k: string]: unknown;
}
export interface FlowOutputStepType {
  id?: ResourceIdType;
  name?: string;
  [k: string]: unknown;
}
export interface GroupListType {
  group?: GroupType | GroupType[];
  [k: string]: unknown;
}
export interface MetricListType {
  metric?: MetricType | MetricType[];
  [k: string]: unknown;
}
export interface ProjectListType {
  project?: ProjectType | ProjectType[];
  [k: string]: unknown;
}
export interface RevisionListType {
  revision?: RevisionType | RevisionType[];
  [k: string]: unknown;
}
export interface RevisionType {
  publisher?: UserType;
  revisionNumber?: number;
  publishedAt?: string;
  deleted?: boolean | number;
  current?: boolean | number;
  sizeInBytes?: number;
  [k: string]: unknown;
}
export interface ScheduleListType {
  schedule?: ScheduleType | ScheduleType[];
  [k: string]: unknown;
}
export interface SiteListType {
  site?: SiteType | SiteType[];
  [k: string]: unknown;
}
export interface TableListType {
  table?: TableType | TableType[];
  [k: string]: unknown;
}
export interface UserListType {
  user?: UserType | UserType[];
  [k: string]: unknown;
}
export interface WorkbookListType {
  workbook?: WorkbookType | WorkbookType[];
  [k: string]: unknown;
}
export interface SubscriptionListType {
  subscription?: SubscriptionType | SubscriptionType[];
  [k: string]: unknown;
}



class WrappedApiCalls {
    /**
     * Signs you in as a user on the specified site on Tableau Server. This call returns a credentials token that you use in subsequent calls to the server. Typically, a credentials token is valid for 240 minutes. You can change this timeout by using the tsm configuration set(Link opens in a new window) command and setting the wgserver.session.idle_limit option.
     * @param {CredentialsRequest} credentials credentials
     * @returns {Promise<CredentialsResponse>} Promise | undefined
     */
    signIn(credentials: CredentialsRequest): Promise<CredentialsResponse>;
    /**
     * Signs you out of the current session. This call invalidates the authentication token that is created by a call to Sign In.
     * @returns {Promise<any>} Promise | undefined
     */
    signOut(): Promise<any>;
    /**
     * Switches you onto another site without having to provide a user name and password again.
     * @param {SiteRequest} site site
     * @returns {Promise<CredentialsResponse>} Promise | undefined
     */
    switchSite(site: SiteRequest): Promise<CredentialsResponse>;
    /**
     * Creates a site on Tableau Server. To make changes to an existing site, call Update Site. This method is not available for Tableau Online.
     * @param {SiteRequest} site site
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    createSite(site: SiteRequest): Promise<SiteResponse>;
    /**
     * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
     * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
     * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    querySite(
        siteName: string,
        contentUrl: string,
        queryOptions?:
            | {
                  includeUsageFlag: boolean;
              }
            | undefined
    ): Promise<SiteResponse>;
    /**
     * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    querySiteByID(
        queryOptions?:
            | {
                  includeUsageFlag: boolean;
              }
            | undefined
    ): Promise<SiteResponse>;
    /**
     * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
     * @param {string} siteName The name of the site to get information for. If you specify a site name, you must also include the parameter key=name.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    querySiteByName(
        siteName: string,
        queryOptions?:
            | {
                  includeUsageFlag: boolean;
              }
            | undefined
    ): Promise<SiteResponse>;
    /**
     * Returns information about the specified site, with the option to return information about the storage space and user count for the site.
     * @param {string} contentUrl The URL of the site to get information for. If you specify a content URL, you must also include the parameter key=contentUrl.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.includeUsageFlag The boolean flag to include site usage metrics in the response body. If true, then the site element of the response will contain a usage node with the attributes numUsers (number of users) and storage (storage in megabytes). To set the flag to include usage in the response, append includeUsage=true as a querystring element any valid query site URI.
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    querySiteByContentUrl(
        contentUrl: string,
        queryOptions?:
            | {
                  includeUsageFlag: boolean;
              }
            | undefined
    ): Promise<SiteResponse>;
    /**
     * Returns a list of the sites on the server that the caller of this method has access to. This method is not available for Tableau Online.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<SitesResponse>} Promise | undefined
     */
    querySites(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<SitesResponse>;
    /**
     * Gets the details of the views and workbooks on a site that have been most recently created, updated, or accessed by the signed in user. The 24 most recently viewed items are returned, though it may take some minutes after being viewed for an item to appear in the results.
     * @returns {Promise<any>} Promise | undefined
     */
    getRecentlyViewedForSite(): Promise<any>;
    /**
     * Returns all the views for the specified site, optionally including usage statistics.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.getUsageInformation (Optional) true to return usage statistics. The default is false.
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
     * @param {string} queryOptions.filterExpression <parameter documentation missing>
     * @param {string} queryOptions.sortExpression <parameter documentation missing>
     * @returns {Promise<ViewsResponse>} Promise | undefined
     */
    queryViewsForSite(
        queryOptions?:
            | {
                  getUsageInformation: boolean;
                  pageSize: number;
                  pageNumber: number;
                  fieldExpression: string;
                  filterExpression: string;
                  sortExpression: string;
              }
            | undefined
    ): Promise<ViewsResponse>;
    /**
     * Modifies settings for the specified site, including the content URL, administration mode, user quota, state (active or suspended), storage quota, whether flows are enabled, whether subscriptions are enabled, and whether revisions are enabled. If you're working with Tableau Online, this method can also be used to upload a new logo image for the site.
     * @param {SiteRequest} site site
     * @returns {Promise<SiteResponse>} Promise | undefined
     */
    updateSite(site: SiteRequest): Promise<SiteResponse>;
    /**
     * Deletes the specified site.
     * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
     * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSite(siteName: string, contentUrl: string): Promise<any>;
    /**
     * Deletes the specified site.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSiteByID(): Promise<any>;
    /**
     * Deletes the specified site.
     * @param {string} siteName The name of the site to delete. If you specify a site name, you must also include the parameter key=name.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSiteByName(siteName: string): Promise<any>;
    /**
     * Deletes the specified site.
     * @param {string} contentUrl The URL of the site to delete. If you specify a content URL, you must also include the parameter key=contentUrl.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSiteByContentUrl(contentUrl: string): Promise<any>;
    /**
     * Deletes the specified data-driven alert from the specified site.
     * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataDrivenAlert(dataAlertId: string): Promise<any>;
    /**
     * Returns details on a specified data-driven alert, including the recipients of the alert.
     * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
     * @returns {Promise<DataAlertResponse>} Promise | undefined
     */
    queryDataDrivenAlertDetails(dataAlertId: string): Promise<DataAlertResponse>;
    /**
     * Returns a list of data-driven alerts in use on the specified site.
     * @returns {Promise<DataAlertsResponse>} Promise | undefined
     */
    queryDataDrivenAlerts(): Promise<DataAlertsResponse>;
    /**
     * Adds a specified user to the recipients list for a data-driven alert.
     * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
     * @param {UserRequest} user user
     * @returns {Promise<UserResponse>} Promise | undefined
     */
    addUserToDataDrivenAlert(dataAlertId: string, user: UserRequest): Promise<UserResponse>;
    /**
     * Removes a specified user from the recipients list for a data-driven alert.
     * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
     * @param {string} userId The ID (not name) of the user to remove from the data-driven alert.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteUserFromDataDrivenAlert(dataAlertId: string, userId: string): Promise<any>;
    /**
     * Update one or more settings for the specified data-driven alert; including the alert subject, frequency, and owner.
     * @param {string} dataAlertId The ID of the data-driven alert. You can obtain this ID by calling Query Data-Driven Alerts.
     * @param {DataAlertRequest} dataAlert dataAlert
     * @returns {Promise<DataAlertResponse>} Promise | undefined
     */
    updateDataDrivenAlert(
        dataAlertId: string,
        dataAlert: DataAlertRequest
    ): Promise<DataAlertResponse>;
    /**
     * Adds permissions to the specified flow for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
     * @param {string} flowId <parameter documentation missing>
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    addFlowPermissions(
        flowId: string,
        permissions: PermissionsRequest
    ): Promise<PermissionsResponse>;
    /**
     * Note: This method is unavailable if you do not have the Data Management Add-on or Tableau Prep Conductor is disabled for your site.
     * @param {string} scheduleId The ID of the schedule that you are associating with the flow. The schedule that you are adding to must have Flow as the schedule type.
     * @param {TaskRequest} task task
     * @returns {Promise<any>} Promise | undefined
     */
    addFlowTaskToSchedule(scheduleId: string, task: TaskRequest): Promise<any>;
    /**
     * Deletes a flow. When a flow is deleted, its associated connections, the output and input steps, any associated scheduled tasks, and run history are also deleted.
     * @param {string} flowId The ID of the flow to delete.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteFlow(flowId: string): Promise<any>;
    /**
     * Deletes the specified permission from the specified flow for a group or user.
     * @param {string} flowId The ID of the flow to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteFlowPermission(
        flowId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes the specified permission from the specified flow for a group or user.
     * @param {string} flowId The ID of the flow to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteFlowPermissionsForGroup(
        flowId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes the specified permission from the specified flow for a group or user.
     * @param {string} flowId The ID of the flow to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a flow are ChangeHierarchy, ChangePermissions, Delete, Execute, ExportXml (Download), Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteFlowPermissionsForUser(
        flowId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Downloads a flow in .tlsx format.
     * @param {string} flowId The ID of the flow to download.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadFlow(flowId: string): Promise<any>;
    /**
     * Returns information about the specified flow run task. This method shows you information about the scheduled task for the flow.
     * @param {string} taskId The ID of the scheduled flow run task that you want information about.
     * @returns {Promise<any>} Promise | undefined
     */
    getFlowRunTask(taskId: string): Promise<any>;
    /**
     * Returns a list of scheduled flow tasks for the site.
     * @returns {Promise<any>} Promise | undefined
     */
    getFlowRunTasks(): Promise<any>;
    /**
     * Publishes a flow on the specified site. To make other changes to a published flow, call Update Flow or Update Flow Connection.
     * @param {FlowRequest} flow flow
     * @param {Object} file File Contents
     * @returns {Promise<any>} Promise | undefined
     */
    publishFlow(flow: FlowRequest, file: any): Promise<any>;
    /**
     * Returns information about the specified flow, including information about the project, owner, and output steps.
     * @param {string} flowId The ID of the flow to return information about.
     * @returns {Promise<any>} Promise | undefined
     */
    queryFlow(flowId: string): Promise<any>;
    /**
     * Returns a list of data connections for the specific flow.
     * @param {string} flowId The ID of the flow to return connection information about.
     * @returns {Promise<any>} Promise | undefined
     */
    queryFlowConnections(flowId: string): Promise<any>;
    /**
     * Returns a list of permissions for the specific flow.
     * @param {string} flowId The ID of the flow to get permissions for.
     * @returns {Promise<any>} Promise | undefined
     */
    queryFlowPermissions(flowId: string): Promise<any>;
    /**
     * Returns the flows on a site. If the user is not an administrator, the method returns just the flows that the user has permissions to view.
     * @returns {Promise<any>} Promise | undefined
     */
    queryFlowsForSite(): Promise<any>;
    /**
     * Returns the flows that the specified user owns in addition to those that the user has Read (view) permissions for.
     * @param {string} userId The ID of the user to get flows for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.isOwner (Optional) trueto return only flows that the specified user owns, or falseto return all flows that the specified user has at least read access to. The default is false.
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<any>} Promise | undefined
     */
    queryFlowsForUser(
        userId: string,
        queryOptions?:
            | {
                  isOwner: boolean;
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<any>;
    /**
     * Runs the specified flow run task.
     * @param {string} taskId The ID of the flow run task that you want to run.
     * @returns {Promise<any>} Promise | undefined
     */
    runFlowTask(taskId: string): Promise<any>;
    /**
     * Updates the owner, project, of the specified flow.
     * @param {string} flowId <parameter documentation missing>
     * @returns {Promise<any>} Promise | undefined
     */
    updateFlow(flowId: string): Promise<any>;
    /**
     * Updates the server address, port, username, or password for the specified flow connection. The connection can be an input or an output connection.
     * @param {string} flowId The ID of the flow to update.
     * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a flow, call Query Flow Connections.
     * @returns {Promise<any>} Promise | undefined
     */
    updateFlowConnection(flowId: string, connectionId: string): Promise<any>;
    /**
     * Creates a project on the specified site. You can also create project hierarchies by creating a project under the specified parent project on the site. To make changes to an existing project, call Update Project.
     * @param {ProjectRequest} project project
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.publishValue (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
     * @returns {Promise<ProjectResponse>} Promise | undefined
     */
    createProject(
        project: ProjectRequest,
        queryOptions?:
            | {
                  publishValue: boolean;
              }
            | undefined
    ): Promise<ProjectResponse>;
    /**
     * Returns a list of projects on the specified site, with optional parameters for specifying the paging of large results.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name, ownerName, and parentProjectId. You can include multiple filter expressions. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
     * @returns {Promise<ProjectsResponse>} Promise | undefined
     */
    queryProjects(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
                  filterExpression: string;
                  sortExpression: string;
              }
            | undefined
    ): Promise<ProjectsResponse>;
    /**
     * Updates the name, description, or project hierarchy of the specified project. You can create or update project hierarchies by specifying a parent project for the project that you are updating using this method.
     * @param {string} projectId The ID of the project to update.
     * @param {ProjectRequest} project project
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.publishValue (Optional) A Boolean value that specifies whether to publish the sample workbooks provided by Tableau to the project when you update the project. When the publish-value is not specified in the request, or the publishSamples parameter is missing, no samples will be published. To publish the sample workbooks, set publishSamples parameter to true. This option is equivalent to the tabcmd command-line utility option, publishsamples. For more information, see tabcmd(Link opens in a new window).
     * @returns {Promise<ProjectResponse>} Promise | undefined
     */
    updateProject(
        projectId: string,
        project: ProjectRequest,
        queryOptions?:
            | {
                  publishValue: boolean;
              }
            | undefined
    ): Promise<ProjectResponse>;
    /**
     * Deletes the specified project on a specific site. When a project is deleted, all of its assets are also deleted: associated workbooks, data sources, project view options, and rights. Use this method with caution.
     * @param {string} projectId The ID of the project to delete.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteProject(projectId: string): Promise<any>;
    /**
     * Publishes a workbook on the specified site. To make changes to a published workbook, call Update Workbook or Update Workbook Connection.
     * @param {WorkbookRequest} workbook workbook
     * @param {Object} file File Contents
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.overwriteFlag (Optional) true to overwrite a workbook that has the same name, or false to fail if the specified workbook already exists. The default is false. If overwrite-flag is set to true but the workbook doesn't already exist, the operation succeeds.
     * @param {boolean} queryOptions.asJobValue (Optional, boolean) If false, the workbook publishing process runs as a synchronous process. If a workbook is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job. Default value is false.
     * @param {boolean} queryOptions.skipConnectionCheckFlag (Optional, boolean) If true, then the Tableau server will not check if a non-published connection of a workbook is reachable. Publishing will succeed but unchecked connection issues may result in a non-functioning workbook. If you encounter this issue, follow Keep Data Fresh guidelines(Link opens in a new window). Default value is false.
     * @param {string} queryOptions.uploadSessionId If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
     * @param {string} queryOptions.workbookFileType twb or twbx to indicate whether you have uploaded a workbook file (twb) or a packaged workbook file (twbx). This value is required if you are calling Publish Workbook in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
     * @returns {Promise<WorkbookResponse>} Promise | undefined
     */
    publishWorkbook(
        workbook: WorkbookRequest,
        file: any,
        queryOptions?:
            | {
                  overwriteFlag: boolean;
                  asJobValue: boolean;
                  skipConnectionCheckFlag: boolean;
                  uploadSessionId: string;
                  workbookFileType: string;
              }
            | undefined
    ): Promise<WorkbookResponse>;
    /**
     * Adds one or more tags to the specified view.
     * @param {string} viewId The ID of the views to add tags to.
     * @param {TagsRequest} tags tags
     * @returns {Promise<TagsResponse>} Promise | undefined
     */
    addTagsToView(viewId: string, tags: TagsRequest): Promise<TagsResponse>;
    /**
     * Adds one or more tags to the specified workbook.
     * @param {string} workbookId The ID of the workbook to add tags to.
     * @param {TagsRequest} tags tags
     * @returns {Promise<TagsResponse>} Promise | undefined
     */
    addTagsToWorkbook(workbookId: string, tags: TagsRequest): Promise<TagsResponse>;
    /**
     * Returns all the views for the specified workbook, optionally including usage statistics.
     * @param {string} workbookId The ID of the workbook to get the views for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.getUsageInformation true to return usage statistics. The default is false.
     * @returns {Promise<ViewsResponse>} Promise | undefined
     */
    queryViewsForWorkbook(
        workbookId: string,
        queryOptions?:
            | {
                  getUsageInformation: boolean;
              }
            | undefined
    ): Promise<ViewsResponse>;
    /**
     * Returns a specified view rendered as data in comma-separated-value (CSV) format.
     * @param {string} viewId The ID of the view to render as data.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes view data will be cached before being refreshed. To prevent multiple view data requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
     * @returns {Promise<any>} Promise | undefined
     */
    queryViewData(
        viewId: string,
        queryOptions?:
            | {
                  maxAgeMinutes: number;
                  filterValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Returns an image of the specified view.
     * @param {string} viewId The ID of the view to return an image for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.imageResolution (Optional) The resolution of the image. Image width and actual pixel density are determined by the display context of the image. Aspect ratio is always preserved. Set the value to high to ensure maximum pixel density.
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a view image will be cached before being refreshed. To prevent multiple image requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
     * @returns {Promise<any>} Promise | undefined
     */
    queryViewImage(
        viewId: string,
        queryOptions?:
            | {
                  imageResolution: string;
                  maxAgeMinutes: number;
                  filterValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Returns a specified view rendered as a .pdf file.
     * @param {string} viewId The ID of the view to render as a .pdf file.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.filterValue The value of the field that you want to use to filter the workbook view. For example, a workbook with the filter /data?vf_year=2017 would only display data from the year 2017. To learn more, see Filter query views.
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a view PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @param {string} queryOptions.pageOrientation (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
     * @param {string} queryOptions.pageType (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
     * @returns {Promise<any>} Promise | undefined
     */
    queryViewPDF(
        viewId: string,
        queryOptions?:
            | {
                  filterValue: string;
                  maxAgeMinutes: number;
                  pageOrientation: string;
                  pageType: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Returns the thumbnail image for the specified view.
     * @param {string} workbookId The ID of the workbook that contains the view to return a thumbnail image for.
     * @param {string} viewId The ID of the view to return a thumbnail image for.
     * @returns {Promise<any>} Promise | undefined
     */
    queryViewPreviewImage(workbookId: string, viewId: string): Promise<any>;
    /**
     * Returns information about the specified workbook, including information about views and tags.
     * @param {string} workbookId The ID of the workbook to return information about.
     * @returns {Promise<WorkbookResponse>} Promise | undefined
     */
    queryWorkbook(workbookId: string): Promise<WorkbookResponse>;
    /**
     * Returns a list of data connections for the specific workbook.
     * @param {string} workbookId The ID of the workbook to return connection information about.
     * @returns {Promise<ConnectionsResponse>} Promise | undefined
     */
    queryWorkbookConnections(workbookId: string): Promise<ConnectionsResponse>;
    /**
     * Gets the details of a specific view.
     * @param {string} viewId The ID of the view whose details are requested.
     * @returns {Promise<ViewResponse>} Promise | undefined
     */
    getView(viewId: string): Promise<ViewResponse>;
    /**
     * Gets the details of all views in a site with a specified name.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.viewName The name of the view as it appears in the URL to the view. For https://MY_SERVER/#/MY_SITE/views/workbook-name/Sheet1?:iid=1, the name would be Sheet1.
     * @returns {Promise<ViewResponse>} Promise | undefined
     */
    getViewByPath(
        queryOptions?:
            | {
                  viewName: string;
              }
            | undefined
    ): Promise<ViewResponse>;
    /**
     * Gets a list of views that are recommended for a user. Using machine learning, the server will match preferences between similar users and recommend content that is most popular and recently viewed. When a recommended view is selected and not marked as hidden, it appears on the server Home and Recommendations pages.
     * @returns {Promise<any>} Promise | undefined
     */
    getViewRecommendations(): Promise<any>;
    /**
     * Returns a list of revision information (history) for the specified workbook.
     * @param {string} workbookId The ID of the workbook to get revisions for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<RevisionsResponse>} Promise | undefined
     */
    getWorkbookRevisions(
        workbookId: string,
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<RevisionsResponse>;
    /**
     * Hides a view from being recommended by the server by adding it to a list of views that are dismissed for a user. If hidden, a view will not be displayed on the server Home or Recommendation pages.
     * @param {RecommendationDismissalRequest} recommendationDismissal recommendationDismissal
     * @returns {Promise<any>} Promise | undefined
     */
    hideViewRecommendations(recommendationDismissal: RecommendationDismissalRequest): Promise<any>;
    /**
     * Unhides a view from being recommended by the server by removing it from the list of views that are dimissed for a user. If the unhidden view meets the criteria for being recommended, then it will be displayed on the server Home or Recommendation pages.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.viewLuid The LUID of the view to be removed from the list of views hidden from recommendation for a user.
     * @returns {Promise<any>} Promise | undefined
     */
    unhideViewRecommendations(
        queryOptions?:
            | {
                  viewLuid: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Returns the thumbnail image as a PNG file for the specified workbook. Usually the image that is returned is for the first sheet in the workbook.
     * @param {string} workbookId The ID of the workbook to return the thumbnail image for.
     * @returns {Promise<any>} Promise | undefined
     */
    queryWorkbookPreviewImage(workbookId: string): Promise<any>;
    /**
     * Returns the workbooks on a site.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of workbooks to return. You can filter on predefined fields such as name, tags, and createdAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which workbook information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the workbooks or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
     * @returns {Promise<WorkbooksResponse>} Promise | undefined
     */
    queryWorkbooksForSite(
        queryOptions?:
            | {
                  filterExpression: string;
                  sortExpression: string;
                  pageSize: number;
                  pageNumber: number;
                  fieldExpression: string;
              }
            | undefined
    ): Promise<WorkbooksResponse>;
    /**
     * Returns the workbooks that the specified user owns in addition to those that the user has Read (view) permissions for.
     * @param {string} userId The ID of the user to get workbooks for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.isOwner (Optional) true to return only workbooks that the specified user owns, or false to return all workbooks that the specified user has at least read access to. The default is false.
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<WorkbooksResponse>} Promise | undefined
     */
    queryWorkbooksForUser(
        userId: string,
        queryOptions?:
            | {
                  isOwner: boolean;
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<WorkbooksResponse>;
    /**
     * Downloads an Excel (.xlsx) file containing crosstab data from a view that the user has permission to access in a workbook. If a crosstab is exported from a dashboard, data from only the first view in the dashboard will appear in the .xlsx file. Downloads of data from story dashboards are not supported at this time.
     * @param {string} viewId The ID of the view to use as the source of the crosstab to be downloaded as an .xlsx file.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes an .xlsx file will be cached on the server before being refreshed. To prevent multiple .xlsx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadViewCrosstabExcel(
        viewId: string,
        queryOptions?:
            | {
                  maxAgeMinutes: number;
              }
            | undefined
    ): Promise<any>;
    /**
     * Downloads a workbook in .twb or .twbx format.
     * @param {string} workbookId The ID of the workbook to download.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadWorkbook(
        workbookId: string,
        queryOptions?:
            | {
                  extractValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Downloads a .pdf containing images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pdf file.
     * @param {string} workbookId The ID of the workbook to use as the source of the .pdf file to be downloaded.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a workbook PDF will be cached before being refreshed. To prevent multiple PDF requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @param {string} queryOptions.pageOrientation (Optional) The orientation of the pages in the .pdf file produced. The value can be Portrait or Landscape. If this parameter is not present the page orientation will default to Portrait.
     * @param {string} queryOptions.pageType (Optional) The type of page, which determines the page dimensions of the .pdf file returned. The value can be: A3, A4, A5, B5, Executive, Folio, Ledger, Legal, Letter, Note, Quarto, or Tabloid. If this parameter is not present the page type will default to Legal.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadWorkbookPDF(
        workbookId: string,
        queryOptions?:
            | {
                  maxAgeMinutes: number;
                  pageOrientation: string;
                  pageType: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Downloads a PowerPoint (.pptx) file containing slides with images of the sheets that the user has permission to view in a workbook. Download Images/PDF permissions must be enabled for the workbook (true by default). If Show sheets in tabs is not selected for the workbook, only the default tab will appear in the .pptx file.
     * @param {string} workbookId The ID of the workbook to use as the source of the .pptx file to be downloaded.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.maxAgeMinutes (Optional) The maximum number of minutes a workbook .pptx will be cached before being refreshed. To prevent multiple .pptx requests from overloading the server, the shortest interval you can set is one minute. There is no maximum value, but the server job enacting the caching action may expire before a long cache period is reached.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadWorkbookPowerpoint(
        workbookId: string,
        queryOptions?:
            | {
                  maxAgeMinutes: number;
              }
            | undefined
    ): Promise<any>;
    /**
     * Downloads a specific version of a workbook in .twb or .twbx format.
     * @param {string} workbookId The ID of the workbook to download.
     * @param {number} revisionNumber The revision number of the workbook to download. To determine what versions are available, call Get Workbook Revisions. Note that the current revision of a workbook cannot be accessed by this call; use Download Workbook instead.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the workbook specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the workbook. You can use this option to improve performance if you are downloading workbooks or data sources that have large extracts.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadWorkbookRevision(
        workbookId: string,
        revisionNumber: number,
        queryOptions?:
            | {
                  extractValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Modifies an existing workbook, allowing you to change the owner or project that the workbook belongs to and whether the workbook shows views in tabs. Updated workbooks can optionally be marked to appear in the recently viewed list.
     * @param {string} workbookId The ID of the workbook to update.
     * @param {WorkbookRequest} workbook workbook
     * @returns {Promise<WorkbookResponse>} Promise | undefined
     */
    updateWorkbook(workbookId: string, workbook: WorkbookRequest): Promise<WorkbookResponse>;
    /**
     * Updates the server address, port, username, or password for the specified workbook connection.
     * @param {string} workbookId The ID of the workbook to update.
     * @param {string} connectionId The ID of the connection to update.
     * @param {ConnectionRequest} connection connection
     * @returns {Promise<ConnectionResponse>} Promise | undefined
     */
    updateWorkbookConnection(
        workbookId: string,
        connectionId: string,
        connection: ConnectionRequest
    ): Promise<ConnectionResponse>;
    /**
     * Refreshes the specified workbook.
     * @param {string} workbookId The ID of the workbook to refresh.
     * @returns {Promise<JobResponse>} Promise | undefined
     */
    updateWorkbookNow(workbookId: string): Promise<JobResponse>;
    /**
     * Deletes a workbook. When a workbook is deleted, all of its assets are also deleted, including associated views, data connections, and so on.
     * @param {string} workbookId The ID of the workbook to remove.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteWorkbook(workbookId: string): Promise<any>;
    /**
     * Deletes a tag from the specified view.
     * @param {string} viewId The ID of the view to remove the tag from.
     * @param {string} tagName The name of the tag to remove from the view.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromView(viewId: string, tagName: string): Promise<any>;
    /**
     * Deletes a tag from the specified workbook.
     * @param {string} workbookId The ID of the workbook to remove the tag from.
     * @param {string} tagName The name of the tag to remove from the workbook.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromWorkbook(workbookId: string, tagName: string): Promise<any>;
    /**
     * Returns a report about data acceleration for the site. It lets you compare page load times for before and after data acceleration is enabled.
     * @returns {Promise<DataAccelerationReportResponse>} Promise | undefined
     */
    getDataAccelerationReportForASite(): Promise<DataAccelerationReportResponse>;
    /**
     * Publishes a data source on the specified site, or appends data to an existing data source. To make other changes to a published data source, call Update Data Source or Update Data Source Connection.
     * @param {DatasourceRequest} datasource datasource
     * @param {Object} file File Contents
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.overwriteFlag (Optional) true to overwrite a data source that has the same name, or false to fail if the specified data source already exists. The default is false. If overwrite-flag is set to true but the data source doesn't already exist, the operation succeeds. You can include both the overwrite and append parameters in a request, but they cannot both be true.
     * @param {boolean} queryOptions.asJobValue (Optional) A Boolean value that is used to publish data sources asynchronously. If you set this value to false (the default), the publishing process runs as a synchronous process. If a data source is very large, the process might time out before it finishes. If you set this value to true, the process runs asynchronously, and a job will start to perform the publishing process and return the job ID. You can check the status of the import job by calling Query Job.
     * @param {boolean} queryOptions.appendFlag (Optional) true to append the data being published to an existing data source that has the same name. The default is false. If append-flag is set to true but the data source doesn't already exist, the operation fails. In order to append data to an existing data source, both the data source on the server and the data source you are publishing must be extracts (.tde and .hyper files). The schemas of the two extracts must match. If an extract was stored using the multiple tables option, you can't append data to it.You can include both the overwrite and append parameters in a request, but they cannot both be true.
     * @param {string} queryOptions.uploadSessionId If you are calling this method to commit a file that was uploaded in parts, this value contains the upload session ID that was generated by a call to Initiate File Upload. If this value is not included, the server assumes that the body of the request contains the file to be published.
     * @param {string} queryOptions.datasourceFileType hyper, tds, tdsx, or tde the kind of file that you are uploading. This value is required if you are calling Publish Data Source in order to commit a file that was previously uploaded using Append to File Upload. The value is not used if you upload a file in the body of the request.
     * @returns {Promise<DatasourceResponse>} Promise | undefined
     */
    publishDataSource(
        datasource: DatasourceRequest,
        file: any,
        queryOptions?:
            | {
                  overwriteFlag: boolean;
                  asJobValue: boolean;
                  appendFlag: boolean;
                  uploadSessionId: string;
                  datasourceFileType: string;
              }
            | undefined
    ): Promise<DatasourceResponse>;
    /**
     * Adds one or more tags to the specified data source.
     * @param {string} datasourceId The ID of the data source to add tags to.
     * @param {TagsRequest} tags tags
     * @returns {Promise<TagsResponse>} Promise | undefined
     */
    addTagsToDataSource(datasourceId: string, tags: TagsRequest): Promise<TagsResponse>;
    /**
     * Deletes a tag from the specified data source.
     * @param {string} datasourceId The ID of the data source to remove the tag from.
     * @param {string} tagName The name of the tag to remove from the data source.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromDataSource(datasourceId: string, tagName: string): Promise<any>;
    /**
     * Returns information about the specified data source.
     * @param {string} datasourceId The ID of the data source to get.
     * @returns {Promise<DatasourceResponse>} Promise | undefined
     */
    queryDataSource(datasourceId: string): Promise<DatasourceResponse>;
    /**
     * Returns a list of published data sources on the specified site, with optional parameters for specifying the paging of large results. To get a list of data sources embedded in a workbook, use the Query Workbook Connections method.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of data sources to return. You can filter on predefined fields such as name and updatedAt. You can include multiple filter expressions. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the data sources or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the Rest API.
     * @returns {Promise<DatasourcesResponse>} Promise | undefined
     */
    queryDataSources(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
                  filterExpression: string;
                  sortExpression: string;
                  fieldExpression: string;
              }
            | undefined
    ): Promise<DatasourcesResponse>;
    /**
     * Returns a list of data connections for the specified data source.
     * @param {string} datasourceId The ID of the data source to return connection information about.
     * @returns {Promise<ConnectionsResponse>} Promise | undefined
     */
    queryDataSourceConnections(datasourceId: string): Promise<ConnectionsResponse>;
    /**
     * Returns a list of revision information (history) for the specified data source.
     * @param {string} datasourceId The ID of the data source to get revisions for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<RevisionsResponse>} Promise | undefined
     */
    getDataSourceRevisions(
        datasourceId: string,
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<RevisionsResponse>;
    /**
     * Downloads a data source in .tdsx format.
     * @param {string} datasourceId The ID of the data source to download.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadDataSource(
        datasourceId: string,
        queryOptions?:
            | {
                  extractValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Downloads a specific version of a data source in .tdsx format.
     * @param {string} datasourceId The ID of the data source to download.
     * @param {number} revisionNumber The revision number of the data source to download. To determine what versions are available, call Get Data Source Revisions.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.extractValue (Optional) The extract-value is a Boolean value (False or True). When the data source specified for download has an extract, if you add the parameter ?includeExtract=False, the extract is not included when you download the data source. You can use this parameter to improve performance if you are downloading workbooks or data sources that have large extracts.
     * @returns {Promise<any>} Promise | undefined
     */
    downloadDataSourceRevision(
        datasourceId: string,
        revisionNumber: number,
        queryOptions?:
            | {
                  extractValue: string;
              }
            | undefined
    ): Promise<any>;
    /**
     * Updates the owner, project or certification status of the specified data source.
     * @param {string} datasourceId The ID of the data source to update.
     * @param {DatasourceRequest} datasource datasource
     * @returns {Promise<DatasourceResponse>} Promise | undefined
     */
    updateDataSource(
        datasourceId: string,
        datasource: DatasourceRequest
    ): Promise<DatasourceResponse>;
    /**
     * Updates the server address, port, username, or password for the specified data source connection.
     * @param {string} datasourceId The ID of the data source to update.
     * @param {string} connectionId The ID of the connection to update. To determine what connections are available for a data source, call Query Data Source Connections.
     * @param {ConnectionRequest} connection connection
     * @returns {Promise<ConnectionResponse>} Promise | undefined
     */
    updateDataSourceConnection(
        datasourceId: string,
        connectionId: string,
        connection: ConnectionRequest
    ): Promise<ConnectionResponse>;
    /**
     * Runs an extract refresh on the specified data source.
     * @param {string} datasourceId The ID of the data source to refresh.
     * @returns {Promise<JobResponse>} Promise | undefined
     */
    updateDataSourceNow(datasourceId: string): Promise<JobResponse>;
    /**
     * Deletes the specified data source from a site. When a data source is deleted, its associated data connection is also deleted. Workbooks that use the data source are not deleted, but they will no longer work properly.
     * @param {string} datasourceId The ID of the data source to delete.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataSource(datasourceId: string): Promise<any>;
    /**
     * Removes a specific version of a data source from the specified site.
     * @param {string} datasourceId The ID of the data source to remove the revision for.
     * @param {number} revisionNumber The revision number of the data source to remove. To determine what versions are available, call Get Data Source Revisions.
     * @returns {Promise<any>} Promise | undefined
     */
    removeDataSourceRevision(datasourceId: string, revisionNumber: number): Promise<any>;
    /**
     * Creates a group in Tableau Server. If the server is configured to use Active Directory for authentication, this method can create a group in Tableau Server and then import users from an Active Directory group.
     * @param {GroupRequest} group group
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.asJobValue A Boolean value that is used if you are importing from Active Directory. If you set this to false (the default), the import process runs as a synchronous process. If the Active Directory group contains many users, the process might time out before it finishes.  If you set this to true, the process runs asynchronously. In that case, Tableau Server starts a job to perform the import and returns the job ID in the Location header. You can check the status of the import job by calling Query Job. Note: This parameter has no effect if the server is configured to use local authentication.
     * @returns {Promise<GroupResponse>} Promise | undefined
     */
    createGroup(
        group: GroupRequest,
        queryOptions?:
            | {
                  asJobValue: boolean;
              }
            | undefined
    ): Promise<GroupResponse>;
    /**
     * Adds a user to the specified group.
     * @param {string} groupId The ID of the group to add the user to.
     * @param {UserRequest} user user
     * @returns {Promise<UserResponse>} Promise | undefined
     */
    addUserToGroup(groupId: string, user: UserRequest): Promise<UserResponse>;
    /**
     * Adds a user to Tableau Server and assigns the user to the specified site.
     * @param {UserRequest} user user
     * @returns {Promise<UserResponse>} Promise | undefined
     */
    addUserToSite(user: UserRequest): Promise<UserResponse>;
    /**
     * Gets a list of groups of which the specified user is a member.
     * @param {string} userId The ID of the user whose group memberships are listed.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<GroupsResponse>} Promise | undefined
     */
    getGroupsForAUser(
        userId: string,
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<GroupsResponse>;
    /**
     * Gets a list of users in the specified group.
     * @param {string} groupId The ID of the group to get the users for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<UsersResponse>} Promise | undefined
     */
    getUsersInGroup(
        groupId: string,
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<UsersResponse>;
    /**
     * Returns the users associated with the specified site.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of users to return. You can filter on predefined fields such as name and lastLogin. You can include multiple filter expressions. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.fieldExpression (Optional) An expression that lets you specify the set of available fields to return. You can qualify the return values based upon predefined keywords such as _all_ or _default_, and you can specify individual fields for the views or other supported resources. You can include multiple field expressions in a request. For more information, see Using Fields in the REST API.
     * @returns {Promise<UsersResponse>} Promise | undefined
     */
    getUsersOnSite(
        queryOptions?:
            | {
                  filterExpression: string;
                  sortExpression: string;
                  pageSize: number;
                  pageNumber: number;
                  fieldExpression: string;
              }
            | undefined
    ): Promise<UsersResponse>;
    /**
     * Returns a list of groups on the specified site, with optional parameters for specifying the paging of large results.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @param {string} queryOptions.filterExpression (Optional) An expression that lets you specify a subset of groups to return. You can filter on predefined fields such as name. You can include multiple filter expressions. For more information, see Filtering and Sorting.
     * @param {string} queryOptions.sortExpression (Optional) An expression that lets you specify the order in which user information is returned. If you do not specify a sort expression, the sort order of the information that's returned is undefined. For more information, see Filtering and Sorting.
     * @returns {Promise<GroupsResponse>} Promise | undefined
     */
    queryGroups(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
                  filterExpression: string;
                  sortExpression: string;
              }
            | undefined
    ): Promise<GroupsResponse>;
    /**
     * Returns information about the specified user.
     * @param {string} userId The ID of the user to get information for.
     * @returns {Promise<UserResponse>} Promise | undefined
     */
    queryUserOnSite(userId: string): Promise<UserResponse>;
    /**
     * Updates a group in Tableau Server.
     * @param {string} groupId The ID of the group to update.
     * @param {GroupRequest} group group
     * @returns {Promise<any>} Promise | undefined
     */
    updateGroup(groupId: string, group: GroupRequest): Promise<any>;
    /**
     * Modifies information about the specified user.
     * @param {string} userId The ID of the user to update.
     * @param {UserRequest} user user
     * @returns {Promise<UserResponse>} Promise | undefined
     */
    updateUser(userId: string, user: UserRequest): Promise<UserResponse>;
    /**
     * Removes a user from the specified group.
     * @param {string} groupId The ID of the group to remove the user from.
     * @param {string} userId The ID of the user to remove.
     * @returns {Promise<any>} Promise | undefined
     */
    removeUserFromGroup(groupId: string, userId: string): Promise<any>;
    /**
     * Removes a user from the specified site. If a user still owns content (assets) on Tableau Server, the user cannot be deleted unless the ownership is reassigned first.
     * @param {string} userId The ID of the user to remove.
     * @returns {Promise<any>} Promise | undefined
     */
    removeUserFromSite(userId: string): Promise<any>;
    /**
     * Deletes the group on a specific site. Deleting a group does not delete the users in group, but users are no longer members of the group. Any permissions that were previously assigned to the group no longer apply.
     * @param {string} groupId The ID of the group to delete.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteGroup(groupId: string): Promise<any>;
    /**
     * Get information about a database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryDatabase(databaseId: string): Promise<any>;
    /**
     * Get information about all database assets for a site.
     * @returns {Promise<any>} Promise | undefined
     */
    queryDatabases(): Promise<any>;
    /**
     * Update the database description, certify a database, or assign a contact (must be a Tableau Server or Tableau Online user) to the database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @returns {Promise<any>} Promise | undefined
     */
    updateDatabase(databaseId: string): Promise<any>;
    /**
     * Permanently remove the database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @returns {Promise<any>} Promise | undefined
     */
    removeDatabase(databaseId: string): Promise<any>;
    /**
     * Add permissions to a database asset. To add permissions, the database asset must be associated with a published data source.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDatabasePermissions(databaseId: string, permissions: PermissionsRequest): Promise<any>;
    /**
     * Get information about the permissions on a database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryDatabasePermissions(databaseId: string): Promise<any>;
    /**
     * Applying default permissions to a database functions as a permissions template for the database's children table assets. How default permissions are enforced depends on whether the database is locked or unlocked.
     * @param {string} databaseId The unique ID of the database asset to set default permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDefaultDatabasePermissions(
        databaseId: string,
        permissions: PermissionsRequest
    ): Promise<any>;
    /**
     * Get the default permissions applied to the database asset and its children tables.
     * @param {string} databaseId The unique ID of the database asset to set default permissions for.
     * @returns {Promise<any>} Promise | undefined
     */
    queryDefaultDatabasePermissions(databaseId: string): Promise<any>;
    /**
     * Permanently remove the permissions applied to a database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} userId The unique ID of the user to remove the permissions for.
     * @param {string} groupId The unique ID of the group to remove the permissions for.
     * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
     * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDatabasePermissions(
        databaseId: string,
        userId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Permanently remove the permissions applied to a database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} userId The unique ID of the user to remove the permissions for.
     * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
     * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDatabasePermissionsForGroup(
        databaseId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Permanently remove the permissions applied to a database asset.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} groupId The unique ID of the group to remove the permissions for.
     * @param {string} capabilityName The explicit permissions capability to remove. Capabilities that can be removed are Read, Write, or ChangePermissions.
     * @param {string} capabilityMode The permissions mode to remove. Modes that can be removed are Allow or Deny.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDatabasePermissionsForUser(
        databaseId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} userId <parameter documentation missing>
     * @param {string} capabilityMode <parameter documentation missing>
     * @param {string} groupId <parameter documentation missing>
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultDatabasePermissions(
        databaseId: string,
        userId: string,
        capabilityMode: string,
        groupId: string
    ): Promise<any>;
    /**
     * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} userId <parameter documentation missing>
     * @param {string} capabilityMode <parameter documentation missing>
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultDatabasePermissionsForUser(
        databaseId: string,
        userId: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Permanently remove the default permissions on a database asset. Removing the default permissions from the database asset means that any new child table assets that are indexed by Catalog won't have any default permissions set.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} capabilityMode <parameter documentation missing>
     * @param {string} groupId <parameter documentation missing>
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultDatabasePermissionsForGroup(
        databaseId: string,
        capabilityMode: string,
        groupId: string
    ): Promise<any>;
    /**
     * Get information about a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryTable(tableId: string): Promise<any>;
    /**
     * Get information about all table assets for a site.
     * @returns {Promise<any>} Promise | undefined
     */
    queryTables(): Promise<any>;
    /**
     * Update the table description, certify a table, or a assign a user contact to the table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @param {TableRequest} table table
     * @returns {Promise<any>} Promise | undefined
     */
    updateTable(tableId: string, table: TableRequest): Promise<any>;
    /**
     * Permanently remove the table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @returns {Promise<any>} Promise | undefined
     */
    removeTable(tableId: string): Promise<any>;
    /**
     * Add permissions to a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addTablePermissions(tableId: string, permissions: PermissionsRequest): Promise<any>;
    /**
     * Get information about the permissions on a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryTablePermissions(tableId: string): Promise<any>;
    /**
     * Permanently remove the permissions applied to a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTablePermissions(tableId: string): Promise<any>;
    /**
     * Get information about a column in a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @param {string} columnId The unique ID of the column asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryColumnInATable(tableId: string, columnId: string): Promise<any>;
    /**
     * Get information about the columns in a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @returns {Promise<any>} Promise | undefined
     */
    queryColumnsInATable(tableId: string): Promise<any>;
    /**
     * Update the description of the column.
     * @param {string} tableId The unique ID of the table asset.
     * @param {string} columnId The unique ID of the column asset.
     * @param {ColumnRequest} column column
     * @returns {Promise<any>} Promise | undefined
     */
    updateColumn(tableId: string, columnId: string, column: ColumnRequest): Promise<any>;
    /**
     * Permanently remove the column from a table asset.
     * @param {string} tableId The unique ID of the table asset.
     * @param {string} columnId The unique ID of the column asset.
     * @returns {Promise<any>} Promise | undefined
     */
    removeColumn(tableId: string, columnId: string): Promise<any>;
    /**
     * Create and apply a data quality warning to a database, table, published data source, or flow. Only one data quality warning can be applied to the asset. Adding a data quality warning to the asset that already has one causes an error.
     * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use: databasetabledatasourceflowTypes are not case sensitive.
     * @param {string} contentLuid The unique ID of the asset (database, table, published data source, or flow). This is the same as the content ID.
     * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
     * @returns {Promise<any>} Promise | undefined
     */
    addDataQualityWarning(
        contentType: string,
        contentLuid: string,
        dataQualityWarning: DataQualityWarningRequest
    ): Promise<any>;
    /**
     * Get information about a specific data quality warning.
     * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
     * @returns {Promise<any>} Promise | undefined
     */
    queryDataQualityWarningByID(dataqualitywarningId: string): Promise<any>;
    /**
     * Get information about the data quality warning for the database, table, published data source, or flow.
     * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use one of the following values: databasetabledatasourceflowTypes are not case sensitive.
     * @param {string} contentLuid The unique ID of the content type (database, table, published data source, or flow). This is the same as the content ID.
     * @returns {Promise<any>} Promise | undefined
     */
    queryDataQualityWarningByContent(contentType: string, contentLuid: string): Promise<any>;
    /**
     * Update the warning type, status, and message of a data quality warning.
     * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
     * @param {DataQualityWarningRequest} dataQualityWarning dataQualityWarning
     * @returns {Promise<any>} Promise | undefined
     */
    updateDataQualityWarning(
        dataqualitywarningId: string,
        dataQualityWarning: DataQualityWarningRequest
    ): Promise<any>;
    /**
     * Permanently remove a data quality warning.
     * @param {string} dataqualitywarningId The unique ID of the data quality warning attached to the asset (database, table, published data source, or flow).
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataQualityWarningByID(dataqualitywarningId: string): Promise<any>;
    /**
     * Permanently remove the data quality warning from the database, table, published data source, or flow.
     * @param {string} contentType The type of asset that the data quality warning is being attached to. To specify the type, use:   database  table  datasource  flow   Types are not case sensitive.
     * @param {string} contentLuid The unique ID of the content type(database, table, published data source, or flow). This is the same as the content ID.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataQualityWarningByContent(contentType: string, contentLuid: string): Promise<any>;
    /**
     * Add one or more tags to a database.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {TagsRequest} tags tags
     * @returns {Promise<any>} Promise | undefined
     */
    addTagsToDatabase(databaseId: string, tags: TagsRequest): Promise<any>;
    /**
     * Add one or more tags to a table.
     * @param {string} tableId The unique ID of the column asset.
     * @param {TagsRequest} tags tags
     * @returns {Promise<any>} Promise | undefined
     */
    addTagsToTable(tableId: string, tags: TagsRequest): Promise<any>;
    /**
     * Add one or more tags to a column.
     * @param {string} columnId The unique ID of the column asset.
     * @param {TagsRequest} tags tags
     * @returns {Promise<any>} Promise | undefined
     */
    addTagsToColumn(columnId: string, tags: TagsRequest): Promise<any>;
    /**
     * Add multiple tags to items that are different content and asset types.
     * @param {TagBatchRequest} tagBatch tagBatch
     * @returns {Promise<any>} Promise | undefined
     */
    batchAddTags(tagBatch: TagBatchRequest): Promise<any>;
    /**
     * Delete a tag from a database.
     * @param {string} databaseId The unique ID of the database asset.
     * @param {string} tagName The keyword text of the tag.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromDatabase(databaseId: string, tagName: string): Promise<any>;
    /**
     * Delete a tag from a table.
     * @param {string} tableId The unique ID of the table asset.
     * @param {string} tagName The keyword text of the tag.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromTable(tableId: string, tagName: string): Promise<any>;
    /**
     * Delete a tag from a column.
     * @param {string} columnId The unique ID of the column asset.
     * @param {string} tagName The keyword text of the tag.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteTagFromColumn(columnId: string, tagName: string): Promise<any>;
    /**
     * Delete multiple tags from items that are different content and asset types.
     * @param {TagBatchRequest} tagBatch tagBatch
     * @returns {Promise<any>} Promise | undefined
     */
    batchDeleteTags(tagBatch: TagBatchRequest): Promise<any>;
    /**
     * Removes a specific version of a workbook from the specified site.
     * @param {string} workbookId The ID of the workbook to remove the revision for.
     * @param {number} revisionNumber The revision number of the workbook to remove. To determine what versions are available, call Get Workbook Revisions.
     * @returns {Promise<any>} Promise | undefined
     */
    removeWorkbookRevision(workbookId: string, revisionNumber: number): Promise<any>;
    /**
     * Adds permissions to the specified data source for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
     * @param {string} datasourceId The ID of the data source to set permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDataSourcePermissions(datasourceId: string, permissions: PermissionsRequest): Promise<any>;
    /**
     * Adds permissions to the specified project for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
     * @param {string} projectId The ID of the project to set permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    addProjectPermissions(
        projectId: string,
        permissions: PermissionsRequest
    ): Promise<PermissionsResponse>;
    /**
     * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
     * @param {string} projectId The ID of the project to set default permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDefaultPermissions(projectId: string, permissions: PermissionsRequest): Promise<any>;
    /**
     * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
     * @param {string} projectId The ID of the project to set default permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDefaultPermissionsForWorkbooks(
        projectId: string,
        permissions: PermissionsRequest
    ): Promise<any>;
    /**
     * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
     * @param {string} projectId The ID of the project to set default permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDefaultPermissionsForDatasources(
        projectId: string,
        permissions: PermissionsRequest
    ): Promise<any>;
    /**
     * Adds permissions to the specified project that will be applied by default to new flows, workbooks, and data sources as they are added to the project. You make separate requests to set default permissions for flows, workbooks, and data sources. Flows require Tableau Prep Conductor to be enabled on your Tableau Server. For more information, see Enable Tableau Prep Conductor(Link opens in a new window).
     * @param {string} projectId The ID of the project to set default permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<any>} Promise | undefined
     */
    addDefaultPermissionsForFlows(projectId: string, permissions: PermissionsRequest): Promise<any>;
    /**
     * Adds permissions to the specified view (also known as a sheet) for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
     * @param {string} viewId The ID of the view to set permissions for. You can obtain this ID by calling Query Views for Site.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    addViewPermissions(
        viewId: string,
        permissions: PermissionsRequest
    ): Promise<PermissionsResponse>;
    /**
     * Adds permissions to the specified workbook for a Tableau Server user or group. You can specify multiple sets of permissions using one call.
     * @param {string} workbookId The ID of the workbook to set permissions for.
     * @param {PermissionsRequest} permissions permissions
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    addWorkbookPermissions(
        workbookId: string,
        permissions: PermissionsRequest
    ): Promise<PermissionsResponse>;
    /**
     * Adds a task to refresh or accelerate a workbook to an existing schedule. This method is not available for Tableau Online.
     * @param {string} scheduleId The ID of the schedule that you are associating with the workbook.
     * @param {TaskRequest} task task
     * @returns {Promise<TaskResponse>} Promise | undefined
     */
    addWorkbookToSchedule(scheduleId: string, task: TaskRequest): Promise<TaskResponse>;
    /**
     * Returns a list of permissions for a specific data source.
     * @param {string} datasourceId The ID of the data source to get permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryDataSourcePermissions(datasourceId: string): Promise<PermissionsResponse>;
    /**
     * Returns information about the set of permissions allowed or denied for groups and users in a project.
     * @param {string} projectId The project to get permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryProjectPermissions(projectId: string): Promise<PermissionsResponse>;
    /**
     * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
     * @param {string} projectId The project to get default permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryDefaultPermissions(projectId: string): Promise<PermissionsResponse>;
    /**
     * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
     * @param {string} projectId The project to get default permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryDefaultPermissionsForDatasources(projectId: string): Promise<PermissionsResponse>;
    /**
     * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
     * @param {string} projectId The project to get default permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryDefaultPermissionsForWorkbooks(projectId: string): Promise<PermissionsResponse>;
    /**
     * Returns information about the default permissions for a project that is, the permissions that will be set by default for flows, workbooks, and data sources that are added to the project. You make separate requests to query the default permissions for flows, workbooks, and data sources.
     * @param {string} projectId The project to get default permissions for.
     * @returns {Promise<PermissionsResponse>} Promise | undefined
     */
    queryDefaultPermissionsForFlows(projectId: string): Promise<PermissionsResponse>;
    /**
     * Returns a list of permissions for the specific view.
     * @param {string} viewId The ID of the view to get permissions for.
     * @returns {Promise<ParentResponse>} Promise | undefined
     */
    queryViewPermissions(viewId: string): Promise<ParentResponse>;
    /**
     * Returns a list of permissions for the specific workbook.
     * @param {string} workbookId The ID of the workbook to get permissions for.
     * @returns {Promise<ParentResponse>} Promise | undefined
     */
    queryWorkbookPermissions(workbookId: string): Promise<ParentResponse>;
    /**
     * Removes the specified data source permission for the specified group or user.
     * @param {string} datasourceId The ID of the data source to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataSourcePermission(
        datasourceId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes the specified data source permission for the specified group or user.
     * @param {string} datasourceId The ID of the data source to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataSourcePermissionForGroup(
        datasourceId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes the specified data source permission for the specified group or user.
     * @param {string} datasourceId The ID of the data source to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataSorucePermissionForUser(
        datasourceId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes the specified project permission for the specified group or user.
     * @param {string} projectId The ID of the project to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} userId The ID of the user to remove project the permission for.
     * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteProjectPermission(
        projectId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes the specified project permission for the specified group or user.
     * @param {string} projectId The ID of the project to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteProjectPermissionForGroup(
        projectId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes the specified project permission for the specified group or user.
     * @param {string} projectId The ID of the project to remove the permission for.
     * @param {string} userId The ID of the user to remove project the permission for.
     * @param {string} capabilityName The capability to remove the permission for. In Tableau Server 10.0, valid capabilities for a project are ProjectLeader, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteProjectPermissionForUser(
        projectId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} groupId The ID of the group to remove the default permission for.
     * @param {string} userId The ID of the user to remove default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultPermission(
        projectId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} groupId The ID of the group to remove the default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultWorkbookPermissionForGroup(
        projectId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} userId The ID of the user to remove default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultWorkbookPermissionForUser(
        projectId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} groupId The ID of the group to remove the default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultDatasourcePermissionsForGroup(
        projectId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} groupId The ID of the group to remove the default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultFlowPermissionForGroup(
        projectId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Removes default permissions from a project. After the default permission has been removed, flows, workbooks, or data sources that are added to the project do not get the specified permission by default. You make separate requests to remove default permissions for flows, workbooks, and data sources, and you make separate requests to remove default permissions for a specific group or user.
     * @param {string} projectId The ID of the project to remove the default permission for.
     * @param {string} userId The ID of the user to remove default permission for.
     * @param {string} capabilityName The capability to remove the permissions for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. Valid capabilities for a data source are ChangePermissions, Connect, Delete, ExportXml, Read (view), and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDefaultFlowPermissionForUser(
        projectId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
     * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteViewPermission(
        viewId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
     * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteViewPermissionForGroup(
        viewId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes permission to the specified view (also known as a sheet) for a Tableau Server user or group.
     * @param {string} viewId The ID of the view to delete permissions for. You can obtain this ID by calling Query Views for Site.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. The valid capabilities for a view are AddComment, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write. For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteViewPermissionForUser(
        viewId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes the specified permission from the specified workbook for a group or user.
     * @param {string} workbookId The ID of the workbook to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteWorkbookPermission(
        workbookId: string,
        groupId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes the specified permission from the specified workbook for a group or user.
     * @param {string} workbookId The ID of the workbook to remove the permission for.
     * @param {string} groupId The ID of the group to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteWorkbookPermissionForGroup(
        workbookId: string,
        groupId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Deletes the specified permission from the specified workbook for a group or user.
     * @param {string} workbookId The ID of the workbook to remove the permission for.
     * @param {string} userId The ID of the user to remove the permission for.
     * @param {string} capabilityName The capability to remove the permission for. Valid capabilities for a workbook are AddComment, ChangeHierarchy, ChangePermissions, Delete, ExportData, ExportImage, ExportXml, Filter, Read (view), ShareView, ViewComments, ViewUnderlyingData, WebAuthoring, and Write.  For more information, see Permissions.
     * @param {string} capabilityMode Allow to remove the allow permission, or Deny to remove the deny permission. This value is case sensitive.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteWorkbookPermissionForUser(
        workbookId: string,
        userId: string,
        capabilityName: string,
        capabilityMode: string
    ): Promise<any>;
    /**
     * Adds a task to refresh a data source to an existing schedule. This method is not available for Tableau Online.
     * @param {string} scheduleId The ID of the schedule that you are associating with the data source.
     * @param {TaskRequest} task task
     * @returns {Promise<TaskResponse>} Promise | undefined
     */
    addDataSourceToSchedule(scheduleId: string, task: TaskRequest): Promise<TaskResponse>;
    /**
     * Cancels a job specified by job ID. To get a list of job IDs for jobs that are currently queued or in-progress, use the Query Jobs method.
     * @param {string} jobId The ID of the job to cancel.
     * @returns {Promise<any>} Promise | undefined
     */
    cancelJob(jobId: string): Promise<any>;
    /**
     * Returns status information about an asynchronous process that is tracked using a job. This method can be used to query jobs that are used to do the following:
     * @param {string} jobId The ID of the job to get status information for.
     * @returns {Promise<JobResponse>} Promise | undefined
     */
    queryJob(jobId: string): Promise<JobResponse>;
    /**
     * Returns a list of active jobs on the specified site. To get details on a specific job, pass a job ID returned by this method to the Query Job method. To cancel an active job, pass a job ID returned by this method to the Cancel Job method.
     * @returns {Promise<BackgroundJobsResponse>} Promise | undefined
     */
    queryJobs(): Promise<BackgroundJobsResponse>;
    /**
     * Returns information about the specified extract refresh task.
     * @param {string} taskId The ID of the extract refresh that you want information about.
     * @returns {Promise<TaskResponse>} Promise | undefined
     */
    getExtractRefreshTask(taskId: string): Promise<TaskResponse>;
    /**
     * Returns a list of extract refresh tasks for the site.
     * @returns {Promise<TasksResponse>} Promise | undefined
     */
    getExtractRefreshTasks(): Promise<TasksResponse>;
    /**
     * Creates a new schedule on Tableau Server.
     * @param {ScheduleRequest} schedule schedule
     * @returns {Promise<ScheduleResponse>} Promise | undefined
     */
    createSchedule(schedule: ScheduleRequest): Promise<ScheduleResponse>;
    /**
     * Returns a list of the extract refresh tasks for a specified schedule on the specified site.
     * @param {string} scheduleId The ID of the schedule to get extract information for.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<ExtractsResponse>} Promise | undefined
     */
    queryExtractRefreshTasks(
        scheduleId: string,
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<ExtractsResponse>;
    /**
     * Returns a list of flows, extract and subscription schedules. For each schedule, the API returns the name, frequency, priority, and other information.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<SchedulesResponse>} Promise | undefined
     */
    querySchedules(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<SchedulesResponse>;
    /**
     * Runs the specified extract refresh task.
     * @param {string} taskId The ID of the extract refresh task that you want to run.
     * @returns {Promise<JobResponse>} Promise | undefined
     */
    runExtractRefreshTask(taskId: string): Promise<JobResponse>;
    /**
     * Modifies settings for the specified schedule, including the name, priority, and frequency details.
     * @param {string} scheduleId The ID of the schedule to update. To determine what schedules are available, call Query Schedules.
     * @param {ScheduleRequest} schedule schedule
     * @returns {Promise<ScheduleResponse>} Promise | undefined
     */
    updateSchedule(scheduleId: string, schedule: ScheduleRequest): Promise<ScheduleResponse>;
    /**
     * Deletes the specified schedule.
     * @param {string} scheduleId The ID of the schedule to delete. To determine what schedules are available, call Query Schedules.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSchedule(scheduleId: string): Promise<any>;
    /**
     * Deletes a data acceleration task.
     * @param {string} dataAccelerationId The ID of the task to remove.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataAccelerationTask(dataAccelerationId: string): Promise<any>;
    /**
     * Returns a list of data acceleration tasks for the site.
     * @returns {Promise<TasksResponse>} Promise | undefined
     */
    getDataAccelerationTasks(): Promise<TasksResponse>;
    /**
     * Creates a new, unsuspended subscription to a view or workbook for a specific user. When a user is subscribed to the content, Tableau Server sends the content to the user in email on the schedule that's defined in Tableau Server and specified in this call.
     * @param {SubscriptionRequest} subscription subscription
     * @returns {Promise<SubscriptionResponse>} Promise | undefined
     */
    createSubscription(subscription: SubscriptionRequest): Promise<SubscriptionResponse>;
    /**
     * Returns information about the specified subscription.
     * @param {string} subscriptionId The ID of the subscription to get information for.
     * @returns {Promise<SubscriptionResponse>} Promise | undefined
     */
    querySubscription(subscriptionId: string): Promise<SubscriptionResponse>;
    /**
     * Returns a list of all the subscriptions on the specified site.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {number} queryOptions.pageSize (Optional) The number of items to return in one response. The minimum is 1. The maximum is 1000. The default is 100. For more information, see Paginating Results.
     * @param {number} queryOptions.pageNumber (Optional) The offset for paging. The default is 1. For more information, see Paginating Results.
     * @returns {Promise<SubscriptionsResponse>} Promise | undefined
     */
    querySubscriptions(
        queryOptions?:
            | {
                  pageSize: number;
                  pageNumber: number;
              }
            | undefined
    ): Promise<SubscriptionsResponse>;
    /**
     * Modifies an existing subscription, allowing you to change the subject, schedule, and suspension state for the subscription.
     * @param {string} subscriptionId The ID of the subscription to update.
     * @param {SubscriptionRequest} subscription subscription
     * @returns {Promise<SubscriptionResponse>} Promise | undefined
     */
    updateSubscription(
        subscriptionId: string,
        subscription: SubscriptionRequest
    ): Promise<SubscriptionResponse>;
    /**
     * Deletes the specified subscription.
     * @param {string} subscriptionId The ID of the subscription to delete. To determine what subscriptions are available, call Query Subscriptions.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteSubscription(subscriptionId: string): Promise<any>;
    /**
     * Adds the specified data source to the user's favorites.
     * @param {string} userId The ID of the user to add the favorite for.
     * @param {FavoriteRequest} favorite favorite
     * @returns {Promise<FavoritesResponse>} Promise | undefined
     */
    addDataSourceToFavorites(userId: string, favorite: FavoriteRequest): Promise<FavoritesResponse>;
    /**
     * Adds the specified project to a user's favorites.
     * @param {string} userId The ID of the user to add the favorite for.
     * @param {FavoriteRequest} favorite favorite
     * @returns {Promise<FavoritesResponse>} Promise | undefined
     */
    addProjectToFavorites(userId: string, favorite: FavoriteRequest): Promise<FavoritesResponse>;
    /**
     * Adds the specified view to a user's favorites.
     * @param {string} userId The ID of the user to add the favorite for.
     * @param {FavoriteRequest} favorite favorite
     * @returns {Promise<FavoritesResponse>} Promise | undefined
     */
    addViewToFavorites(userId: string, favorite: FavoriteRequest): Promise<FavoritesResponse>;
    /**
     * Adds the specified workbook to a user's favorites.
     * @param {string} userId The ID of the user to add the favorite for.
     * @param {FavoriteRequest} favorite favorite
     * @returns {Promise<FavoritesResponse>} Promise | undefined
     */
    addWorkbookToFavorites(userId: string, favorite: FavoriteRequest): Promise<FavoritesResponse>;
    /**
     * Deletes the specified data source from the user's favorites. If the specified data source is not a favorite, the operation has no effect.
     * @param {string} userId The ID of the user to remove the favorite from.
     * @param {string} datasourceId The ID of the data source to remove from the user's favorites.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteDataSourceFromFavorites(userId: string, datasourceId: string): Promise<any>;
    /**
     * Deletes the specified project from the user's favorites. If the specified project is not a favorite, the operation has no effect.
     * @param {string} userId The ID of the user to remove the favorite from.
     * @param {string} projectId The ID of the project to remove from the user's favorites.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteProjectFromFavorites(userId: string, projectId: string): Promise<any>;
    /**
     * Deletes the specified view from user's favorites. If the specified view is not a favorite, the operation has no effect.
     * @param {string} userId The ID of the user to remove the favorite from.
     * @param {string} viewId The ID of the view to remove from the user's favorites.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteViewFromFavorites(userId: string, viewId: string): Promise<any>;
    /**
     * Deletes a workbook from a user's favorites. If the specified workbook is not a favorite of the specified user, this call has no effect.
     * @param {string} userId The ID of the user to remove the favorite from.
     * @param {string} workbookId The ID of the workbook to remove from the user's favorites.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteWorkbookFromFavorites(userId: string, workbookId: string): Promise<any>;
    /**
     * Returns a list of favorite projects, data sources, views and workbooks for a user.
     * @param {string} userId The ID of the user for which you want to get a list favorites.
     * @returns {Promise<any>} Promise | undefined
     */
    getFavoritesForUser(userId: string): Promise<any>;
    /**
     * Initiates the upload process for a file. After the upload has been initiated, you call Append to File Upload to send individual blocks of the file to the server. When the complete file has been sent to the server, you call Publish Data Source, Publish Flow, or Publish Workbook to commit the upload.
     * @returns {Promise<FileUploadResponse>} Promise | undefined
     */
    initiateFileUpload(): Promise<FileUploadResponse>;
    /**
     * Uploads a block of data and appends it to the data that is already uploaded. This method is called after an upload has been initiated using Initiate File Upload.
     * @param {string} uploadSessionId The ID of the upload session. You get this value when you start an upload session using Initiate File Upload.
     * @param {Object} file File Contents
     * @returns {Promise<FileUploadResponse>} Promise | undefined
     */
    appendToFileUpload(uploadSessionId: string, file: any): Promise<FileUploadResponse>;
    /**
     * Returns the version of Tableau Server and the supported version of the REST API.
     * @returns {Promise<ServerInfoResponse>} Promise | undefined
     */
    serverInfo(): Promise<ServerInfoResponse>;
    /**
     * Returns details of the current session of Tableau Server.
     * @returns {Promise<any>} Promise | undefined
     */
    getCurrentServerSessionDetails(): Promise<any>;
    /**
     * Create an extract for a data source in a site. Optionally, encrypt the extract if the site and workbooks using it are configured to allow it.
     * @param {string} datasourceId The LUID of the datasource.
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.encryptionFlag If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
     * @returns {Promise<any>} Promise | undefined
     */
    createAnExtractForADataSource(
        datasourceId: string,
        queryOptions?:
            | {
                  encryptionFlag: boolean;
              }
            | undefined
    ): Promise<any>;
    /**
     * Delete the extract of a data source in a site.
     * @param {string} datasourceId The LUID of the datasource whose extract is to be deleted.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteAnExtractFromADataSource(datasourceId: string): Promise<any>;
    /**
     * Create extracts for all embedded data sources of a workbook. Optionally, encrypt the extracts if the site and workbook using them are configured to allow it.
     * @param {string} workbookId The LUID of the workbook.
     * @param {DatasourcesRequest} datasources datasources
     * @param {Object} [queryOptions] an object containing the query options for this request
     * @param {boolean} queryOptions.encryptionFlag If true, then Tableau will attempt to encrypt the created extracts. If false, or no encrypt parameter is appended to the URI, then the extract won't be encrypted, unless encryption is enforced by site or workbook configuration. An error will be returned when encrypt equals true and encryption is disabled in the site or workbook.
     * @returns {Promise<any>} Promise | undefined
     */
    createExtractsForEmbeddedDataSourcesInAWorkbook(
        workbookId: string,
        datasources: DatasourcesRequest,
        queryOptions?:
            | {
                  encryptionFlag: boolean;
              }
            | undefined
    ): Promise<any>;
    /**
     * Delete all extracts of embedded data sources in a workbook.
     * @param {string} workbookId <parameter documentation missing>
     * @param {DatasourcesRequest} datasources datasources
     * @returns {Promise<any>} Promise | undefined
     */
    deleteExtractsForEmbeddedDataSourcesInAWorkbook(
        workbookId: string,
        datasources: DatasourcesRequest
    ): Promise<any>;
    /**
     * Deletes an extract refresh task.
     * @param {string} taskId The ID of the extract refresh task to remove.
     * @returns {Promise<any>} Promise | undefined
     */
    deleteExtractRefreshTask(taskId: string): Promise<any>;
    /**
     * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
     * @returns {Promise<any>} Promise | undefined
     */
    encryptExtractsInASite(): Promise<any>;
    /**
     * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
     * @returns {Promise<any>} Promise | undefined
     */
    decryptExtractsInASite(): Promise<any>;
    /**
     * Extract encryption at rest is a data security feature that allows you to encrypt .hyper extracts while they are stored on Tableau Server. For more information, see Extract Encryption at Rest(Link opens in a new window).
     * @returns {Promise<any>} Promise | undefined
     */
    reencryptExtractsInASite(): Promise<any>;
}
