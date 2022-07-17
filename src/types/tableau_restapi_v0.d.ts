// type: type
// name: AccelerationStatusType
export type AccelerationStatusType = "accelerated" | "failed" | "inProgress" | "notUseful" | "unknown" | "waiting";


// type: type
// name: ColumnListType
export type ColumnListType = ColumnType | ColumnType[];


// type: type
// name: DataAlertUpdateStatusType
export type DataAlertUpdateStatusType = {
  error: ErrorType;
};


// type: type
// name: DatabaseListType
export type DatabaseListType = DatabaseType | DatabaseType[];


// type: type
// name: DatabaseTypeType
export type DatabaseTypeType = "CloudFile" | "DatabaseServer" | "File" | "WebDataConnector";


// type: type
// name: DataUpdateActionListType
export type DataUpdateActionListType = DataUpdateActionType | DataUpdateActionType[];



// type: type
// name: DataUpdateActionType
export type DataUpdateActionType =
  | {
      action: string;
      condition?: DataUpdateConditionType;
      "source-file": string;
      "source-schema": string;
      "source-table": string;
      "target-schema": string;
      "target-table": string;
    }
  | { actions?: DataUpdateActionType };


// type: type
// name: DataUpdateConditionType
export type DataUpdateConditionType =
  | {
      const: DataUpdateConstConditionType;
      "source-col": string;
      "target-col": string;
    }
  | { args: DataUpdateConditionType | DataUpdateConditionType[] };


// type: type
// name: ExplanationType
export type ExplanationType = {
  users: UserListType;
};


// type: type
// name: ExplanationTypeType
export type ExplanationTypeType = "data_monitoring_candidate" | "popular" | "similar_users";


// type: type
// name: ExtractRefreshJobType
export type ExtractRefreshJobType =
  | { datasource: DataSourceType }
  | { view: ViewType }
  | { workbook: WorkbookType };


// type: type
// name: ExtractType
export type ExtractType =
  | { datasource: DataSourceType }
  | { workbook: WorkbookType };


// type: type
// name: FavoriteType
export type FavoriteType =
  | { collection: CollectionType }
  | { datasource: DataSourceType }
  | { flow: FlowType }
  | { metric: MetricType }
  | { project: ProjectType }
  | { view: ViewType }
  | { workbook: WorkbookType };


// type: type
// name: FavoriteTypeType
export type FavoriteTypeType =
  | "collection"
  | "datarole"
  | "datasource"
  | "flow"
  | "metric"
  | "project"
  | "view"
  | "workbook";


// type: type
// name: FileUploadSessionIdType
export type FileUploadSessionIdType = string;


// type: type
// name: FlowParameterAnyDomainType
export type FlowParameterAnyDomainType = FlowParameterDomainType & unknown;


// type: type
// name: FlowParameterBinaryDomainType
export type FlowParameterBinaryDomainType = FlowParameterDomainType & unknown;


// type: type
// name: FlowParameterListDomainType
export type FlowParameterListDomainType = FlowParameterDomainType & {
  values: FlowParameterListValueListType;
};


// type: type
// name: FlowParameterRangeDomainType
export type FlowParameterRangeDomainType = FlowParameterDomainType & {
  "dateValueIncrement"?: string;
  "maxValue"?: string;
  "minValue"?: string;
  "stepSize"?: string;
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
// name: LabelListType
export type LabelListType = LabelType | LabelType[];


// type: type
// name: LicensingRoleType
export type LicensingRoleType = "Guest" | "Interactor" | "Unlicensed" | "Viewer";


// type: type
// name: PaginatedResponseGroup
export type PaginatedResponseGroup =
  | { datasources: DataSourceListType }
  | { extracts: ExtractListType }
  | { flowOutputSteps: FlowOutputStepListType }
  | { flowRuns: FlowRunListType }
  | { flows: FlowListType }
  | { groups: GroupListType }
  | { linkedTasks: LinkedTaskListType }
  | { metrics: MetricListType }
  | { projects: ProjectListType }
  | { revisions: RevisionListType }
  | { schedules: ScheduleListType }
  | { sites: SiteListType }
  | { subscriptions: SubscriptionListType }
  | { users: UserListType }
  | { workbooks: WorkbookListType };


// type: type
// name: PermissionsType
export type PermissionsType =
  | (
      | { collection: CollectionType }
      | { database: DatabaseType }
      | { datasource: DataSourceType }
      | { flow: FlowType }
      | { metric: MetricType }
      | { project: ProjectType }
      | { table: TableType }
      | { view: ViewType }
      | { workbook: WorkbookType }
    )
  | { [k: string]: unknown };


// type: type
// name: ProductVersion
export type ProductVersion = string;


// type: type
// name: RecentType
export type RecentType =
  | { datasource: DataSourceType }
  | { flow: FlowType }
  | { project: ProjectType }
  | { view: ViewType }
  | { workbook: WorkbookType };


// type: type
// name: RecommendationDismissalType
export type RecommendationDismissalType = {
  view: ViewType;
};


// type: type
// name: RecommendationType
export type RecommendationType = {
  view: ViewType;
};


// type: type
// name: RecommendedContentType
export type RecommendedContentType = "view";


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
// name: SeverityLevelType
export type SeverityLevelType = "critical" | "error" | "info" | "warn";


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
  | "ServerAdministrator"
  | "SiteAdministratorCreator"
  | "SiteAdministratorExplorer"
  | "SupportUser"
  | "Unlicensed"
  | "Viewer";


// type: type
// name: SiteUserAuthSettingType
export type SiteUserAuthSettingType = "OpenID" | "SAML" | "ServerDefault";


// type: type
// name: StateType
export type StateType = "Active" | "Suspended";


// type: type
// name: TableListType
export type TableListType = TableType | TableType[];


// type: type
// name: TaskDataAccelerationType
export type TaskDataAccelerationType = {
  workbook: WorkbookType;
};


// type: type
// name: TaskExtractRefreshType
export type TaskExtractRefreshType =
  | { datasource: DataSourceType }
  | { view: ViewType }
  | { workbook: WorkbookType };


// type: type
// name: TaskType
export type TaskType =
  | { dataAcceleration: TaskDataAccelerationType }
  | { extractRefresh: TaskExtractRefreshType }
  | { flowRun: TaskRunFlowType }
  | { schedule?: ScheduleType };


// type: type
// name: TsRequest
export type TsRequest =
  | { actions?: DataUpdateActionType | DataUpdateActionType[] }
  | { broadcastViewSend: BroadcastViewSendType }
  | { connectedApplication: ConnectedApplicationType }
  | { connectedApplications: ConnectedApplicationListType }
  | { connection: ConnectionType }
  | { connections: ConnectionListType }
  | { contentList: ContentListType }
  | { contentLocationRequest: ContentLocationRequestType }
  | { credentials: TableauCredentialsType }
  | { dataAlert: DataAlertType }
  | { dataAlerts: DataAlertListType }
  | { dataQualityIndicator: DataQualityIndicatorType }
  | { dataQualityTrigger: DataQualityTriggerType }
  | { dataQualityWarning: DataQualityWarningType }
  | { database: DatabaseType }
  | { databaseAnchor: DatabaseAnchorRequestType }
  | { datasource: DataSourceType }
  | { datasources: DataSourceListType }
  | { domain: DomainDirectiveType }
  | { extensionsServerSettings: ExtensionsServerSettingsType }
  | { extensionsSiteSettings: ExtensionsSiteSettingsType }
  | { favorite: FavoriteType }
  | { favoriteOrderings: FavoriteOrderingListType }
  | { flow: FlowType }
  | { flowRunSpec: FlowRunSpecType }
  | { group: GroupType }
  | { metric: MetricType }
  | { mobileSecuritySettingsList: MobileSecuritySettingsListType }
  | { permissions: PermissionsType }
  | { project: ProjectType }
  | { recommendationDismissal: RecommendationDismissalType }
  | { schedule: ScheduleType }
  | { site: SiteType }
  | { sites: SiteListType }
  | { subscription: SubscriptionType }
  | { table: TableType }
  | { tagBatch: TagBatchType }
  | { tags: TagListType }
  | { task: TaskType }
  | { user: UserType }
  | { userNotificationsPreference: UserNotificationsPreferenceType }
  | { userNotificationsPreferences: UserNotificationsPreferenceListType }
  | { view: ViewType }
  | { webhook: WebhookType }
  | { workbook: WorkbookType };


// type: type
// name: TsResponse
export type TsResponse =
  | { paginatedResponseGroup: PaginatedResponseGroup }
  | { backgroundJob: BackgroundJobType }
  | { backgroundJobs: BackgroundJobListType }
  | { broadcastView: BroadcastViewType }
  | { broadcastViews: BroadcastViewListType }
  | { connectedApplication: ConnectedApplicationType }
  | { connectedApplicationSecret: ConnectedApplicationSecretType }
  | { connectedApplications: ConnectedApplicationListType }
  | { connection: ConnectionType }
  | { connections: ConnectionListType }
  | { contentLocation: LocationType }
  | { credentials: TableauCredentialsType }
  | { dataAlert: DataAlertType }
  | { dataAlertUpdateResults: DataAlertUpdateStatusListType }
  | { dataAlerts: DataAlertListType }
  | { dataAlertsRecipient: DataAlertsRecipientType }
  | { dataAlertsRecipientList: DataAlertsRecipientListType }
  | { dataQualityIndicator: DataQualityIndicatorType }
  | { dataQualityIndicatorList: DataQualityIndicatorListType }
  | { dataQualityTrigger: DataQualityTriggerType }
  | { dataQualityTriggerList: DataQualityTriggerListType }
  | { dataQualityWarning: DataQualityWarningType }
  | { dataQualityWarningList: DataQualityWarningListType }
  | { database: DatabaseType }
  | { databaseAnchors: DatabaseAnchorResponseListType }
  | { datasource: DataSourceType }
  | { domain: DomainDirectiveType }
  | { domainList: DomainDirectiveListType }
  | { downgradeInfo: DegradationListType }
  | { error: ErrorType }
  | { extensionUrlStatus: ExtensionUrlStatusType }
  | { extensionsServerSettings: ExtensionsServerSettingsType }
  | { extensionsSiteSettings: ExtensionsSiteSettingsType }
  | { favorites: FavoriteListType }
  | { fileUpload: FileUploadType }
  | { flow: FlowType }
  | { flowRun: FlowRunType }
  | { flowWarnings: FlowWarningsListContainerType }
  | { group: GroupType }
  | { job: JobType }
  | { linkedTask: LinkedTaskType }
  | { linkedTaskJob: LinkedTaskJobType }
  | { metric: MetricType }
  | { mobileSecuritySettingsList: MobileSecuritySettingsListType }
  | { notificationPreferenceUpdateStatus: NotificationPreferenceUpdateStatusType }
  | { notificationUpdateResult: NotificationsPreferenceUpdateStatusListType }
  | { permissions: PermissionsType }
  | { personalSpace: PersonalSpaceType }
  | { project: ProjectType }
  | { recents: RecentListType }
  | { recommendations: RecommendationListType }
  | { salesforceApps: SalesforceAppListType }
  | { schedule: ScheduleType }
  | { serverInfo: ServerInfo }
  | { serverSettings: ServerSettings }
  | { session: SessionType }
  | { sessions: SessionsType }
  | { site: SiteType }
  | { status: string }
  | { subscription: SubscriptionType }
  | { table: TableType }
  | { tagBatch: TagBatchType }
  | { tags: TagListType }
  | { task: TaskType }
  | { tasks: TaskListType }
  | { uri: string }
  | { user: UserType }
  | { userNotificationsPreference: UserNotificationsPreferenceType }
  | { userNotificationsPreferences: UserNotificationsPreferenceListType }
  | { view: ViewType }
  | { views: ViewListType }
  | { webhook: WebhookType }
  | { webhookTestResult: WebhookTestResultType }
  | { webhooks: WebhookListType }
  | { workbook: WorkbookType };


// type: type
// name: WebhookDestinationType
export type WebhookDestinationType = {
  "webhook-destination-http": WebhookDestinationHttpType;
};


// type: type
// name: WebhookSourceType
export type WebhookSourceType =
  | { "webhook-source-event-datasource-created": WebhookSourceEventDatasourceCreatedType }
  | { "webhook-source-event-datasource-deleted": WebhookSourceEventDatasourceDeletedType }
  | { "webhook-source-event-datasource-refresh-failed": WebhookSourceEventDatasourceRefreshFailedType }
  | { "webhook-source-event-datasource-refresh-started": WebhookSourceEventDatasourceRefreshStartedType }
  | { "webhook-source-event-datasource-refresh-succeeded": WebhookSourceEventDatasourceRefreshSucceededType }
  | { "webhook-source-event-datasource-updated": WebhookSourceEventDatasourceUpdatedType }
  | { "webhook-source-event-flow-completed": WebhookSourceEventFlowCompletedType }
  | { "webhook-source-event-view-deleted": WebhookSourceEventViewDeletedType }
  | { "webhook-source-event-workbook-created": WebhookSourceEventWorkbookCreatedType }
  | { "webhook-source-event-workbook-deleted": WebhookSourceEventWorkbookDeletedType }
  | { "webhook-source-event-workbook-refresh-failed": WebhookSourceEventWorkbookRefreshFailedType }
  | { "webhook-source-event-workbook-refresh-started": WebhookSourceEventWorkbookRefreshStartedType }
  | { "webhook-source-event-workbook-refresh-succeeded": WebhookSourceEventWorkbookRefreshSucceededType }
  | { "webhook-source-event-workbook-updated": WebhookSourceEventWorkbookUpdatedType };


// type: interface
// name: BackgroundJobListType
export interface BackgroundJobListType {
  backgroundJob?: BackgroundJobType | BackgroundJobType[];
}


// type: interface
// name: BackgroundJobType
export interface BackgroundJobType {
  "createdAt"?: string;
  "endedAt"?: string;
  "id"?: ResourceIdType;
  "jobType"?: string;
  "priority"?: number;
  "startedAt"?: string;
  "status"?: "Cancelled" | "Failed" | "InProgress" | "Pending" | "Success";
  "subtitle"?: string;
  "title"?: string;
}


// type: interface
// name: BroadcastViewListType
export interface BroadcastViewListType {
  broadcast?: BroadcastViewType | BroadcastViewType[];
}


// type: interface
// name: BroadcastViewSendType
export interface BroadcastViewSendType {
  "showTabs"?: boolean | number;
  "showWatermark"?: boolean | number;
  "viewId"?: ResourceIdType;
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
  "mode": "Allow" | "Deny";
  "name":
    | "AddComment"
    | "ChangeHierarchy"
    | "ChangePermissions"
    | "Connect"
    | "CreateRefreshMetrics"
    | "Delete"
    | "RunExplainData"
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
    | "WebAuthoringForFlows"
    | "Write"
    | "SaveAs";
}


// type: interface
// name: CollectionType
export interface CollectionType {
  owner?: UserType;
  "createdAt"?: string;
  "description"?: string;
  "id"?: ResourceIdType;
  "name"?: string;
  "permissionedItemCount"?: number;
  "totalItemCount"?: number;
  "updatedAt"?: string;
  "visibility"?: string;
}


// type: interface
// name: ColumnType
export interface ColumnType {
  id?: string;
  name?: string;
  description?: string;
  remoteType?: string;
  parentTableId?: string;
  nullable?: boolean;
  site?: SiteType;
  tags?: TagListType;
}


// type: interface
// name: ComparisonRecordType
export interface ComparisonRecordType {
  site?: string;
  sheetURI?: string;
  unacceleratedSessionCount?: number;
  averageUnAcceleratedPLT?: number;
  acceleratedSessionCount?: number;
  averageAcceleratedPLT?: number;
}


// type: interface
// name: ConnectedApplicationListType
export interface ConnectedApplicationListType {
  connectedApplication?: ConnectedApplicationType | ConnectedApplicationType[];
}


// type: interface
// name: ConnectedApplicationSecretType
export interface ConnectedApplicationSecretType {
  "createdAt"?: string;
  "id"?: ResourceIdType;
  "value"?: string;
}


// type: interface
// name: ConnectedApplicationType
export interface ConnectedApplicationType {
  secret?: ConnectedApplicationSecretType | ConnectedApplicationSecretType[];
  "clientId"?: ResourceIdType;
  "createdAt"?: string;
  "domainSafelist"?: string;
  "enabled"?: boolean | number;
  "name"?: string;
  "projectId"?: ResourceIdType;
  "unrestrictedEmbedding"?: boolean | number;
}


// type: interface
// name: ConnectionCredentialsType
export interface ConnectionCredentialsType {
  "embed"?: string;
  "name"?: string;
  "oAuth"?: string;
  "password"?: string;
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
  connectionCredentials?: ConnectionCredentialsType;
  datasource?: DataSourceType;
  "dbClass"?: string;
  "embedPassword"?: boolean | number;
  "filename"?: string;
  "googleSheetId"?: string;
  "id"?: ResourceIdType;
  "password"?: string;
  "queryTaggingEnabled"?: boolean | number;
  "scope"?: string;
  "serverAddress"?: string;
  "serverPort"?: number;
  "type"?: string;
  "userName"?: string;
}


// type: interface
// name: ContentActionType
export interface ContentActionType {
  "action": "MoveDatabaseOnly" | "MoveDatabaseAndAllTables";
}


// type: interface
// name: ContentListType
export interface ContentListType {
  content: ContentTypeAndIdType | ContentTypeAndIdType[];
}


// type: interface
// name: ContentLocationRequestType
export interface ContentLocationRequestType {
  location?: LocationType;
  contentAction?: ContentActionType;
  resourceList: ResourceList;
}


// type: interface
// name: ContentsCountsType
export interface ContentsCountsType {
  "datasourceCount"?: number;
  "projectCount"?: number;
  "viewCount"?: number;
  "workbookCount"?: number;
}


// type: interface
// name: ContentTypeAndIdType
export interface ContentTypeAndIdType {
  "contentType"?: string;
  "id"?: ResourceIdType;
}


// type: interface
// name: DataAccelerationInfoType
export interface DataAccelerationInfoType {
  "accelerateNow"?: boolean | number;
  "accelerationEnabled"?: boolean | number;
  "accelerationStatus"?: AccelerationStatusType;
  "lastUpdatedAt"?: string;
}


// type: interface
// name: DataAccelerationReportType
export interface DataAccelerationReportType {
  dataAccelerationReport?: ComparisonRecordType[];
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
  "lastSent"?: string;
  "name"?: string;
}


// type: interface
// name: DataAlertType
export interface DataAlertType {
  owner: UserType;
  recipients?: DataAlertsRecipientListType;
  view: ViewType;
  "alertCondition"?: string;
  "alertThreshold"?: string;
  "createdAt"?: string;
  "creatorId"?: ResourceIdType;
  "frequency"?: "AsFrequentlyAsPossible" | "Daily" | "Hourly" | "Once" | "Weekly";
  "id"?: ResourceIdType;
  "public"?: boolean | number;
  "subject"?: string;
  "suspended"?: boolean | number;
  "updatedAt"?: string;
}


// type: interface
// name: DataAlertUpdateStatusListType
export interface DataAlertUpdateStatusListType {
  dataAlertUpdateStatus?: DataAlertUpdateStatusType | DataAlertUpdateStatusType[];
}


// type: interface
// name: DatabaseAnchorRequestType
export interface DatabaseAnchorRequestType {
  connectionParams: ConnectionParamsForAnchorType;
  "datasourceFormattedName"?: string;
  "datasourceName"?: string;
  "isArchived"?: boolean | number;
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
// name: DatabaseType
export interface DatabaseType {
  certifier: UserType;
  contact: UserType;
  location: LocationType;
  site?: SiteType;
  tags: TagListType;
  "certificationNote"?: string;
  "connectionType"?: string;
  "connectorUrl"?: string;
  "contentPermissions"?: "LockedToDatabase" | "ManagedByOwner";
  "description"?: string;
  "fileExtension"?: string;
  "fileId"?: string;
  "filePath"?: string;
  "hostName"?: string;
  "id"?: ResourceIdType;
  "isCertified"?: boolean | number;
  "isEmbedded"?: boolean | number;
  "mimeType"?: string;
  "name"?: string;
  "port"?: number;
  "provider"?: string;
  "requestUrl"?: string;
  "type"?: DatabaseTypeType;
}


// type: interface
// name: DataQualityIndicatorListType
export interface DataQualityIndicatorListType {
  dataQualityIndicator?: DataQualityIndicatorType | DataQualityIndicatorType[];
}


// type: interface
// name: DataQualityIndicatorType
export interface DataQualityIndicatorType {
  owner?: UserType;
  site?: SiteType;
  "active"?: boolean | number;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "createdAt"?: string;
  "elevated"?: boolean | number;
  "id"?: ResourceIdType;
  "message"?: string;
  "type"?: string;
  "updatedAt"?: string;
  "userDisplayName"?: string;
}


// type: interface
// name: DataQualityTriggerListType
export interface DataQualityTriggerListType {
  dataQualityTrigger?: DataQualityTriggerType | DataQualityTriggerType[];
}


// type: interface
// name: DataQualityTriggerType
export interface DataQualityTriggerType {
  "active"?: boolean | number;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "createdAt"?: string;
  "id"?: ResourceIdType;
  "message"?: string;
  "severe"?: boolean | number;
  "siteId"?: ResourceIdType;
  "type"?: string;
  "updatedAt"?: string;
  "userDisplayName"?: string;
  "userId"?: ResourceIdType;
}


// type: interface
// name: DataQualityWarningListType
export interface DataQualityWarningListType {
  dataQualityWarning?: DataQualityWarningType | DataQualityWarningType[];
}


// type: interface
// name: DataQualityWarningType
export interface DataQualityWarningType {
  owner?: UserType;
  site?: SiteType;
  "contentId"?: ResourceIdType;
  "contentType"?: string;
  "createdAt"?: string;
  "id"?: ResourceIdType;
  "isActive"?: boolean | number;
  "isSevere"?: boolean | number;
  "message"?: string;
  "type"?: string;
  "updatedAt"?: string;
  "userDisplayName"?: string;
}


// type: interface
// name: DataSourceListType
export interface DataSourceListType {
  datasource?: DataSourceType | DataSourceType[];
  "includeAll"?: boolean | number;
}


// type: interface
// name: DataSourceType
export interface DataSourceType {
  connectionCredentials?: ConnectionCredentialsType;
  location?: LocationType;
  owner?: UserType;
  project?: ProjectType;
  site?: SiteType;
  tags?: TagListType;
  "certificationNote"?: string;
  "connectedWorkbooksCount"?: number;
  "contentUrl"?: string;
  "createdAt"?: string;
  "databaseName"?: string;
  "description"?: string;
  "encryptExtracts"?: string;
  "favoritesTotal"?: number;
  "hasAlert"?: boolean | number;
  "hasExtracts"?: boolean | number;
  "id"?: ResourceIdType;
  "isCertified"?: boolean | number;
  "isPublished"?: boolean | number;
  "name"?: string;
  "parentType"?: "DataRole";
  "serverName"?: string;
  "size"?: number;
  "type"?: string;
  "updatedAt"?: string;
  "useRemoteQueryAgent"?: boolean | number;
  "webpageUrl"?: string;
}


// type: interface
// name: DataUpdateConstConditionType
export interface DataUpdateConstConditionType {
  type: "boolean" | "datetime" | "double" | "integer" | "string";
  v: string;
}


// type: interface
// name: DegradationListType
export interface DegradationListType {
  downgradedFeature?: DegradationType | DegradationType[];
}


// type: interface
// name: DegradationType
export interface DegradationType {
  "name"?: string;
  "severity"?: string;
}


// type: interface
// name: DomainDirectiveListType
export interface DomainDirectiveListType {
  domain?: DomainDirectiveType | DomainDirectiveType[];
}


// type: interface
// name: DomainDirectiveType
export interface DomainDirectiveType {
  "id"?: string;
  "name": string;
  "shortName"?: string;
}


// type: interface
// name: ErrorType
export interface ErrorType {
  callstack: string;
  detail: string;
  summary: string;
  "code": number;
}


// type: interface
// name: ExtensionsSafeListEntry
export interface ExtensionsSafeListEntry {
  fullDataAllowed: boolean | number;
  promptNeeded: boolean | number;
  url: string;
  "locale"?: string;
  "language"?: string;
}


// type: interface
// name: ExtensionsServerSettingsType
export interface ExtensionsServerSettingsType {
  blockList?: unknown;
  extensionsGloballyEnabled: boolean | number;
}


// type: interface
// name: ExtensionsSiteSettingsType
export interface ExtensionsSiteSettingsType {
  safeList?: ExtensionsSafeListEntry | ExtensionsSafeListEntry[];
  extensionsEnabled: boolean | number;
  useDefaultSetting: boolean | number;
}


// type: interface
// name: ExtensionUrlStatusType
export interface ExtensionUrlStatusType {
  "status"?: string;
}


// type: interface
// name: ExtractCreationJobType
export interface ExtractCreationJobType {
  datasource: DataSourceType;
  jobLuid: string;
  notes: string;
  workbook: WorkbookType;
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
  "favoriteIdMoveAfter": ResourceIdType;
  "favoriteType": FavoriteTypeType;
  "favoriteTypeMoveAfter": FavoriteTypeType;
}


// type: interface
// name: FileUploadType
export interface FileUploadType {
  "fileSize"?: string;
  "uploadSessionId": FileUploadSessionIdType;
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
  "description"?: string;
  "name"?: string;
  "overrideValue"?: string;
  "parameterId"?: ResourceIdType;
}


// type: interface
// name: FlowParameterSpecType
export interface FlowParameterSpecType {
  "overrideValue"?: string;
  "parameterId"?: ResourceIdType;
}


// type: interface
// name: FlowParameterType
export interface FlowParameterType {
  domain: FlowParameterDomainType;
  "description"?: string;
  "id"?: ResourceIdType;
  "isRequired"?: boolean | number;
  "name"?: string;
  "type"?: string;
  "value"?: string;
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
  "runMode"?: "full" | "incremental";
}


// type: interface
// name: FlowRunType
export interface FlowRunType {
  flowParameterRuns?: FlowParameterRunListType;
  "backgroundJobId"?: string;
  "completedAt"?: string;
  "flowId"?: string;
  "id"?: ResourceIdType;
  "progress"?: number;
  "startedAt"?: string;
  "status"?: "Cancelled" | "Failed" | "InProgress" | "Pending" | "Success";
}


// type: interface
// name: FlowType
export interface FlowType {
  owner?: UserType;
  parameters?: FlowParameterListType;
  project?: ProjectType;
  site?: SiteType;
  tags?: TagListType;
  "createdAt"?: string;
  "description"?: string;
  "fileType"?: string;
  "id"?: ResourceIdType;
  "name"?: string;
  "updatedAt"?: string;
  "webpageUrl"?: string;
}


// type: interface
// name: FrequencyDetailsType
export interface FrequencyDetailsType {
  intervals: {
    interval?: IntervalType | IntervalType[];
  };
  "end"?: string;
  "start": string;
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
  "minimumSiteRole"?: SiteRoleType;
  "name"?: string;
  "userCount"?: number;
}


// type: interface
// name: ImportDirectiveType
export interface ImportDirectiveType {
  "domainName": string;
  "grantLicenseMode": "onLogin" | "onSync";
  "siteRole": SiteRoleType;
  "source": ImportSourceType;
}


// type: interface
// name: IntervalType
export interface IntervalType {
  "hours"?: "1" | "12" | "2" | "4" | "6" | "8";
  "minutes"?: "15" | "30";
  "monthDay"?: "LastDay";
  "weekDay"?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
}


// type: interface
// name: JobType
export interface JobType {
  extractCreationJob?: ExtractCreationJobType;
  extractRefreshJob?: ExtractRefreshJobType;
  runFlowJobType?: RunFlowJobType;
  statusNotes?: StatusNoteListType;
  subscriptionJobType?: SubscriptionJobType;
  updateUploadedFileJob?: UpdateUploadedFileJobType;
  "completedAt"?: string;
  "createdAt"?: string;
  "finishCode"?: number;
  "id"?: ResourceIdType;
  "mode"?: "Asynchronous";
  "progress"?: number;
  "startedAt"?: string;
  "type"?: "GroupSync" | "PublishDatasource" | "PublishWorkbook" | "RefreshExtract" | "RunFlow";
  "updatedAt"?: string;
}


// type: interface
// name: LabelType
export interface LabelType {
  userDisplayName?: string;
  contentId?: string;
  contentType?: string;
  message?: string;
  value?: string;
  category?: string;
  active?: boolean;
  elevated?: boolean;
  createdAt?: boolean;
  updatedAt?: string;
  site?: SiteType;
  owner?: UserType;
}


// type: interface
// name: LinkedTaskJobType
export interface LinkedTaskJobType {
  "createdAt"?: string;
  "endedAt"?: string;
  "id"?: ResourceIdType;
  "linkedTaskId"?: ResourceIdType;
  "startedAt"?: string;
  "status"?: "Cancelled" | "Failed" | "InProgress" | "Pending" | "Success";
}


// type: interface
// name: LinkedTaskListType
export interface LinkedTaskListType {
  linkedTasks?: LinkedTaskType | LinkedTaskType[];
}


// type: interface
// name: LinkedTaskStepListType
export interface LinkedTaskStepListType {
  linkedTaskSteps?: LinkedTaskStepType | LinkedTaskStepType[];
}


// type: interface
// name: LinkedTaskStepType
export interface LinkedTaskStepType {
  task: TaskType;
  "id"?: ResourceIdType;
  "stepNumber"?: number;
  "stopDownstreamTasksOnFailure"?: boolean | number;
}


// type: interface
// name: LinkedTaskType
export interface LinkedTaskType {
  linkedTaskSteps: LinkedTaskStepListType;
  schedule?: ScheduleType;
  "id"?: ResourceIdType;
  "numSteps"?: number;
}


// type: interface
// name: LocationType
export interface LocationType {
  "id"?: ResourceIdType;
  "name"?: string;
  "type"?: "PersonalSpace" | "Project";
}


// type: interface
// name: MetricListType
export interface MetricListType {
  metric?: MetricType | MetricType[];
}


// type: interface
// name: MetricType
export interface MetricType {
  owner?: UserType;
  project?: ProjectType;
  site?: SiteType;
  tags?: TagListType;
  underlyingView?: ViewType;
  "createdAt"?: string;
  "description"?: string;
  "id"?: ResourceIdType;
  "name"?: string;
  "suspended"?: boolean | number;
  "updatedAt"?: string;
  "webpageUrl"?: string;
}


// type: interface
// name: MobileSecuritySettingsListType
export interface MobileSecuritySettingsListType {
  mobileSecuritySettings?: MobileSecuritySettingsPolicyType | MobileSecuritySettingsPolicyType[];
}


// type: interface
// name: MobileSecuritySettingsPolicyType
export interface MobileSecuritySettingsPolicyType {
  androidConfig: PolicyType;
  iosConfig: PolicyType;
  "enabled": boolean | number;
  "name": string;
}


// type: interface
// name: NotificationPreferenceUpdateStatusType
export interface NotificationPreferenceUpdateStatusType {
  error?: ErrorType;
  status: "Failed" | "Success";
  userNotificationsPreference: UserNotificationsPreferenceType;
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
  valueList: unknown;
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
  contentsCounts?: ContentsCountsType;
  owner?: UserType;
  "contentPermissions"?: "LockedToProject" | "LockedToProjectWithoutNested" | "ManagedByOwner";
  "controllingPermissionsProjectId"?: ResourceIdType;
  "createdAt"?: string;
  "description"?: string;
  "favoritesTotal"?: number;
  "id"?: ResourceIdType;
  "name"?: string;
  "parentProjectId"?: ResourceIdType;
  "topLevelProject"?: boolean | number;
  "updatedAt"?: string;
  "writeable"?: boolean | number;
}


// type: interface
// name: RecentListType
export interface RecentListType {
  recent?: RecentType | RecentType[];
}


// type: interface
// name: RecommendationListType
export interface RecommendationListType {
  recommendation?: RecommendationType | RecommendationType[];
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
  "current"?: boolean | number;
  "deleted"?: boolean | number;
  "publishedAt"?: string;
  "revisionNumber"?: number;
  "sizeInBytes"?: number;
}


// type: interface
// name: RunFlowJobType
export interface RunFlowJobType {
  flow: FlowType;
  notes: string;
  "flowRunId"?: string;
}


// type: interface
// name: SalesforceAppListType
export interface SalesforceAppListType {
  salesforceApp: SalesforceAppType | SalesforceAppType[];
}


// type: interface
// name: SalesforceAppType
export interface SalesforceAppType {
  "id"?: string;
  "name"?: string;
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
  "createdAt"?: string;
  "endScheduleAt"?: string;
  "executionOrder"?: "Parallel" | "Serial";
  "frequency"?: "Daily" | "Hourly" | "Monthly" | "Weekly";
  "id"?: ResourceIdType;
  "name"?: string;
  "nextRunAt"?: string;
  "priority"?: number;
  "state"?: string;
  "type"?: "ActiveDirectorySync" | "DataAcceleration" | "Extract" | "Flow" | "Subscription";
  "updatedAt"?: string;
}


// type: interface
// name: ServerInfo
export interface ServerInfo {
  platform: string;
  prepConductorVersion: string;
  productVersion: ProductVersion;
  restApiVersion: RestApiVersion;
  serverSettings: ServerSettings;
}


// type: interface
// name: ServerSettings
export interface ServerSettings {
  oAuthEnabled: boolean | number;
  offlineInteractionSupportedPhase: number;
  sheetImageMaxAgeCeiling: number;
  sheetImageMaxAgeFloor: number;
}


// type: interface
// name: SessionsType
export interface SessionsType {
  session?: SessionType | SessionType[];
}


// type: interface
// name: SessionType
export interface SessionType {
  site: SiteType;
  user: UserType;
}


// type: interface
// name: SiteEmbeddingSettingsType
export interface SiteEmbeddingSettingsType {
  unrestrictedEmbedding?: boolean;
  allowList?: string;
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
    "numCreators"?: number;
    "numExplorers"?: number;
    "numUsers": number;
    "numViewers"?: number;
    "storage": number;
  };
  "adminInsightsPublishFrequency"?: number;
  "adminMode"?: "ContentAndUsers" | "ContentOnly";
  "allowSubscriptionAttachments"?: boolean | number;
  "askDataMode"?: "DisabledAlways" | "DisabledByDefault";
  "authoringEnabled"?: boolean | number;
  "autoSuspendRefreshEnabled"?: boolean | number;
  "autoSuspendRefreshInactivityWindow"?: number;
  "cacheWarmupEnabled"?: boolean | number;
  "catalogObfuscationEnabled"?: boolean | number;
  "catalogingEnabled"?: boolean | number;
  "commentingEnabled"?: boolean | number;
  "commentingMentionsEnabled"?: boolean | number;
  "contentUrl"?: string;
  "customSubscriptionEmail"?: string;
  "customSubscriptionEmailEnabled"?: boolean | number;
  "customSubscriptionFooter"?: string;
  "customSubscriptionFooterEnabled"?: boolean | number;
  "dataAccelerationMode"?: string;
  "dataAlertsEnabled"?: boolean | number;
  "derivedPermissionsEnabled"?: boolean | number;
  "disableSubscriptions"?: boolean | number;
  "dqwSubscriptionsEnabled"?: boolean | number;
  "editingFlowsEnabled"?: boolean | number;
  "einsteinInFlowEnabled"?: boolean | number;
  "explainDataEnabled"?: boolean | number;
  "extractEncryptionMode"?: string;
  "flowAutoSaveEnabled"?: boolean | number;
  "flowOutputSubscriptionsDataAsEmailAttachmentEnabled"?: boolean | number;
  "flowOutputSubscriptionsDataInEmailBodyEnabled"?: boolean | number;
  "flowOutputSubscriptionsEnabled"?: boolean | number;
  "flowParametersAnyTypeEnabled"?: boolean | number;
  "flowParametersEnabled"?: boolean | number;
  "flowsEnabled"?: boolean | number;
  "guestAccessEnabled"?: boolean | number;
  "id"?: ResourceIdType;
  "linkedTaskRunNowEnabled"?: boolean | number;
  "linkedTaskSchedulingEnabled"?: boolean | number;
  "loginBasedLicenseManagementEnabled"?: boolean | number;
  "metricsContentTypeEnabled"?: boolean | number;
  "mobileBiometricsEnabled"?: boolean | number;
  "name"?: string;
  "namedSharingEnabled"?: boolean | number;
  "notifySiteAdminsOnThrottle"?: boolean | number;
  "personalSpaceEnabled"?: boolean | number;
  "personalSpaceStorageQuota"?: string;
  "requestAccessEnabled"?: boolean | number;
  "revisionHistoryEnabled"?: boolean | number;
  "revisionLimit"?: RevisionLimitType;
  "runNowEnabled"?: boolean | number;
  "schedulingFlowsEnabled"?: boolean | number;
  "selfServiceScheduleForRefreshEnabled"?: boolean | number;
  "sheetImageEnabled"?: boolean | number;
  "siteInviteEmailEnabled"?: boolean | number;
  "state"?: string;
  "storageQuota"?: string;
  "subscribeOthersEnabled"?: boolean | number;
  "tagLimit"?: number;
  "tierCreatorCapacity"?: SiteCapacityType;
  "tierExplorerCapacity"?: SiteCapacityType;
  "tierViewerCapacity"?: SiteCapacityType;
  "timeZone"?: string;
  "useDefaultTimeZone"?: boolean | number;
  "userQuota"?: string;
  "userVisibilityMode"?: string;
  "webExtractionEnabled"?: boolean | number;
  "webZoneContentEnabled"?: boolean | number;
}


// type: interface
// name: StatusNoteListType
export interface StatusNoteListType {
  statusNote?: StatusNoteType | StatusNoteType[];
}


// type: interface
// name: StatusNoteType
export interface StatusNoteType {
  "text"?: string;
  "type":
    | "CountOfUsersAddedToGroup"
    | "CountOfUsersAddedToSite"
    | "CountOfUsersInActiveDirectoryGroup"
    | "CountOfUsersInformationUpdated"
    | "CountOfUsersProcessed"
    | "CountOfUsersRemovedFromGroup"
    | "CountOfUsersSiteRoleUpdated"
    | "CountOfUsersSkipped"
    | "CountOfUsersUnlicensed"
    | "CountOfUsersWithInsufficientLicenses";
  "value"?: string;
}


// type: interface
// name: SubscriptionContentType
export interface SubscriptionContentType {
  "id": ResourceIdType;
  "name"?: unknown;
  "sendIfViewEmpty"?: boolean | number;
  "type": "View" | "Workbook";
}


// type: interface
// name: SubscriptionJobType
export interface SubscriptionJobType {
  notes: string;
  subscriptionId: ResourceIdType;
  subscriptionSubject: string;
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
  "attachImage"?: boolean | number;
  "attachPdf"?: boolean | number;
  "id"?: ResourceIdType;
  "message"?: string;
  "pageOrientation"?: string;
  "pageSizeOption"?: string;
  "refreshExtractTriggered"?: boolean | number;
  "subject"?: string;
  "suspended"?: boolean | number;
}


// type: interface
// name: TableAnchorListType
export interface TableAnchorListType {
  tableAnchor: TableAnchorType | TableAnchorType[];
}


// type: interface
// name: TableAnchorType
export interface TableAnchorType {
  "fullName"?: string;
  "id"?: ResourceIdType;
  "name"?: string;
}


// type: interface
// name: TableauCredentialsType
export interface TableauCredentialsType {
  site: SiteType;
  user?: UserType;
  "estimatedTimeToExpiration"?: string;
  "name"?: string;
  "password"?: string;
  "personalAccessTokenName"?: string;
  "personalAccessTokenSecret"?: string;
  "token"?: string;
}


// type: interface
// name: TableType
export interface TableType {
  certifier: UserType;
  contact: UserType;
  location: LocationType;
  site?: SiteType;
  tags: TagListType;
  "certificationNote"?: string;
  "description"?: string;
  "id"?: ResourceIdType;
  "isCertified"?: boolean | number;
  "isEmbedded"?: boolean | number;
  "name"?: string;
  "schema"?: string;
}


// type: interface
// name: TagBatchType
export interface TagBatchType {
  contents: ContentListType;
  tags: TagListType;
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
  flow: FlowType;
  flowRunSpec: FlowRunSpecType;
  schedule?: ScheduleType;
  "consecutiveFailedCount"?: number;
  "id"?: string;
  "priority"?: number;
  "type"?: string;
}


// type: interface
// name: UpdateUploadedFileJobType
export interface UpdateUploadedFileJobType {
  connectionLuid: string;
  datasource: DataSourceType;
  notes: string;
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
  "disabledByOverride"?: boolean | number;
  "enabled"?: boolean | number;
  "notificationType"?: string;
}


// type: interface
// name: UserType
export interface UserType {
  domain?: DomainDirectiveType;
  "authSetting"?: SiteUserAuthSettingType;
  "contentAdmin"?: boolean | number;
  "email"?: string;
  "externalAuthUserId"?: string;
  "fullName"?: string;
  "id"?: ResourceIdType;
  "language"?: string;
  "lastLogin"?: string;
  "locale"?: string;
  "name"?: string;
  "password"?: string;
  "publish"?: boolean | number;
  "role"?: LicensingRoleType;
  "siteRole"?: SiteRoleType;
  "suppressGettingStarted"?: boolean | number;
}


// type: interface
// name: ViewListType
export interface ViewListType {
  view?: ViewType | ViewType[];
}


// type: interface
// name: ViewType
export interface ViewType {
  dataAccelerationConfig?: DataAccelerationInfoType;
  location?: LocationType;
  owner?: UserType;
  project?: ProjectType;
  tags?: TagListType;
  usage?: {
    "totalViewCount": number;
  };
  workbook?: WorkbookType;
  "contentUrl"?: string;
  "createdAt"?: string;
  "favoritesTotal"?: number;
  "hidden"?: boolean | number;
  "id"?: ResourceIdType;
  "name"?: string;
  "recentlyViewed"?: boolean | number;
  "sheetType"?: string;
  "updatedAt"?: string;
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
  "errorCode"?: string;
  "id"?: string;
  "message"?: string;
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
// name: WebhookSourceEventFlowCompletedType
export interface WebhookSourceEventFlowCompletedType {
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
  owner: UserType;
  "webhook-destination": WebhookDestinationType;
  "webhook-source": WebhookSourceType;
  "createdAt"?: string;
  "event"?: string;
  "id"?: ResourceIdType;
  "isEnabled"?: boolean | number;
  "name"?: string;
  "statusChangeReason"?: string;
  "updatedAt"?: string;
}


// type: interface
// name: WorkbookListType
export interface WorkbookListType {
  workbook?: WorkbookType | WorkbookType[];
}


// type: interface
// name: WorkbookType
export interface WorkbookType {
  connectionCredentials?: ConnectionCredentialsType;
  connections?: ConnectionListType;
  dataAccelerationConfig?: DataAccelerationInfoType;
  location?: LocationType;
  owner?: UserType;
  project?: ProjectType;
  site?: SiteType;
  tags?: TagListType;
  views?: ViewListType;
  "contentUrl"?: string;
  "createdAt"?: string;
  "defaultViewId"?: ResourceIdType;
  "description"?: string;
  "encryptExtracts"?: string;
  "hasExtracts"?: boolean | number;
  "id"?: ResourceIdType;
  "name"?: string;
  "recentlyViewed"?: boolean | number;
  "sheetCount"?: number;
  "showTabs"?: string;
  "size"?: number;
  "thumbnailsUserId"?: ResourceIdType;
  "updatedAt"?: string;
  "webpageUrl"?: string;
}


// type: interface
// name: ContentResponse
export interface ContentResponse {
  uri?: string;
  content?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  highlights?: {
    [k: string]: string[];
  };
  collapseCount?: number;
  diagnostics?: {
    [k: string]: string;
  };
}


// type: interface
// name: PageOfContentResponse
export interface PageOfContentResponse {
  next?: string;
  prev?: string;
  pageIndex?: number;
  startIndex?: number;
  total?: number;
  limit?: number;
  items?: ContentResponse[];
}


// type: interface
// name: SearchResultsRepresentationV2
export interface SearchResultsRepresentationV2 {
  terms?: string;
  filter?: string;
  sort?: string;
  hits?: PageOfContentResponse;
}


// type: type
// name: ActionsRequest
export type ActionsRequest = { actions : DataUpdateActionListType };


// type: type
// name: BroadcastViewSendRequest
export type BroadcastViewSendRequest = { broadcastViewSend : BroadcastViewSendType };


// type: type
// name: ConnectedApplicationRequest
export type ConnectedApplicationRequest = { connectedApplication : ConnectedApplicationType };


// type: type
// name: ConnectedApplicationsRequest
export type ConnectedApplicationsRequest = { connectedApplications : ConnectedApplicationListType };


// type: type
// name: ConnectionRequest
export type ConnectionRequest = { connection : ConnectionType };


// type: type
// name: ConnectionsRequest
export type ConnectionsRequest = { connections : ConnectionListType };


// type: type
// name: ContentListRequest
export type ContentListRequest = { contentList : ContentListType };


// type: type
// name: ContentLocationRequestRequest
export type ContentLocationRequestRequest = { contentLocationRequest : ContentLocationRequestType };


// type: type
// name: CredentialsRequest
export type CredentialsRequest = { credentials : TableauCredentialsType };


// type: type
// name: DataAlertRequest
export type DataAlertRequest = { dataAlert : DataAlertType };


// type: type
// name: DataAlertsRequest
export type DataAlertsRequest = { dataAlerts : DataAlertListType };


// type: type
// name: DataQualityIndicatorRequest
export type DataQualityIndicatorRequest = { dataQualityIndicator : DataQualityIndicatorType };


// type: type
// name: DataQualityTriggerRequest
export type DataQualityTriggerRequest = { dataQualityTrigger : DataQualityTriggerType };


// type: type
// name: DataQualityWarningRequest
export type DataQualityWarningRequest = { dataQualityWarning : DataQualityWarningType };


// type: type
// name: DatabaseRequest
export type DatabaseRequest = { database : DatabaseType };


// type: type
// name: DatabaseAnchorRequest
export type DatabaseAnchorRequest = { databaseAnchor : DatabaseAnchorRequestType };


// type: type
// name: DatasourceRequest
export type DatasourceRequest = { datasource : DataSourceType };


// type: type
// name: DatasourcesRequest
export type DatasourcesRequest = { datasources : DataSourceListType };


// type: type
// name: DomainRequest
export type DomainRequest = { domain : DomainDirectiveType };


// type: type
// name: ExtensionsServerSettingsRequest
export type ExtensionsServerSettingsRequest = { extensionsServerSettings : ExtensionsServerSettingsType };


// type: type
// name: ExtensionsSiteSettingsRequest
export type ExtensionsSiteSettingsRequest = { extensionsSiteSettings : ExtensionsSiteSettingsType };


// type: type
// name: FavoriteRequest
export type FavoriteRequest = { favorite : FavoriteType };


// type: type
// name: FavoriteOrderingsRequest
export type FavoriteOrderingsRequest = { favoriteOrderings : FavoriteOrderingListType };


// type: type
// name: FlowRequest
export type FlowRequest = { flow : FlowType };


// type: type
// name: FlowRunSpecRequest
export type FlowRunSpecRequest = { flowRunSpec : FlowRunSpecType };


// type: type
// name: GroupRequest
export type GroupRequest = { group : GroupType };


// type: type
// name: MetricRequest
export type MetricRequest = { metric : MetricType };


// type: type
// name: MobileSecuritySettingsListRequest
export type MobileSecuritySettingsListRequest = { mobileSecuritySettingsList : MobileSecuritySettingsListType };


// type: type
// name: PermissionsRequest
export type PermissionsRequest = { permissions : PermissionsType };


// type: type
// name: ProjectRequest
export type ProjectRequest = { project : ProjectType };


// type: type
// name: RecommendationDismissalRequest
export type RecommendationDismissalRequest = { recommendationDismissal : RecommendationDismissalType };


// type: type
// name: ScheduleRequest
export type ScheduleRequest = { schedule : ScheduleType };


// type: type
// name: SiteRequest
export type SiteRequest = { site : SiteType };


// type: type
// name: SitesRequest
export type SitesRequest = { sites : SiteListType };


// type: type
// name: SubscriptionRequest
export type SubscriptionRequest = { subscription : SubscriptionType };


// type: type
// name: TableRequest
export type TableRequest = { table : TableType };


// type: type
// name: TagBatchRequest
export type TagBatchRequest = { tagBatch : TagBatchType };


// type: type
// name: TagsRequest
export type TagsRequest = { tags : TagListType };


// type: type
// name: TaskRequest
export type TaskRequest = { task : TaskType };


// type: type
// name: UserRequest
export type UserRequest = { user : UserType };


// type: type
// name: UserNotificationsPreferenceRequest
export type UserNotificationsPreferenceRequest = { userNotificationsPreference : UserNotificationsPreferenceType };


// type: type
// name: UserNotificationsPreferencesRequest
export type UserNotificationsPreferencesRequest = { userNotificationsPreferences : UserNotificationsPreferenceListType };


// type: type
// name: ViewRequest
export type ViewRequest = { view : ViewType };


// type: type
// name: WebhookRequest
export type WebhookRequest = { webhook : WebhookType };


// type: type
// name: WorkbookRequest
export type WorkbookRequest = { workbook : WorkbookType };


// type: type
// name: ColumnRequest
export type ColumnRequest = { column : ColumnListType };


// type: type
// name: LabelRequest
export type LabelRequest = { label : LabelType };


// type: type
// name: UsersRequest
export type UsersRequest = { users : UserListType };


// type: type
// name: BackgroundJobResponse
export type BackgroundJobResponse = { backgroundJob : BackgroundJobType };


// type: type
// name: BackgroundJobsResponse
export type BackgroundJobsResponse = { backgroundJobs : BackgroundJobListType };


// type: type
// name: BroadcastViewResponse
export type BroadcastViewResponse = { broadcastView : BroadcastViewType };


// type: type
// name: BroadcastViewsResponse
export type BroadcastViewsResponse = { broadcastViews : BroadcastViewListType };


// type: type
// name: ConnectedApplicationResponse
export type ConnectedApplicationResponse = { connectedApplication : ConnectedApplicationType };


// type: type
// name: ConnectedApplicationSecretResponse
export type ConnectedApplicationSecretResponse = { connectedApplicationSecret : ConnectedApplicationSecretType };


// type: type
// name: ConnectedApplicationsResponse
export type ConnectedApplicationsResponse = { connectedApplications : ConnectedApplicationListType };


// type: type
// name: ConnectionResponse
export type ConnectionResponse = { connection : ConnectionType };


// type: type
// name: ConnectionsResponse
export type ConnectionsResponse = { connections : ConnectionListType };


// type: type
// name: ContentLocationResponse
export type ContentLocationResponse = { contentLocation : LocationType };


// type: type
// name: CredentialsResponse
export type CredentialsResponse = { credentials : TableauCredentialsType };


// type: type
// name: DataAlertResponse
export type DataAlertResponse = { dataAlert : DataAlertType };


// type: type
// name: DataAlertUpdateResultsResponse
export type DataAlertUpdateResultsResponse = { dataAlertUpdateResults : DataAlertUpdateStatusListType };


// type: type
// name: DataAlertsResponse
export type DataAlertsResponse = { dataAlerts : DataAlertListType };


// type: type
// name: DataAlertsRecipientResponse
export type DataAlertsRecipientResponse = { dataAlertsRecipient : DataAlertsRecipientType };


// type: type
// name: DataAlertsRecipientListResponse
export type DataAlertsRecipientListResponse = { dataAlertsRecipientList : DataAlertsRecipientListType };


// type: type
// name: DataQualityIndicatorResponse
export type DataQualityIndicatorResponse = { dataQualityIndicator : DataQualityIndicatorType };


// type: type
// name: DataQualityIndicatorListResponse
export type DataQualityIndicatorListResponse = { dataQualityIndicatorList : DataQualityIndicatorListType };


// type: type
// name: DataQualityTriggerResponse
export type DataQualityTriggerResponse = { dataQualityTrigger : DataQualityTriggerType };


// type: type
// name: DataQualityTriggerListResponse
export type DataQualityTriggerListResponse = { dataQualityTriggerList : DataQualityTriggerListType };


// type: type
// name: DataQualityWarningResponse
export type DataQualityWarningResponse = { dataQualityWarning : DataQualityWarningType };


// type: type
// name: DataQualityWarningListResponse
export type DataQualityWarningListResponse = { dataQualityWarningList : DataQualityWarningListType };


// type: type
// name: DatabaseResponse
export type DatabaseResponse = { database : DatabaseType };


// type: type
// name: DatabaseAnchorsResponse
export type DatabaseAnchorsResponse = { databaseAnchors : DatabaseAnchorResponseListType };


// type: type
// name: DatasourceResponse
export type DatasourceResponse = { datasource : DataSourceType };


// type: type
// name: DomainResponse
export type DomainResponse = { domain : DomainDirectiveType };


// type: type
// name: DomainListResponse
export type DomainListResponse = { domainList : DomainDirectiveListType };


// type: type
// name: DowngradeInfoResponse
export type DowngradeInfoResponse = { downgradeInfo : DegradationListType };


// type: type
// name: ErrorResponse
export type ErrorResponse = { error : ErrorType };


// type: type
// name: ExtensionUrlStatusResponse
export type ExtensionUrlStatusResponse = { extensionUrlStatus : ExtensionUrlStatusType };


// type: type
// name: ExtensionsServerSettingsResponse
export type ExtensionsServerSettingsResponse = { extensionsServerSettings : ExtensionsServerSettingsType };


// type: type
// name: ExtensionsSiteSettingsResponse
export type ExtensionsSiteSettingsResponse = { extensionsSiteSettings : ExtensionsSiteSettingsType };


// type: type
// name: FavoritesResponse
export type FavoritesResponse = { favorites : FavoriteListType };


// type: type
// name: FileUploadResponse
export type FileUploadResponse = { fileUpload : FileUploadType };


// type: type
// name: FlowResponse
export type FlowResponse = { flow : FlowType };


// type: type
// name: FlowRunResponse
export type FlowRunResponse = { flowRun : FlowRunType };


// type: type
// name: FlowWarningsResponse
export type FlowWarningsResponse = { flowWarnings : FlowWarningsListContainerType };


// type: type
// name: GroupResponse
export type GroupResponse = { group : GroupType };


// type: type
// name: JobResponse
export type JobResponse = { job : JobType };


// type: type
// name: LinkedTaskResponse
export type LinkedTaskResponse = { linkedTask : LinkedTaskType };


// type: type
// name: LinkedTaskJobResponse
export type LinkedTaskJobResponse = { linkedTaskJob : LinkedTaskJobType };


// type: type
// name: MetricResponse
export type MetricResponse = { metric : MetricType };


// type: type
// name: MobileSecuritySettingsListResponse
export type MobileSecuritySettingsListResponse = { mobileSecuritySettingsList : MobileSecuritySettingsListType };


// type: type
// name: NotificationPreferenceUpdateStatusResponse
export type NotificationPreferenceUpdateStatusResponse = { notificationPreferenceUpdateStatus : NotificationPreferenceUpdateStatusType };


// type: type
// name: NotificationUpdateResultResponse
export type NotificationUpdateResultResponse = { notificationUpdateResult : NotificationsPreferenceUpdateStatusListType };


// type: type
// name: PaginatedResponseGroupResponse
export type PaginatedResponseGroupResponse = { paginatedResponseGroup : PaginatedResponseGroup };


// type: type
// name: PermissionsResponse
export type PermissionsResponse = { permissions : PermissionsType };


// type: type
// name: PersonalSpaceResponse
export type PersonalSpaceResponse = { personalSpace : PersonalSpaceType };


// type: type
// name: ProjectResponse
export type ProjectResponse = { project : ProjectType };


// type: type
// name: RecentsResponse
export type RecentsResponse = { recents : RecentListType };


// type: type
// name: RecommendationsResponse
export type RecommendationsResponse = { recommendations : RecommendationListType };


// type: type
// name: SalesforceAppsResponse
export type SalesforceAppsResponse = { salesforceApps : SalesforceAppListType };


// type: type
// name: ScheduleResponse
export type ScheduleResponse = { schedule : ScheduleType };


// type: type
// name: ServerInfoResponse
export type ServerInfoResponse = { serverInfo : ServerInfo };


// type: type
// name: ServerSettingsResponse
export type ServerSettingsResponse = { serverSettings : ServerSettings };


// type: type
// name: SessionResponse
export type SessionResponse = { session : SessionType };


// type: type
// name: SessionsResponse
export type SessionsResponse = { sessions : SessionsType };


// type: type
// name: SiteResponse
export type SiteResponse = { site : SiteType };


// type: type
// name: StatusResponse
export type StatusResponse = { status : string };


// type: type
// name: SubscriptionResponse
export type SubscriptionResponse = { subscription : SubscriptionType };


// type: type
// name: TableResponse
export type TableResponse = { table : TableType };


// type: type
// name: TagBatchResponse
export type TagBatchResponse = { tagBatch : TagBatchType };


// type: type
// name: TagsResponse
export type TagsResponse = { tags : TagListType };


// type: type
// name: TaskResponse
export type TaskResponse = { task : TaskType };


// type: type
// name: TasksResponse
export type TasksResponse = { tasks : TaskListType };


// type: type
// name: UriResponse
export type UriResponse = { uri : string };


// type: type
// name: UserResponse
export type UserResponse = { user : UserType };


// type: type
// name: UserNotificationsPreferenceResponse
export type UserNotificationsPreferenceResponse = { userNotificationsPreference : UserNotificationsPreferenceType };


// type: type
// name: UserNotificationsPreferencesResponse
export type UserNotificationsPreferencesResponse = { userNotificationsPreferences : UserNotificationsPreferenceListType };


// type: type
// name: ViewResponse
export type ViewResponse = { view : ViewType };


// type: type
// name: ViewsResponse
export type ViewsResponse = { views : ViewListType };


// type: type
// name: WebhookResponse
export type WebhookResponse = { webhook : WebhookType };


// type: type
// name: WebhookTestResultResponse
export type WebhookTestResultResponse = { webhookTestResult : WebhookTestResultType };


// type: type
// name: WebhooksResponse
export type WebhooksResponse = { webhooks : WebhookListType };


// type: type
// name: WorkbookResponse
export type WorkbookResponse = { workbook : WorkbookType };


// type: type
// name: DataAccelerationReportResponse
export type DataAccelerationReportResponse = { dataAccelerationReport : DataAccelerationReportType };


// type: type
// name: ColumnResponse
export type ColumnResponse = { column : ColumnListType };


// type: type
// name: LabelListResponse
export type LabelListResponse = { labelList : LabelListType };


// type: type
// name: LabelResponse
export type LabelResponse = { label : LabelType };


// type: type
// name: DatasourcesResponse
export type DatasourcesResponse = { pagination: PaginationType, datasources : DataSourceListType };


// type: type
// name: ExtractsResponse
export type ExtractsResponse = { pagination: PaginationType, extracts : ExtractListType };


// type: type
// name: FlowOutputStepsResponse
export type FlowOutputStepsResponse = { pagination: PaginationType, flowOutputSteps : FlowOutputStepListType };


// type: type
// name: FlowRunsResponse
export type FlowRunsResponse = { pagination: PaginationType, flowRuns : FlowRunListType };


// type: type
// name: FlowsResponse
export type FlowsResponse = { pagination: PaginationType, flows : FlowListType };


// type: type
// name: GroupsResponse
export type GroupsResponse = { pagination: PaginationType, groups : GroupListType };


// type: type
// name: LinkedTasksResponse
export type LinkedTasksResponse = { pagination: PaginationType, linkedTasks : LinkedTaskListType };


// type: type
// name: MetricsResponse
export type MetricsResponse = { pagination: PaginationType, metrics : MetricListType };


// type: type
// name: ProjectsResponse
export type ProjectsResponse = { pagination: PaginationType, projects : ProjectListType };


// type: type
// name: RevisionsResponse
export type RevisionsResponse = { pagination: PaginationType, revisions : RevisionListType };


// type: type
// name: SchedulesResponse
export type SchedulesResponse = { pagination: PaginationType, schedules : ScheduleListType };


// type: type
// name: SitesResponse
export type SitesResponse = { pagination: PaginationType, sites : SiteListType };


// type: type
// name: SubscriptionsResponse
export type SubscriptionsResponse = { pagination: PaginationType, subscriptions : SubscriptionListType };


// type: type
// name: UsersResponse
export type UsersResponse = { pagination: PaginationType, users : UserListType };


// type: type
// name: WorkbooksResponse
export type WorkbooksResponse = { pagination: PaginationType, workbooks : WorkbookListType };


// type: type
// name: ColumnsResponse
export type ColumnsResponse = { pagination: PaginationType, columns : ColumnListType };


// type: type
// name: DatabasesResponse
export type DatabasesResponse = { pagination: PaginationType, databases : DatabaseListType };


// type: type
// name: TablesResponse
export type TablesResponse = { pagination: PaginationType, tables : TableListType };

