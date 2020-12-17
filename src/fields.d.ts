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
