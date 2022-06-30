// type: type
// name: ContentLocationRequestType
export type ContentLocationRequestType =
  | (
      | { location?: LocationType }
      | { noLocation?: NoLocationType }
    )
  | { [k: string]: unknown };


// type: type
// name: DatabaseTypeType
export type DatabaseTypeType = "DatabaseServer" | "File" | "WebDataConnector" | "CloudFile";


// type: type
// name: DataTypeType
export type DataTypeType = "DATA_TYPE_UNSPECIFIED" | "DATE" | "DATETIME" | "STRING" | "INT" | "FLOAT" | "BOOL";


// type: type
// name: ExtractRefreshJobType
export type ExtractRefreshJobType =
  | { view: ViewType }
  | { workbook: WorkbookType }
  | { datasource: DataSourceType };


// type: type
// name: ExtractType
export type ExtractType =
  | { datasource: DataSourceType }
  | { workbook: WorkbookType };


// type: type
// name: FavoriteType
export type FavoriteType =
  | { view: ViewType }
  | { workbook: WorkbookType }
  | { datasource: DataSourceType }
  | { project: ProjectType }
  | { flow: FlowType }
  | { metric: MetricType }
  | { collection: CollectionType };


// type: type
// name: FavoriteTypeType
export type FavoriteTypeType =
  | "view"
  | "workbook"
  | "flow"
  | "metric"
  | "datasource"
  | "project"
  | "datarole"
  | "collection";


// type: type
// name: FieldRoleType
export type FieldRoleType = "FIELD_ROLE_UNSPECIFIED" | "DIMENSION" | "MEASURE";


// type: type
// name: FileUploadSessionIdType
export type FileUploadSessionIdType = string;


// type: type
// name: FlowParameterListDomainType
export type FlowParameterListDomainType = FlowParameterDomainType & {
  values: FlowParameterListValueListType;
};


// type: type
// name: FlowParameterRangeDomainType
export type FlowParameterRangeDomainType = FlowParameterDomainType & {
  "minValue"?: string;
  "maxValue"?: string;
  "stepSize"?: string;
  "dateValueIncrement"?: string;
};


// type: type
// name: FlowWarningsListContainerType
export type FlowWarningsListContainerType =
  | { connectionWarnings?: WarningListType }
  | { nodeWarnings?: WarningListType };


// type: type
// name: GranteeCapabilitiesType
export type GranteeCapabilitiesType =
  | { group: GroupType }
  | { user: UserType };



// type: type
// name: ImportSourceType
export type ImportSourceType = "ActiveDirectory";


// type: type
// name: NameCharacteristicsType
export type NameCharacteristicsType =
  | { textPattern?: TextPatternType }
  | { [k: string]: unknown };


// type: type
// name: PaginatedResponseGroup
export type PaginatedResponseGroup =
  | { columns: ColumnListType }
  | { databases: DatabaseListType }
  | { datasources: DataSourceListType }
  | { extracts: ExtractListType }
  | { flows: FlowListType }
  | { flowOutputSteps: FlowOutputStepListType }
  | { flowRuns: FlowRunListType }
  | { groups: GroupListType }
  | { metrics: MetricListType }
  | { projects: ProjectListType }
  | { revisions: RevisionListType }
  | { schedules: ScheduleListType }
  | { sites: SiteListType }
  | { tables: TableListType }
  | { users: UserListType }
  | { workbooks: WorkbookListType }
  | { subscriptions: SubscriptionListType };


// type: type
// name: PermissionsType
export type PermissionsType =
  | (
      | { flow: FlowType }
      | { datasource: DataSourceType }
      | { project: ProjectType }
      | { view: ViewType }
      | { workbook: WorkbookType }
      | { metric: MetricType }
    )
  | { [k: string]: unknown };


// type: type
// name: ProductVersion
export type ProductVersion = string;


// type: type
// name: ResourceIdType
export type ResourceIdType = string;


// type: type
// name: RestApiVersion
export type RestApiVersion = string;


// type: type
// name: RevisionLimitType
export type RevisionLimitType = "-1";


// type: type
// name: SemanticsValueType
export type SemanticsValueType =
  | (
      | { numberValue?: number }
      | { stringValue?: string }
      | { timeValue?: string }
      | { boolValue?: boolean | number }
    )
  | { [k: string]: unknown };


// type: type
// name: SeverityLevelType
export type SeverityLevelType = "critical" | "error" | "warn" | "info";


// type: type
// name: SiteCapacityType
export type SiteCapacityType = number;


// type: type
// name: SiteQuotaType
export type SiteQuotaType = number;


// type: type
// name: SiteRoleType
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


// type: type
// name: SiteUserAuthSettingType
export type SiteUserAuthSettingType = "ServerDefault" | "SAML";


// type: type
// name: StateType
export type StateType = "Active" | "Suspended";


// type: type
// name: TaskDataAccelerationType
export type TaskDataAccelerationType = {
  workbook: WorkbookType;
};


// type: type
// name: TaskExtractRefreshType
export type TaskExtractRefreshType =
  | { view: ViewType }
  | { workbook: WorkbookType }
  | { datasource: DataSourceType };


// type: type
// name: TaskType
export type TaskType =
  | { extractRefresh: TaskExtractRefreshType }
  | { flowRun: TaskRunFlowType }
  | { dataAcceleration: TaskDataAccelerationType }
  | { schedule?: ScheduleType };


// type: type
// name: TsRequest
export type TsRequest =
  | { broadcastViewSend: BroadcastViewSendType }
  | { column: ColumnType }
  | { connectedApplication: ConnectedApplicationType }
  | { connectedApplications: ConnectedApplicationListType }
  | { connection: ConnectionType }
  | { connections: ConnectionListType }
  | { contentList: ContentListType }
  | { credentials: TableauCredentialsType }
  | { dataAlert: DataAlertType }
  | { dataQualityIndicator: DataQualityIndicatorType }
  | { dataQualityTrigger: DataQualityTriggerType }
  | { dataQualityWarning: DataQualityWarningType }
  | { dataRole: DataRoleType }
  | { database: DatabaseType }
  | { contentLocationRequest: ContentLocationRequestType }
  | { databaseAnchor: DatabaseAnchorRequestType }
  | { databaseGroup: DatabaseGroupType }
  | { datasource: DataSourceType }
  | { distinctValues: DistinctValueListType }
  | { favorite: FavoriteType }
  | { favoriteOrderings: FavoriteOrderingListType }
  | { field: FieldType }
  | { fieldConcept: FieldConceptType }
  | { flow: FlowType }
  | { flowRunSpec: FlowRunSpecType }
  | { flowWarnings: FlowWarningsListContainerType }
  | { group: GroupType }
  | { metric: MetricType }
  | { mobileSecuritySettingsList: MobileSecuritySettingsListType }
  | { permissions: PermissionsType }
  | { project: ProjectType }
  | { schedule: ScheduleType }
  | { site: SiteType }
  | { table: TableType }
  | { tags: TagListType }
  | { user: UserType }
  | { userNotificationsPreference: UserNotificationsPreferenceType }
  | { userNotificationsPreferences: UserNotificationsPreferenceListType }
  | { webhook: WebhookType }
  | { workbook: WorkbookType }
  | { subscription: SubscriptionType }
  | { task: TaskType }
  | { tagBatch: TagBatchType };


// type: type
// name: TsResponse
export type TsResponse =
  | { paginatedResponseGroup: PaginatedResponseGroup }
  | { backgroundJob: BackgroundJobType }
  | { backgroundJobs: BackgroundJobListType }
  | { broadcastView: BroadcastViewType }
  | { broadcastViews: BroadcastViewListType }
  | { column: ColumnType }
  | { connectedApplication: ConnectedApplicationType }
  | { connectedApplications: ConnectedApplicationListType }
  | { connectedApplicationSecret: ConnectedApplicationSecretType }
  | { connection: ConnectionType }
  | { connections: ConnectionListType }
  | { contentLocation: LocationType }
  | { credentials: TableauCredentialsType }
  | { dataAlert: DataAlertType }
  | { dataAlerts: DataAlertListType }
  | { dataQualityIndicator: DataQualityIndicatorType }
  | { dataQualityIndicatorList: DataQualityIndicatorListType }
  | { dataQualityWarning: DataQualityWarningType }
  | { dataQualityWarningList: DataQualityWarningListType }
  | { dataRole: DataRoleType }
  | { database: DatabaseType }
  | { databaseAnchors: DatabaseAnchorResponseListType }
  | { datasource: DataSourceType }
  | { error: ErrorType }
  | { favorites: FavoriteListType }
  | { fileUpload: FileUploadType }
  | { flow: FlowType }
  | { flowRun: FlowRunType }
  | { group: GroupType }
  | { job: JobType }
  | { linkedTaskJob: LinkedTaskJobType }
  | { metric: MetricType }
  | { mobileSecuritySettingsList: MobileSecuritySettingsListType }
  | { permissions: PermissionsType }
  | { personalSpace: PersonalSpaceType }
  | { project: ProjectType }
  | { dataAlertsRecipient: DataAlertsRecipientType }
  | { dataAlertsRecipientList: DataAlertsRecipientListType }
  | { dataQualityTrigger: DataQualityTriggerType }
  | { dataQualityTriggerList: DataQualityTriggerListType }
  | { schedule: ScheduleType }
  | { serverInfo: ServerInfo }
  | { serverSettings: ServerSettings }
  | { site: SiteType }
  | { table: TableType }
  | { tags: TagListType }
  | { user: UserType }
  | { view: ViewType }
  | { views: ViewListType }
  | { webhook: WebhookType }
  | { webhooks: WebhookListType }
  | { webhookTestResult: WebhookTestResultType }
  | { workbook: WorkbookType }
  | { subscription: SubscriptionType }
  | { task: TaskType }
  | { tasks: TaskListType }
  | { warnings: WarningListType }
  | { degradations: DegradationListType }
  | { listFieldConcepts: ListFieldConceptsType }
  | { fieldMatches: FieldMatchListType }
  | { valueMatches: MatchValuesResultType }
  | { valueConceptCount: ValueConceptCountType }
  | { listValueConcepts: ListValueConceptsType }
  | { fieldConcept: FieldConceptType }
  | { getIndexingStatus: IndexingStatusType }
  | { ungroupedDatabases: DatabaseIdListType }
  | { userNotificationsPreference: UserNotificationsPreferenceType }
  | { userNotificationsPreferences: UserNotificationsPreferenceListType }
  | { notificationUpdateStatus: NotificationsPreferenceUpdateStatusListType }
  | { tagBatch: TagBatchType };


// type: type
// name: ValueCharacteristicsType
export type ValueCharacteristicsType =
  | { textPattern?: TextPatternType }
  | { [k: string]: unknown };


// type: type
// name: ValueSourceType
export type ValueSourceType =
  | { datasourceValueStore?: DataSourceValueStoreType }
  | { [k: string]: unknown };


// type: type
// name: WebhookDestinationType
export type WebhookDestinationType = {
  "webhook-destination-http": WebhookDestinationHttpType;
};


// type: type
// name: WebhookSourceType
export type WebhookSourceType =
  | { "webhook-source-event-datasource-refresh-started": WebhookSourceEventDatasourceRefreshStartedType }
  | { "webhook-source-event-datasource-refresh-succeeded": WebhookSourceEventDatasourceRefreshSucceededType }
  | { "webhook-source-event-datasource-refresh-failed": WebhookSourceEventDatasourceRefreshFailedType }
  | { "webhook-source-event-datasource-updated": WebhookSourceEventDatasourceUpdatedType }
  | { "webhook-source-event-datasource-created": WebhookSourceEventDatasourceCreatedType }
  | { "webhook-source-event-datasource-deleted": WebhookSourceEventDatasourceDeletedType }
  | { "webhook-source-event-workbook-updated": WebhookSourceEventWorkbookUpdatedType }
  | { "webhook-source-event-workbook-created": WebhookSourceEventWorkbookCreatedType }
  | { "webhook-source-event-workbook-deleted": WebhookSourceEventWorkbookDeletedType }
  | { "webhook-source-event-view-deleted": WebhookSourceEventViewDeletedType }
  | { "webhook-source-event-workbook-refresh-started": WebhookSourceEventWorkbookRefreshStartedType }
  | { "webhook-source-event-workbook-refresh-succeeded": WebhookSourceEventWorkbookRefreshSucceededType }
  | { "webhook-source-event-workbook-refresh-failed": WebhookSourceEventWorkbookRefreshFailedType };


// type: interface
// name: BackgroundJobListType
export interface BackgroundJobListType {
  backgroundJob?: BackgroundJobType | BackgroundJobType[];
}


// type: interface
// name: BackgroundJobType
export interface BackgroundJobType {
  "id"?: ResourceIdType;
  "status"?: "Pending" | "InProgress" | "Success" | "Failed" | "Cancelled";
  "createdAt"?: string;
  "startedAt"?: string;
  "endedAt"?: string;
  "priority"?: number;
  "jobType"?: string;
  "title"?: string;
  "subtitle"?: string;
}


// type: interface
// name: BroadcastViewListType
export interface BroadcastViewListType {
  broadcast?: BroadcastViewType | BroadcastViewType[];
}


// type: interface
// name: BroadcastViewSendType
export interface BroadcastViewSendType {
  "viewId"?: ResourceIdType;
  "showTabs"?: boolean | number;
  "showWatermark"?: boolean | number;
}


// type: interface
// name: BroadcastViewType
export interface BroadcastViewType {
  view: ViewType;
  "url"?: string;
}


// type: interface
// name: CapabilityType
export interface CapabilityType {
  "name":
    | "AddComment"
    | "ChangeHierarchy"
    | "ChangePermissions"
    | "Connect"
    | "Delete"
    | "Execute"
    | "ExportData"
    | "ExportImage"
    | "ExportXml"
    | "Filter"
    | "ProjectLeader"
    | "Read"
    | "ShareView"
    | "ViewComments"
    | "ViewUnderlyingData"
    | "WebAuthoring"
    | "Write";
  "mode": "Allow" | "Deny";
}


// type: interface
// name: CollectionType
export interface CollectionType {
  owner?: UserType;
  "id"?: ResourceIdType;
  "name"?: string;
  "createdAt"?: string;
  "updatedAt"?: string;
  "description"?: string;
  "permissionedItemCount"?: number;
  "totalItemCount"?: number;
  "visibility"?: string;
}


// type: interface
// name: ColumnListType
export interface ColumnListType {
  column?: ColumnType | ColumnType[];
}


// type: interface
// name: ColumnType
export interface ColumnType {
  site?: SiteType;
  tags: TagListType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "remoteType"?: string;
  "parentTableId"?: ResourceIdType;
  "nullable"?: boolean | number;
}


// type: interface
// name: ConnectedApplicationListType
export interface ConnectedApplicationListType {
  connectedApplication?: ConnectedApplicationType | ConnectedApplicationType[];
}


// type: interface
// name: ConnectedApplicationSecretType
export interface ConnectedApplicationSecretType {
  "value"?: string;
  "id"?: ResourceIdType;
  "createdAt"?: string;
}


// type: interface
// name: ConnectedApplicationType
export interface ConnectedApplicationType {
  secret?: ConnectedApplicationSecretType | ConnectedApplicationSecretType[];
  "name"?: string;
  "enabled"?: boolean | number;
  "clientId"?: ResourceIdType;
  "projectId"?: ResourceIdType;
  "createdAt"?: string;
  "domainSafelist"?: string;
  "unrestrictedEmbedding"?: boolean | number;
}


// type: interface
// name: ConnectionCredentialsType
export interface ConnectionCredentialsType {
  "name"?: string;
  "password"?: string;
  "embed"?: boolean | number;
  "oAuth"?: boolean | number;
}


// type: interface
// name: ConnectionListType
export interface ConnectionListType {
  connection?: ConnectionType | ConnectionType[];
}


// type: interface
// name: ConnectionParamsForAnchorType
export interface ConnectionParamsForAnchorType {
  base64xml: string;
}


// type: interface
// name: ConnectionType
export interface ConnectionType {
  datasource?: DataSourceType;
  connectionCredentials?: ConnectionCredentialsType;
  "id"?: ResourceIdType;
  "type"?: string;
  "dbClass"?: string;
  "scope"?: string;
  "filename"?: string;
  "googleSheetId"?: string;
  "embedPassword"?: boolean | number;
  "serverAddress"?: string;
  "serverPort"?: number;
  "userName"?: string;
  "queryTaggingEnabled"?: string;
  "password"?: string;
}


// type: interface
// name: ContentListType
export interface ContentListType {
  content: ContentTypeAndIdType | ContentTypeAndIdType[];
}


// type: interface
// name: ContentLocationResponseType
export interface ContentLocationResponseType {
  locationMetadataResponse?: LocationMetadataResponseType | LocationMetadataResponseType[];
}



// type: interface
// name: ContentTypeAndIdType
export interface ContentTypeAndIdType {
  "id"?: ResourceIdType;
  "contentType"?: string;
}


// type: interface
// name: DataAccelerationInfoType
export interface DataAccelerationInfoType {
  "accelerationEnabled"?: boolean | number;
  "accelerateNow"?: boolean | number;
}


// type: interface
// name: DataAlertListType
export interface DataAlertListType {
  dataAlert?: DataAlertType | DataAlertType[];
}


// type: interface
// name: DataAlertsRecipientListType
export interface DataAlertsRecipientListType {
  recipient?: DataAlertsRecipientType | DataAlertsRecipientType[];
}


// type: interface
// name: DataAlertsRecipientType
export interface DataAlertsRecipientType {
  "id"?: ResourceIdType;
  "name"?: string;
  "lastSent"?: string;
}


// type: interface
// name: DataAlertType
export interface DataAlertType {
  owner: UserType;
  view: ViewType;
  recipients?: DataAlertsRecipientListType;
  "id"?: ResourceIdType;
  "subject"?: string;
  "creatorId"?: ResourceIdType;
  "createdAt"?: string;
  "updatedAt"?: string;
  "frequency"?: "AsFrequentlyAsPossible" | "Hourly" | "Daily" | "Weekly" | "Once";
  "alertCondition"?: string;
  "alertThreshold"?: string;
}


// type: interface
// name: DatabaseAnchorRequestType
export interface DatabaseAnchorRequestType {
  connectionParams: ConnectionParamsForAnchorType;
  "isArchived"?: boolean | number;
  "datasourceFormattedName"?: string;
  "datasourceName"?: string;
}


// type: interface
// name: DatabaseAnchorResponseListType
export interface DatabaseAnchorResponseListType {
  databaseAnchor: DatabaseAnchorResponseType | DatabaseAnchorResponseType[];
}


// type: interface
// name: DatabaseAnchorResponseType
export interface DatabaseAnchorResponseType {
  tableAnchors: TableAnchorListType;
  "connectionName"?: string;
  "id"?: ResourceIdType;
}


// type: interface
// name: DatabaseGroupType
export interface DatabaseGroupType {
  database?: DatabaseIdType | DatabaseIdType[];
  "metadataDatabaseId"?: ResourceIdType;
}


// type: interface
// name: DatabaseIdListType
export interface DatabaseIdListType {
  database?: DatabaseIdType | DatabaseIdType[];
}


// type: interface
// name: DatabaseIdType
export interface DatabaseIdType {
  "id"?: ResourceIdType;
}


// type: interface
// name: DatabaseListType
export interface DatabaseListType {
  database?: DatabaseType | DatabaseType[];
}


// type: interface
// name: DatabaseType
export interface DatabaseType {
  site?: SiteType;
  contact: UserType;
  certifier: UserType;
  tags: TagListType;
  location: LocationType;
  "id"?: ResourceIdType;
  "name"?: string;
  "connectionType"?: string;
  "isEmbedded"?: boolean | number;
  "description"?: string;
  "isCertified"?: boolean | number;
  "certificationNote"?: string;
  "type"?: DatabaseTypeType;
  "hostName"?: string;
  "port"?: number;
  "filePath"?: string;
  "provider"?: string;
  "mimeType"?: string;
  "fileId"?: string;
  "connectorUrl"?: string;
  "requestUrl"?: string;
  "fileExtension"?: string;
  "contentPermissions"?: "LockedToDatabase" | "ManagedByOwner";
}


// type: interface
// name: DataQualityIndicatorListType
export interface DataQualityIndicatorListType {
  dataQualityIndicator?: DataQualityIndicatorType | DataQualityIndicatorType[];
}


// type: interface
// name: DataQualityIndicatorType
export interface DataQualityIndicatorType {
  site?: SiteType;
  owner?: UserType;
  "id"?: ResourceIdType;
  "userDisplayName"?: string;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "message"?: string;
  "type"?: string;
  "active"?: boolean | number;
  "elevated"?: boolean | number;
  "createdAt"?: string;
  "updatedAt"?: string;
}


// type: interface
// name: DataQualityTriggerListType
export interface DataQualityTriggerListType {
  dataQualityTrigger?: DataQualityTriggerType | DataQualityTriggerType[];
}


// type: interface
// name: DataQualityTriggerType
export interface DataQualityTriggerType {
  "id"?: ResourceIdType;
  "siteId"?: ResourceIdType;
  "userId"?: ResourceIdType;
  "userDisplayName"?: string;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "message"?: string;
  "type"?: string;
  "active"?: boolean | number;
  "createdAt"?: string;
  "updatedAt"?: string;
  "severe"?: boolean | number;
}


// type: interface
// name: DataQualityWarningListType
export interface DataQualityWarningListType {
  dataQualityWarning?: DataQualityWarningType | DataQualityWarningType[];
}


// type: interface
// name: DataQualityWarningType
export interface DataQualityWarningType {
  site?: SiteType;
  owner?: UserType;
  "id"?: ResourceIdType;
  "userDisplayName"?: string;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "message"?: string;
  "type"?: string;
  "isActive"?: boolean | number;
  "createdAt"?: string;
  "updatedAt"?: string;
  "isSevere"?: boolean | number;
}


// type: interface
// name: DataRoleType
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
}


// type: interface
// name: DataSourceListType
export interface DataSourceListType {
  datasource?: DataSourceType | DataSourceType[];
}


// type: interface
// name: DataSourceType
export interface DataSourceType {
  connectionCredentials?: ConnectionCredentialsType;
  site?: SiteType;
  project?: ProjectType;
  location?: LocationType;
  owner?: UserType;
  tags?: TagListType;
  "id"?: ResourceIdType;
  "name"?: string;
  "contentUrl"?: string;
  "webpageUrl"?: string;
  "description"?: string;
  "type"?: string;
  "createdAt"?: string;
  "updatedAt"?: string;
  "isCertified"?: boolean | number;
  "certificationNote"?: string;
  "serverName"?: string;
  "databaseName"?: string;
  "hasExtracts"?: boolean | number;
  "hasAlert"?: boolean | number;
  "size"?: number;
  "isPublished"?: boolean | number;
  "connectedWorkbooksCount"?: number;
  "favoritesTotal"?: number;
  "encryptExtracts"?: string;
  "useRemoteQueryAgent"?: boolean | number;
}


// type: interface
// name: DataSourceValueStoreType
export interface DataSourceValueStoreType {
  datasourceID?: string;
  fieldName?: string;
}


// type: interface
// name: DegradationListType
export interface DegradationListType {
  degradation?: DegradationType | DegradationType[];
}


// type: interface
// name: DegradationType
export interface DegradationType {
  "name"?: string;
  "severity"?: string;
}


// type: interface
// name: DistinctValueListType
export interface DistinctValueListType {
  distinctValue?: DistinctValueType | DistinctValueType[];
}


// type: interface
// name: DistinctValueType
export interface DistinctValueType {
  value: SemanticsValueType;
  frequency: number;
}


// type: interface
// name: DomainDirectiveType
export interface DomainDirectiveType {
  "name": string;
}


// type: interface
// name: ErrorType
export interface ErrorType {
  summary: string;
  detail: string;
  "code": number;
}


// type: interface
// name: ExtractListType
export interface ExtractListType {
  extract?: ExtractType | ExtractType[];
}


// type: interface
// name: FavoriteListType
export interface FavoriteListType {
  favorite?: FavoriteType | FavoriteType[];
}


// type: interface
// name: FavoriteOrderingListType
export interface FavoriteOrderingListType {
  favoriteOrdering?: FavoriteOrderingType | FavoriteOrderingType[];
}


// type: interface
// name: FavoriteOrderingType
export interface FavoriteOrderingType {
  "favoriteId": ResourceIdType;
  "favoriteType": FavoriteTypeType;
  "favoriteIdMoveAfter": ResourceIdType;
  "favoriteTypeMoveAfter": FavoriteTypeType;
}


// type: interface
// name: FieldConceptType
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
}


// type: interface
// name: FieldMatchListType
export interface FieldMatchListType {
  fieldMatch?: FieldMatchType | FieldMatchType[];
}


// type: interface
// name: FieldMatchType
export interface FieldMatchType {
  fieldConceptURI: string;
  weight: number;
  fieldConcept?: FieldConceptType;
  valueMatches?: ValueMatchType | ValueMatchType[];
}


// type: interface
// name: FieldType
export interface FieldType {
  sampleValues?: DistinctValueType | DistinctValueType[];
  dataType?: DataTypeType;
  fieldRole?: FieldRoleType;
  name?: string;
}


// type: interface
// name: FileUploadType
export interface FileUploadType {
  "uploadSessionId": FileUploadSessionIdType;
  "fileSize"?: number;
}


// type: interface
// name: FlowListType
export interface FlowListType {
  flow?: FlowType | FlowType[];
}


// type: interface
// name: FlowOutputStepListType
export interface FlowOutputStepListType {
  flowOutputStep?: FlowOutputStepType | FlowOutputStepType[];
}


// type: interface
// name: FlowOutputStepType
export interface FlowOutputStepType {
  "id"?: ResourceIdType;
  "name"?: string;
}


// type: interface
// name: FlowParameterDomainType
export interface FlowParameterDomainType {
  "domainType"?: string;
}


// type: interface
// name: FlowParameterListType
export interface FlowParameterListType {
  parameter?: FlowParameterType | FlowParameterType[];
}


// type: interface
// name: FlowParameterListValueListType
export interface FlowParameterListValueListType {
  value?: unknown;
}


// type: interface
// name: FlowParameterRunListType
export interface FlowParameterRunListType {
  parameterRuns?: FlowParameterRunType | FlowParameterRunType[];
}


// type: interface
// name: FlowParameterRunType
export interface FlowParameterRunType {
  "parameterId"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "overrideValue"?: string;
}


// type: interface
// name: FlowParameterSpecType
export interface FlowParameterSpecType {
  "parameterId"?: ResourceIdType;
  "overrideValue"?: string;
}


// type: interface
// name: FlowParameterType
export interface FlowParameterType {
  domain: FlowParameterDomainType;
  "id"?: ResourceIdType;
  "type"?: string;
  "name"?: string;
  "description"?: string;
  "value"?: string;
  "isRequired"?: boolean | number;
}


// type: interface
// name: FlowRunListType
export interface FlowRunListType {
  flowRuns?: FlowRunType | FlowRunType[];
}


// type: interface
// name: FlowRunSpecType
export interface FlowRunSpecType {
  flowOutputSteps: {
    flowOutputStep: FlowOutputStepType | FlowOutputStepType[];
  };
  flowParameterSpecs: {
    flowParameterSpec: FlowParameterSpecType | FlowParameterSpecType[];
  };
  "flowId"?: ResourceIdType;
  "runMode"?: "incremental" | "full";
}


// type: interface
// name: FlowRunType
export interface FlowRunType {
  flowParameterRuns?: FlowParameterRunListType;
  "id"?: ResourceIdType;
  "flowId"?: string;
  "status"?: "Pending" | "InProgress" | "Success" | "Failed" | "Cancelled";
  "startedAt"?: string;
  "completedAt"?: string;
  "progress"?: number;
  "backgroundJobId"?: string;
}


// type: interface
// name: FlowType
export interface FlowType {
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  parameters?: FlowParameterListType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "webpageUrl"?: string;
  "fileType"?: string;
  "createdAt"?: string;
  "updatedAt"?: string;
}


// type: interface
// name: FrequencyDetailsType
export interface FrequencyDetailsType {
  intervals: {
    interval: IntervalType | IntervalType[];
  };
  "start": string;
  "end"?: string;
}


// type: interface
// name: GroupListType
export interface GroupListType {
  group?: GroupType | GroupType[];
}


// type: interface
// name: GroupType
export interface GroupType {
  domain?: DomainDirectiveType;
  import?: ImportDirectiveType;
  "id"?: ResourceIdType;
  "name"?: string;
  "userCount"?: number;
  "minimumSiteRole"?: SiteRoleType;
}


// type: interface
// name: ImportDirectiveType
export interface ImportDirectiveType {
  "source": ImportSourceType;
  "domainName": string;
  "siteRole": SiteRoleType;
  "grantLicenseMode"?: "onSync" | "onLogin";
}


// type: interface
// name: IndexingStatusType
export interface IndexingStatusType {
  indexingStatusCode: string;
  indexingErrorCode: string;
  indexedValueConceptVersion?: number;
}


// type: interface
// name: IntervalType
export interface IntervalType {
  "minutes"?: "15" | "30";
  "hours"?: "1" | "2" | "4" | "6" | "8" | "12";
  "weekDay"?: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  "monthDay"?: "LastDay";
}


// type: interface
// name: JobType
export interface JobType {
  statusNotes?: StatusNoteListType;
  extractRefreshJob?: ExtractRefreshJobType;
  runFlowJobType?: RunFlowJobType;
  "id"?: ResourceIdType;
  "mode"?: "Asynchronous";
  "type"?: "GroupSync" | "RefreshExtract" | "PublishWorkbook" | "PublishDatasource" | "RunFlow";
  "progress"?: number;
  "createdAt"?: string;
  "startedAt"?: string;
  "updatedAt"?: string;
  "completedAt"?: string;
  "finishCode"?: number;
}


// type: interface
// name: LinkedTaskJobType
export interface LinkedTaskJobType {
  "id"?: ResourceIdType;
  "linkedTaskId"?: ResourceIdType;
  "status"?: "Pending" | "InProgress" | "Success" | "Failed" | "Cancelled";
  "createdAt"?: string;
  "startedAt"?: string;
  "endedAt"?: string;
}


// type: interface
// name: ListFieldConceptsType
export interface ListFieldConceptsType {
  fieldConcepts?: FieldConceptType | FieldConceptType[];
  nextPageToken: string;
}


// type: interface
// name: ListValueConceptsType
export interface ListValueConceptsType {
  valueConcepts?: ValueConceptType | ValueConceptType[];
  nextPageToken?: string;
}


// type: interface
// name: LocationMetadataResponseType
export interface LocationMetadataResponseType {
  resource: WarningType;
  location: LocationType;
}


// type: interface
// name: LocationType
export interface LocationType {
  "id"?: ResourceIdType;
  "type"?: "Project" | "PersonalSpace";
  "name"?: string;
}


// type: interface
// name: MatchValuesResultType
export interface MatchValuesResultType {
  averageMatchWeight?: number;
  valueMatches?: ValueMatchType | ValueMatchType[];
}


// type: interface
// name: MetricListType
export interface MetricListType {
  metric?: MetricType | MetricType[];
}


// type: interface
// name: MetricType
export interface MetricType {
  site?: SiteType;
  project?: ProjectType;
  owner?: UserType;
  tags?: TagListType;
  underlyingView?: ViewType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "webpageUrl"?: string;
  "createdAt"?: string;
  "updatedAt"?: string;
  "suspended"?: boolean | number;
}


// type: interface
// name: MobileSecuritySettingsListType
export interface MobileSecuritySettingsListType {
  mobileSecuritySettings?: PolicyType | PolicyType[];
}


// type: interface
// name: NameType
export interface NameType {
  locale?: string;
  name?: string;
  weight?: number;
  isPrimary?: boolean | number;
}


// type: interface
// name: NoLocationType
export interface NoLocationType {
  [k: string]: unknown;
}


// type: interface
// name: NotificationPreferenceUpdateStatusType
export interface NotificationPreferenceUpdateStatusType {
  status: "Success" | "Failed";
  userNotificationsPreference: UserNotificationsPreferenceType;
  error?: ErrorType;
}


// type: interface
// name: NotificationsPreferenceUpdateStatusListType
export interface NotificationsPreferenceUpdateStatusListType {
  notificationUpdateStatus?: NotificationPreferenceUpdateStatusType | NotificationPreferenceUpdateStatusType[];
}


// type: interface
// name: PaginationType
export interface PaginationType {
  "pageNumber": number;
  "pageSize": number;
  "totalAvailable": number;
}


// type: interface
// name: ParentType
export interface ParentType {
  "id": ResourceIdType;
  "type": "Project";
  "name"?: unknown;
}


// type: interface
// name: PersonalSpaceType
export interface PersonalSpaceType {
  "luid"?: string;
  "ownerLuid"?: string;
  "readOnly"?: boolean | number;
}


// type: interface
// name: PolicyType
export interface PolicyType {
  "name": string;
  "enabled": boolean | number;
  "value": string;
  "severity": SeverityLevelType;
}


// type: interface
// name: ProjectListType
export interface ProjectListType {
  project?: ProjectType | ProjectType[];
}


// type: interface
// name: ProjectType
export interface ProjectType {
  owner?: UserType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "topLevelProject"?: boolean | number;
  "parentProjectId"?: ResourceIdType;
  "controllingPermissionsProjectId"?: ResourceIdType;
  "createdAt"?: string;
  "updatedAt"?: string;
  "favoritesTotal"?: number;
  "contentPermissions"?: "LockedToProject" | "ManagedByOwner" | "LockedToProjectWithoutNested";
}


// type: interface
// name: ResourceList
export interface ResourceList {
  resource: ContentTypeAndIdType | ContentTypeAndIdType[];
}


// type: interface
// name: RevisionListType
export interface RevisionListType {
  revision?: RevisionType | RevisionType[];
}


// type: interface
// name: RevisionType
export interface RevisionType {
  publisher?: UserType;
  "revisionNumber"?: number;
  "publishedAt"?: string;
  "deleted"?: boolean | number;
  "current"?: boolean | number;
  "sizeInBytes"?: number;
}


// type: interface
// name: RunFlowJobType
export interface RunFlowJobType {
  notes: string;
  flow: FlowType;
  "flowRunId"?: string;
}


// type: interface
// name: ScheduleListType
export interface ScheduleListType {
  schedule?: ScheduleType | ScheduleType[];
}


// type: interface
// name: ScheduleType
export interface ScheduleType {
  frequencyDetails?: FrequencyDetailsType;
  "id"?: ResourceIdType;
  "name"?: string;
  "state"?: StateType;
  "priority"?: number;
  "createdAt"?: string;
  "updatedAt"?: string;
  "type"?: "Extract" | "Subscription" | "ActiveDirectorySync" | "Flow" | "DataAcceleration";
  "frequency"?: "Hourly" | "Daily" | "Weekly" | "Monthly";
  "nextRunAt"?: string;
  "endScheduleAt"?: string;
  "executionOrder"?: "Parallel" | "Serial";
}


// type: interface
// name: ServerInfo
export interface ServerInfo {
  productVersion: ProductVersion;
  prepConductorVersion: string;
  restApiVersion: RestApiVersion;
  platform: string;
  serverSettings: ServerSettings;
}


// type: interface
// name: ServerSettings
export interface ServerSettings {
  oAuthEnabled: boolean | number;
  sheetImageMaxAgeFloor: number;
  sheetImageMaxAgeCeiling: number;
  offlineInteractionSupportedPhase: number;
}


// type: interface
// name: SiteListType
export interface SiteListType {
  site?: SiteType | SiteType[];
}


// type: interface
// name: SiteType
export interface SiteType {
  usage?: {
    "numUsers": number;
    "numCreators"?: number;
    "numExplorers"?: number;
    "numViewers"?: number;
    "storage": number;
  };
  "id"?: ResourceIdType;
  "name"?: string;
  "contentUrl"?: string;
  "adminMode"?: "ContentOnly" | "ContentAndUsers";
  "userQuota"?: SiteQuotaType;
  "storageQuota"?: SiteQuotaType;
  "tierCreatorCapacity"?: SiteCapacityType;
  "tierExplorerCapacity"?: SiteCapacityType;
  "tierViewerCapacity"?: SiteCapacityType;
  "disableSubscriptions"?: boolean | number;
  "state"?: StateType;
  "revisionHistoryEnabled"?: boolean | number;
  "revisionLimit"?: RevisionLimitType;
  "subscribeOthersEnabled"?: boolean | number;
  "allowSubscriptionAttachments"?: boolean | number;
  "guestAccessEnabled"?: boolean | number;
  "cacheWarmupEnabled"?: boolean | number;
  "dataAlertsEnabled"?: boolean | number;
  "commentingEnabled"?: boolean | number;
  "commentingMentionsEnabled"?: boolean | number;
  "cacheeWarmupThreshold"?: number;
  "flowsEnabled"?: boolean | number;
  "editingFlowsEnabled"?: boolean | number;
  "schedulingFlowsEnabled"?: boolean | number;
  "einsteinInFlowEnabled"?: boolean | number;
  "explainDataEnabled"?: boolean | number;
  "extractEncryptionMode"?: string;
  "dataAccelerationMode"?: string;
  "mobileBiometricsEnabled"?: boolean | number;
  "sheetImageEnabled"?: boolean | number;
  "catalogingEnabled"?: boolean | number;
  "derivedPermissionsEnabled"?: boolean | number;
  "askDataMode"?: "EnabledByDefault" | "DisabledByDefault" | "DisabledAlways";
  "authoringEnabled"?: boolean | number;
  "customSubscriptionEmailEnabled"?: boolean | number;
  "customSubscriptionEmail"?: string;
  "customSubscriptionFooterEnabled"?: boolean | number;
  "customSubscriptionFooter"?: string;
  "userVisibilityMode"?: string;
  "requestAccessEnabled"?: boolean | number;
  "catalogObfuscationEnabled"?: boolean | number;
  "flowAutoSaveEnabled"?: boolean | number;
  "webExtractionEnabled"?: boolean | number;
  "runNowEnabled"?: boolean | number;
  "metricsContentTypeEnabled"?: boolean | number;
  "tagLimit"?: number;
  "webZoneContentEnabled"?: boolean | number;
  "notifySiteAdminsOnThrottle"?: boolean | number;
  "namedSharingEnabled"?: boolean | number;
  "useDefaultTimeZone"?: boolean | number;
  "timeZone"?: string;
  "autoSuspendRefreshEnabled"?: boolean | number;
  "autoSuspendRefreshInactivityWindow"?: number;
  "personalSpaceEnabled"?: boolean | number;
  "personalSpaceStorageQuota"?: string;
  "flowOutputSubscriptionsEnabled"?: boolean | number;
  "flowOutputSubscriptionsDataInEmailBodyEnabled"?: boolean | number;
  "flowOutputSubscriptionsDataAsEmailAttachmentEnabled"?: boolean | number;
  "dqwSubscriptionsEnabled"?: boolean | number;
  "flowParametersEnabled"?: boolean | number;
  "flowParametersAnyTypeEnabled"?: boolean | number;
  "adminInsightsPublishFrequency"?: number;
}


// type: interface
// name: StatusNoteListType
export interface StatusNoteListType {
  statusNote?: StatusNoteType | StatusNoteType[];
}


// type: interface
// name: StatusNoteType
export interface StatusNoteType {
  "type":
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
  "value"?: string;
  "text"?: string;
}


// type: interface
// name: SubscriptionContentType
export interface SubscriptionContentType {
  "id": ResourceIdType;
  "type": "Workbook" | "View";
  "name"?: unknown;
}


// type: interface
// name: SubscriptionListType
export interface SubscriptionListType {
  subscription?: SubscriptionType | SubscriptionType[];
}


// type: interface
// name: SubscriptionType
export interface SubscriptionType {
  content: SubscriptionContentType;
  schedule: ScheduleType;
  user: UserType;
  "id"?: ResourceIdType;
  "subject": string;
  "attachImage"?: boolean | number;
  "attachPdf"?: boolean | number;
}


// type: interface
// name: TableAnchorListType
export interface TableAnchorListType {
  tableAnchor: TableAnchorType | TableAnchorType[];
}


// type: interface
// name: TableAnchorType
export interface TableAnchorType {
  "id"?: ResourceIdType;
  "name"?: string;
  "fullName"?: string;
}


// type: interface
// name: TableauCredentialsType
export interface TableauCredentialsType {
  site: SiteType;
  user?: UserType;
  "name"?: string;
  "password"?: string;
  "token"?: string;
  "personalAccessTokenName"?: string;
  "personalAccessTokenSecret"?: string;
}


// type: interface
// name: TableListType
export interface TableListType {
  table?: TableType | TableType[];
}


// type: interface
// name: TableType
export interface TableType {
  site?: SiteType;
  contact: UserType;
  certifier: UserType;
  tags: TagListType;
  location: LocationType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "isEmbedded"?: boolean | number;
  "isCertified"?: boolean | number;
  "certificationNote"?: string;
  "schema"?: string;
}


// type: interface
// name: TagBatchType
export interface TagBatchType {
  tags: TagListType;
  contents: ContentListType;
}


// type: interface
// name: TagListType
export interface TagListType {
  tag?: TagType | TagType[];
}


// type: interface
// name: TagType
export interface TagType {
  "label": string;
}


// type: interface
// name: TaskListType
export interface TaskListType {
  task?: TaskType | TaskType[];
}


// type: interface
// name: TaskRunFlowType
export interface TaskRunFlowType {
  schedule?: ScheduleType;
  flow: FlowType;
  flowRunSpec: FlowRunSpecType;
  "id"?: string;
  "priority"?: number;
  "consecutiveFailedCount"?: number;
  "type"?: string;
}


// type: interface
// name: TextPatternType
export interface TextPatternType {
  regex?: unknown;
}


// type: interface
// name: UserListType
export interface UserListType {
  user?: UserType | UserType[];
}


// type: interface
// name: UserNotificationsPreferenceListType
export interface UserNotificationsPreferenceListType {
  userNotificationsPreference?: UserNotificationsPreferenceType | UserNotificationsPreferenceType[];
}


// type: interface
// name: UserNotificationsPreferenceType
export interface UserNotificationsPreferenceType {
  "channel"?: string;
  "notificationType"?: string;
  "enabled"?: boolean | number;
  "disabledByOverride"?: boolean | number;
}


// type: interface
// name: UserType
export interface UserType {
  domain?: DomainDirectiveType;
  "id"?: ResourceIdType;
  "name"?: string;
  "fullName"?: string;
  "email"?: string;
  "password"?: string;
  "siteRole"?: SiteRoleType;
  "authSetting"?: SiteUserAuthSettingType;
  "lastLogin"?: string;
  "externalAuthUserId"?: string;
  "locale"?: string;
  "language"?: string;
}


// type: interface
// name: ValueConceptCountType
export interface ValueConceptCountType {
  count: number;
}


// type: interface
// name: ValueConceptType
export interface ValueConceptType {
  uri: string;
  fieldConceptURI: string;
  names?: NameType | NameType[];
  nameCharacteristics?: NameCharacteristicsType;
  description?: string;
  parentValueConceptURI?: string;
  value?: SemanticsValueType;
}


// type: interface
// name: ValueMatchType
export interface ValueMatchType {
  value?: SemanticsValueType;
  weight?: number;
  valueConcept?: ValueConceptType;
  valueConceptURI?: string;
  fieldConceptURI?: string;
}


// type: interface
// name: ViewListType
export interface ViewListType {
  view?: ViewType | ViewType[];
}


// type: interface
// name: ViewType
export interface ViewType {
  workbook?: WorkbookType;
  owner?: UserType;
  project?: ProjectType;
  tags?: TagListType;
  usage?: {
    "totalViewCount": number;
  };
  "id"?: ResourceIdType;
  "name"?: string;
  "contentUrl"?: string;
  "createdAt"?: string;
  "updatedAt"?: string;
  "sheetType"?: string;
  "favoritesTotal"?: number;
  "hidden"?: boolean | number;
  "recentlyViewed"?: boolean | number;
  "viewUrlName"?: string;
}


// type: interface
// name: WarningListType
export interface WarningListType {
  warning?: WarningType | WarningType[];
}


// type: interface
// name: WarningType
export interface WarningType {
  "message"?: string;
  "id"?: string;
  "errorCode"?: string;
}


// type: interface
// name: WebhookDestinationHttpType
export interface WebhookDestinationHttpType {
  "method"?: "POST";
  "url"?: string;
}


// type: interface
// name: WebhookListType
export interface WebhookListType {
  webhook?: WebhookType | WebhookType[];
}


// type: interface
// name: WebhookSourceEventDatasourceCreatedType
export interface WebhookSourceEventDatasourceCreatedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventDatasourceDeletedType
export interface WebhookSourceEventDatasourceDeletedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventDatasourceRefreshFailedType
export interface WebhookSourceEventDatasourceRefreshFailedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventDatasourceRefreshStartedType
export interface WebhookSourceEventDatasourceRefreshStartedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventDatasourceRefreshSucceededType
export interface WebhookSourceEventDatasourceRefreshSucceededType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventDatasourceUpdatedType
export interface WebhookSourceEventDatasourceUpdatedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventViewDeletedType
export interface WebhookSourceEventViewDeletedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookCreatedType
export interface WebhookSourceEventWorkbookCreatedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookDeletedType
export interface WebhookSourceEventWorkbookDeletedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookRefreshFailedType
export interface WebhookSourceEventWorkbookRefreshFailedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookRefreshStartedType
export interface WebhookSourceEventWorkbookRefreshStartedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookRefreshSucceededType
export interface WebhookSourceEventWorkbookRefreshSucceededType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookSourceEventWorkbookUpdatedType
export interface WebhookSourceEventWorkbookUpdatedType {
  [k: string]: unknown;
}


// type: interface
// name: WebhookTestResultType
export interface WebhookTestResultType {
  body: string;
  "id"?: ResourceIdType;
  "status"?: number;
}


// type: interface
// name: WebhookType
export interface WebhookType {
  "webhook-source": WebhookSourceType;
  "webhook-destination": WebhookDestinationType;
  owner?: UserType;
  "id"?: ResourceIdType;
  "name"?: string;
  "event"?: string;
  "enabled"?: boolean | number;
  "createdAt"?: string;
  "updatedAt"?: string;
  "statusChangeReason"?: string;
}


// type: interface
// name: WorkbookListType
export interface WorkbookListType {
  workbook?: WorkbookType | WorkbookType[];
}


// type: interface
// name: WorkbookType
export interface WorkbookType {
  connections?: ConnectionListType;
  connectionCredentials?: ConnectionCredentialsType;
  site?: SiteType;
  project?: ProjectType;
  location?: LocationType;
  owner?: UserType;
  tags?: TagListType;
  views?: ViewListType;
  dataAccelerationConfig?: DataAccelerationInfoType;
  "id"?: ResourceIdType;
  "name"?: string;
  "description"?: string;
  "contentUrl"?: string;
  "webpageUrl"?: string;
  "showTabs"?: boolean | number;
  "thumbnailsUserId"?: ResourceIdType;
  "size"?: number;
  "createdAt"?: string;
  "updatedAt"?: string;
  "sheetCount"?: number;
  "hasExtracts"?: boolean | number;
  "encryptExtracts"?: string;
  "recentlyViewed"?: boolean | number;
  "defaultViewId"?: ResourceIdType;
}

