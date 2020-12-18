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
  



  
