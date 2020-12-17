declare class FieldExpressionBuilder<TSelf> {
    withAllFields(): TSelf;
    withDefaultFields(): TSelf;
    build(): string;
}

declare interface IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class DatasourceFieldExpressionBuilder extends FieldExpressionBuilder<DatasourceFieldExpressionBuilder> {
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

declare class UserFieldExpressionBuilder extends FieldExpressionBuilder<UserFieldExpressionBuilder> {
    addExternalAuthUserId() : UserFieldExpressionBuilder;
    addId() : UserFieldExpressionBuilder;
    addName() : UserFieldExpressionBuilder;
    addSiteRole() : UserFieldExpressionBuilder;
    addLastLogin() : UserFieldExpressionBuilder;
    addFullName() : UserFieldExpressionBuilder;
    addEmail() : UserFieldExpressionBuilder;
    addAuthSetting() : UserFieldExpressionBuilder;
}

declare class ViewFieldExpressionBuilder extends FieldExpressionBuilder<ViewFieldExpressionBuilder> {
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

declare class WorkbookFieldExpressionBuilder extends FieldExpressionBuilder<WorkbookFieldExpressionBuilder> {
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

declare class JobFieldExpressionBuilder extends FieldExpressionBuilder<JobFieldExpressionBuilder> {
    addId() : JobFieldExpressionBuilder;
    addStatus() : JobFieldExpressionBuilder;
    addCreatedAt() : JobFieldExpressionBuilder;
    addStartedAt() : JobFieldExpressionBuilder;
    addEndedAt() : JobFieldExpressionBuilder;
    addPriority() : JobFieldExpressionBuilder;
    addJobType() : JobFieldExpressionBuilder;
    addTitle() : JobFieldExpressionBuilder;
    addSubtitle() : JobFieldExpressionBuilder;
}

declare class GroupFieldExpressionBuilder extends FieldExpressionBuilder<GroupFieldExpressionBuilder> {
    addId() : GroupFieldExpressionBuilder;
    addName() : GroupFieldExpressionBuilder;
    addDomainName() : GroupFieldExpressionBuilder;
    addUserCount() : GroupFieldExpressionBuilder;
    addMinimumSiteRole() : GroupFieldExpressionBuilder;
}

declare class FavoritesFieldExpressionBuilder extends FieldExpressionBuilder<FavoritesFieldExpressionBuilder> { 
    addLabel() : FavoritesFieldExpressionBuilder;
    addParentProjectName   () : FavoritesFieldExpressionBuilder;
    addTargetOwnerName() : FavoritesFieldExpressionBuilder;
    withDatasourceResource() : DatasourceFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
    withProjectResource() : ProjectFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
    withUserResource() : UserFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
    withWorkbookResource() : WorkbookFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
    withViewResource() : ViewFieldExpressionBuilderWithParent<FavoritesFieldExpressionBuilder>;
}

declare class MetricsFieldExpressionBuilder extends FieldExpressionBuilder<MetricsFieldExpressionBuilder> {
    addId() : MetricsFieldExpressionBuilder;
    addName() : MetricsFieldExpressionBuilder;
    withProjectResource() : ProjectFieldExpressionBuilderWithParent<MetricsFieldExpressionBuilder>;
    withOwnerResource() : OwnerFieldExpressionBuilderWithParent<MetricsFieldExpressionBuilder>;
}


declare class ProjectFieldExpressionBuilder extends FieldExpressionBuilder<ProjectFieldExpressionBuilder> {
    addId(): ProjectFieldExpressionBuilder;
    addName(): ProjectFieldExpressionBuilder;
    addDescription(): ProjectFieldExpressionBuilder;
}

declare class OwnerFieldExpressionBuilder extends FieldExpressionBuilder<OwnerFieldExpressionBuilder> {
    addId(): OwnerFieldExpressionBuilder;
    addName(): OwnerFieldExpressionBuilder;
    addFullName(): OwnerFieldExpressionBuilder;
    addSiteRole(): OwnerFieldExpressionBuilder;
    addLastLogin(): OwnerFieldExpressionBuilder;
    addEmail(): OwnerFieldExpressionBuilder;
}

declare class ProjectFieldExpressionBuilderWithParent<TParent> 
extends ProjectFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class ViewFieldExpressionBuilderWithParent<TParent> 
extends ViewFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class WorkbookFieldExpressionBuilderWithParent<TParent> 
extends WorkbookFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class DatasourceFieldExpressionBuilderWithParent<TParent> 
extends DatasourceFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class UserFieldExpressionBuilderWithParent<TParent> 
extends UserFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

declare class OwnerFieldExpressionBuilderWithParent<TParent> 
extends OwnerFieldExpressionBuilder
implements IFieldExpressionBuilderWithParent<TParent> {
    and(): TParent;
}

export declare class FieldExpression {
    static forDatasources() : DatasourceFieldExpressionBuilder;
    static forUsers() : UserFieldExpressionBuilder;
    static forViews() : ViewFieldExpressionBuilder;
    static forWorkbooks() : WorkbookFieldExpressionBuilder;
    static forFavorites() : FavoritesFieldExpressionBuilder;
    static forMetrics() : MetricsFieldExpressionBuilder;
    static forJobs() : JobFieldExpressionBuilder;
    static forGroups() : GroupFieldExpressionBuilder;
    static forProjects() : ProjectFieldExpressionBuilder;
}