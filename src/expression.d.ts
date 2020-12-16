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
