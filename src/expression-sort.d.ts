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
    
        byName() :WorkbooksSortExpressionBuilder;
        byCreatedAt() :WorkbooksSortExpressionBuilder;
        byFavoritesTotal() :WorkbooksSortExpressionBuilder;
        byUpdatedAt() :WorkbooksSortExpressionBuilder;
        byTags() :WorkbooksSortExpressionBuilder;
        byOwnerName() :WorkbooksSortExpressionBuilder;
    
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