export declare class UserFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactStringBuilder<UserFilterExpressionBuilder>;
    lastLogin: DateBuilder<UserFilterExpressionBuilder>;
    siteRole: ExactOrOneOfStringBuilder<UserFilterExpressionBuilder>;
}

export declare class DatasourceFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<DatasourceFilterExpressionBuilder>;
    favoritesTotal: NumberBuilder<DatasourceFilterExpressionBuilder>;
    type: ExactStringBuilder<DatasourceFilterExpressionBuilder>;
    ownerName: ExactStringBuilder<DatasourceFilterExpressionBuilder>;
    createdAt: DateBuilder<DatasourceFilterExpressionBuilder>;
    updatedAt: DateBuilder<DatasourceFilterExpressionBuilder>;
    tags: ExactOrOneOfStringBuilder<DatasourceFilterExpressionBuilder>;
}

export declare class GroupsFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
    domainName: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
    domainNickname: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
    isLocal: BooleanBuilder<GroupsFilterExpressionBuilder>;
    userCount: NumberBuilder<GroupsFilterExpressionBuilder>;
    minimumSiteRole: ExactOrOneOfStringBuilder<GroupsFilterExpressionBuilder>;
}

export declare class JobsFilterExpressionBuilder extends ExpressionBuilder {
    completedAt: DateBuilder<JobsFilterExpressionBuilder>;
    createdAt: DateBuilder<JobsFilterExpressionBuilder>;
    jobType: ExactOrOneOfStringBuilder<JobsFilterExpressionBuilder>;
    notes: LikeStringBuilder<JobsFilterExpressionBuilder>;
    startedAt: DateBuilder<JobsFilterExpressionBuilder>;
    status: ExactStringBuilder<JobsFilterExpressionBuilder>;
    subtitle: ExactOrLikeStringBuilder<JobsFilterExpressionBuilder>;
    title: ExactOrLikeStringBuilder<JobsFilterExpressionBuilder>;
}

export declare class ProjectsFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
    createdAt: DateBuilder<ProjectsFilterExpressionBuilder>;
    ownerName: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
    ownerDomain: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
    ownerEmail: ExactOrOneOfStringBuilder<ProjectsFilterExpressionBuilder>;
    parentProjectId: ExactStringBuilder<ProjectsFilterExpressionBuilder>;
    updatedAt: DateBuilder<ProjectsFilterExpressionBuilder>;
}

export declare class ViewsFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<ViewsFilterExpressionBuilder>;
    createdAt: DateBuilder<ViewsFilterExpressionBuilder>;
    favoritesTotal: NumberBuilder<ViewsFilterExpressionBuilder>;
    updatedAt: DateBuilder<ViewsFilterExpressionBuilder>;
    hitsTotal: NumberBuilder<ViewsFilterExpressionBuilder>;
    tags: ExactOrOneOfStringBuilder<ViewsFilterExpressionBuilder>;
    ownerName: ExactStringBuilder<ViewsFilterExpressionBuilder>;
}

export declare class WorkbooksFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<WorkbooksFilterExpressionBuilder>;
    createdAt: DateBuilder<WorkbooksFilterExpressionBuilder>;
    favoritesTotal: NumberBuilder<WorkbooksFilterExpressionBuilder>;
    updatedAt: DateBuilder<WorkbooksFilterExpressionBuilder>;
    tags: ExactOrOneOfStringBuilder<WorkbooksFilterExpressionBuilder>;
    ownerName: ExactStringBuilder<WorkbooksFilterExpressionBuilder>;
}

export declare class FlowsFilterExpressionBuilder extends ExpressionBuilder {
    name: ExactOrOneOfStringBuilder<FlowsFilterExpressionBuilder>;
    projectName: ExactStringBuilder<FlowsFilterExpressionBuilder>;
    createdAt: DateBuilder<FlowsFilterExpressionBuilder>;
    updatedAt: DateBuilder<FlowsFilterExpressionBuilder>;
    ownerName: ExactStringBuilder<FlowsFilterExpressionBuilder>;
}

export declare class MetricsFilterExpressionBuilder extends ExpressionBuilder {
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

export declare class ExpressionBuilder {
    build(): string;
}

export declare class LikeStringBuilder<T> {
    has(value): T;
}

export declare class ExactStringBuilder<T> {
    eq(value): T;
}

export declare class ExactOrOneOfStringBuilder<T> {
    eq(value): T;
    in(values): T;
}

export declare class ExactOrLikeStringBuilder<T> {
    eq(value): T;
    has(values): T;
}

export declare class BooleanBuilder<T> {
    eq(value): T;
}

export declare class NumberBuilder<T> {
    eq(value): T;
    gt(value): T;
    gte(value): T;
    lt(value): T;
    lte(value): T;
}

export declare class DateBuilder<T> {
    eq(value): T;
    gt(value): T;
    gte(value): T;
    lt(value): T;
    lte(value): T;
}

export declare class FilterExpression {
    static forDatasources() : DatasourceFilterExpressionBuilder;
    static forUsers() : UserFilterExpressionBuilder;
    static forViews() : ViewsFilterExpressionBuilder;
    static forWorkbooks() : WorkbooksFilterExpressionBuilder;
    static forMetrics() : MetricsFilterExpressionBuilder;
    static forJobs() : JobsFilterExpressionBuilder;
    static forGroups() : GroupsFilterExpressionBuilder;
    static forProjects() : ProjectsFilterExpressionBuilder;
    static forFlows() : FlowsFilterExpressionBuilder;
  }
  



  
export declare class SortExpressionBuilder<T> {
    ascending() : T;
    descending() : T;
    build() : string;
}

export declare class UserSortExpressionBuilder extends SortExpressionBuilder<UserSortExpressionBuilder> {
    byLastLogin() : UserSortExpressionBuilder;
    byName() : UserSortExpressionBuilder;
    bySiteRole() : UserSortExpressionBuilder;
}

export declare class DatasourceSortExpressionBuilder extends SortExpressionBuilder<DatasourceSortExpressionBuilder> {
    byName() : DatasourceSortExpressionBuilder;
    byFavoritesTotal() : DatasourceSortExpressionBuilder;
    byType() : DatasourceSortExpressionBuilder;
    byOwnerName() : DatasourceSortExpressionBuilder;
    byCreatedAt() : DatasourceSortExpressionBuilder;
    byUpdatedAt() : DatasourceSortExpressionBuilder;
    byTags() : DatasourceSortExpressionBuilder;   
}

export declare class GroupsSortExpressionBuilder extends SortExpressionBuilder<GroupsSortExpressionBuilder> {
        byName() :GroupsSortExpressionBuilder;
        byDomainName() :GroupsSortExpressionBuilder;
        byDomainNickname() :GroupsSortExpressionBuilder;
        byIsLocal() :GroupsSortExpressionBuilder;
        byUserCount() :GroupsSortExpressionBuilder;
        byMinimumSiteRole() :GroupsSortExpressionBuilder;   
}

export declare class JobsSortExpressionBuilder extends SortExpressionBuilder<JobsSortExpressionBuilder> {
   
        byCompletedAt() :JobsSortExpressionBuilder;
        byCreatedAt() :JobsSortExpressionBuilder;
        byJobType() :JobsSortExpressionBuilder;
        byNotes() :JobsSortExpressionBuilder;
        byStartedAt() :JobsSortExpressionBuilder;
        byStatus() :JobsSortExpressionBuilder;
        bySubtitle() :JobsSortExpressionBuilder;
        byTitle() :JobsSortExpressionBuilder;
    
}

export declare class ProjectsSortExpressionBuilder extends SortExpressionBuilder<ProjectsSortExpressionBuilder> {
    
        byName() :ProjectsSortExpressionBuilder;
        byCreatedAt() :ProjectsSortExpressionBuilder;
        byOwnerName() :ProjectsSortExpressionBuilder;
        byOwnerDomain() :ProjectsSortExpressionBuilder;
        byOwnerEmail() :ProjectsSortExpressionBuilder;
        byParentProjectId() :ProjectsSortExpressionBuilder;
        byUpdatedAt() :ProjectsSortExpressionBuilder;        
    
}

export declare class ViewsSortExpressionBuilder extends SortExpressionBuilder<ViewsSortExpressionBuilder> {
    
        byName() :ViewsSortExpressionBuilder;
        byCreatedAt() :ViewsSortExpressionBuilder;
        byFavoritesTotal() :ViewsSortExpressionBuilder;
        byUpdatedAt() :ViewsSortExpressionBuilder;
        byHitsTotal() :ViewsSortExpressionBuilder;
        byTags() :ViewsSortExpressionBuilder;
        byOwnerName() :ViewsSortExpressionBuilder;
    
}

export declare class WorkbooksSortExpressionBuilder extends SortExpressionBuilder<WorkbooksSortExpressionBuilder> {
    
        byName() :WorkbookSortExpressionBuilder;
        byCreatedAt() :WorkbookSortExpressionBuilder;
        byFavoritesTotal() :WorkbookSortExpressionBuilder;
        byUpdatedAt() :WorkbookSortExpressionBuilder;
        byTags() :WorkbookSortExpressionBuilder;
        byOwnerName() :WorkbookSortExpressionBuilder;
    
}

export declare class FlowsSortExpressionBuilder extends SortExpressionBuilder<FlowsSortExpressionBuilder> {
    
        byName() :FlowsSortExpressionBuilder;
        byProjectName() :FlowsSortExpressionBuilder;
        byCreatedAt() :FlowsSortExpressionBuilder;
        byUpdatedAt() :FlowsSortExpressionBuilder;
        byOwnerName() :FlowsSortExpressionBuilder;
    
}

export declare class MetricsSortExpressionBuilder extends SortExpressionBuilder<MetricsSortExpressionBuilder> {
    
        byName() :MetricsSortExpressionBuilder;
        byProjectName() :MetricsSortExpressionBuilder;
        byCreatedAt() :MetricsSortExpressionBuilder;
        byFavoritesTotal() :MetricsSortExpressionBuilder;
        byUpdatedAt() :MetricsSortExpressionBuilder;
        byHitsTotal() :MetricsSortExpressionBuilder;
        byOwnerName() :MetricsSortExpressionBuilder;
        byOwnerDomain() :MetricsSortExpressionBuilder;
        byOwnerEmail() :MetricsSortExpressionBuilder;
        byTags() :MetricsSortExpressionBuilder;
    
}

export declare class SortExpression {
    static forDatasources() : DatasourceSortExpressionBuilder
    static forUsers() : UserSortExpressionBuilder
    static forViews() : ViewsSortExpressionBuilder
    static forWorkbooks() : WorkbooksSortExpressionBuilder
    static forMetrics() : MetricsSortExpressionBuilder
    static forJobs() : JobsSortExpressionBuilder
    static forGroups() : GroupsSortExpressionBuilder
    static forProjects() : ProjectsSortExpressionBuilder
    static forFlows() : FlowsSortExpressionBuilder
}