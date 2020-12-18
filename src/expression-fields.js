

export class FieldExpression {
    static forDatasources() { return new DatasourceFieldExpressionBuilder(); }
    static forUsers() { return new UserFieldExpressionBuilder(); }
    static forViews() { return new ViewFieldExpressionBuilder(); }
    static forWorkbooks() { return new WorkbookFieldExpressionBuilder(); }
    static forFavorites() { return new FavoritesFieldExpressionBuilder(); }
    static forMetrics() { return new MetricsFieldExpressionBuilder(); }
    static forJobs() { return new JobFieldExpressionBuilder(); }
    static forGroups() { return new GroupFieldExpressionBuilder(); }
    static forProjects() { return new ProjectFieldExpressionBuilder(); }
}

export class FieldExpressionBuilder {
    constructor(prefix, parent) { 
        this.prefix = prefix; 
        this.parent = parent; 
        this.keyword = "";
        this.terms = []; 
    }
    addKeyword(keyword) { this.keyword = keyword; }
    addTerm(term) { this.terms.push(term); }
    withAllFields() { this.addKeyword("_all_"); return this; }
    withDefaultFields() { this.addKeyword("_default_"); return this; }
    and() { if(!this.parent) { throw "no parent set"; } return this.parent; }
    build() { 
        if (this.parent) { this.terms.forEach(t => this.parent.addTerm(`${this.prefix}.${t}`)) }
        return this.parent 
            ? this.parent.build() 
            : this.keyword + (this.keyword && this.terms.length ? "," : "" ) + this.terms.join(",");  
    }
}

export class DatasourceFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("datasource", parent); }
    addContentUrl() { this.addTerm("contentUrl"); return this; }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addType() { this.addTerm("type"); return this; }
    addDescription() { this.addTerm("description"); return this; }
    addCreatedAt() { this.addTerm("createdAt"); return this; }
    addUpdatedAt() { this.addTerm("updatedAt"); return this; }
    addEncryptExtracts() { this.addTerm("encryptExtracts"); return this; }
    addIsCertified() { this.addTerm("isCertified"); return this; }
    addUseRemoteQueryAgent() { this.addTerm("useRemoteQueryAgent"); return this; }
    addWebPageUrl() { this.addTerm("webPageUrl"); return this; }
    addSize() { this.addTerm("size"); return this; }
    addTag() { this.addTerm("tag"); return this; }
    addFavoritesTotal() { this.addTerm("favoritesTotal"); return this; }
    addDatabaseName() { this.addTerm("databaseName"); return this; }
    addConnectedWorkbooksCount() { this.addTerm("connectedWorkbooksCount"); return this; }
    addHasAlert() { this.addTerm("hasAlert"); return this; }
    addHasExtracts() { this.addTerm("hasExtracts"); return this; }
    addIsPublished() { this.addTerm("isPublished"); return this; }
    addServerName() { this.addTerm("serverName"); return this; }
    withProjectResource() { return new ProjectFieldExpressionBuilder(this); }
    withOwnerResource() { return new OwnerFieldExpressionBuilder(this); }
}

export class UserFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("user", parent); }
    addExternalAuthUserId() { this.addTerm("externalAuthUserId"); return this; }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addSiteRole() { this.addTerm("siteRole"); return this; }
    addLastLogin() { this.addTerm("lastLogin"); return this; }
    addFullName() { this.addTerm("fullName"); return this; }
    addEmail() { this.addTerm("email"); return this; }
    addAuthSetting() { this.addTerm("authSetting"); return this; }
}

export class ViewFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("view", parent); }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addContentUrl() { this.addTerm("contentUrl"); return this; }
    addCreatedAt() { this.addTerm("createdAt"); return this; }
    addUpdatedAt() { this.addTerm("updatedAt"); return this; }
    addTags() { this.addTerm("tags"); return this; }
    addSheetType() { this.addTerm("sheetType"); return this; }
    addUsage() { this.addTerm("usage"); return this; }
    withWorkbookResource() { return new WorkbookFieldExpressionBuilder(this); }
    withProjectResource() { return new ProjectFieldExpressionBuilder(this); }
    withOwnerResource() { return new OwnerFieldExpressionBuilder(this); }
}

export class WorkbookFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("workbook", parent); }
    addDescription() { this.addTerm("description"); return this; }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addContentUrl() { this.addTerm("contentUrl"); return this; }
    addShowTabs() { this.addTerm("showTabs"); return this; }
    addWebpageUrl() { this.addTerm("webpageUrl"); return this; }
    addSize() { this.addTerm("size"); return this; }
    addCreatedAt() { this.addTerm("createdAt"); return this; }
    addUpdatedAt() { this.addTerm("updatedAt"); return this; }
    addEncryptExtracts() { this.addTerm("encryptExtracts"); return this; }
    addDefaultViewId() { this.addTerm("defaultViewId"); return this; }
    addTag() { this.addTerm("tag"); return this; }
    addSheetCount() { this.addTerm("sheetCount"); return this; }
    addHasExtracts() { this.addTerm("hasExtracts"); return this; }
    withProjectResource() { return new ProjectFieldExpressionBuilder(this); }
    withOwnerResource() { return new OwnerFieldExpressionBuilder(this); }
}

export class JobFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("job", parent); }
    addId() { this.addTerm("id"); return this; }
    addStatus() { this.addTerm("status"); return this; }
    addCreatedAt() { this.addTerm("createdAt"); return this; }
    addStartedAt() { this.addTerm("startedAt"); return this; }
    addEndedAt() { this.addTerm("endedAt"); return this; }
    addPriority() { this.addTerm("priority"); return this; }
    addJobType() { this.addTerm("jobType"); return this; }
    addTitle() { this.addTerm("title"); return this; }
    addSubtitle() { this.addTerm("subtitle"); return this; }
}

export class GroupFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("group", parent); }   
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addDomainName() { this.addTerm("domainName"); return this; }
    addUserCount() { this.addTerm("userCount"); return this; }
    addMinimumSiteRole() { this.addTerm("minimumSiteRole"); return this; }
}

export class FavoritesFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("favorite", parent); }   
    addLabel() { this.addTerm("label"); return this; }
    addParentProjectName   () { this.addTerm("parentProjectName   "); return this; }
    addTargetOwnerName() { this.addTerm("targetOwnerName"); return this; }
    withDatasourceResource() { return new DatasourceFieldExpressionBuilder(this); }
    withProjectResource() { return new ProjectFieldExpressionBuilder(this); }
    withUserResource() { return new UserFieldExpressionBuilder(this); }
    withWorkbookResource() { return new WorkbookFieldExpressionBuilder(this); }
    withViewResource() { return new ViewFieldExpressionBuilder(this); }
}

export class MetricsFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("favorite", parent); } 
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    withProjectResource() { return new ProjectFieldExpressionBuilder(this); }
    withOwnerResource() { return new OwnerFieldExpressionBuilder(this); }
}

export class ProjectFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("project", parent); }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addDescription() { this.addTerm("description"); return this; }
}

export class OwnerFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) { super("owner", parent); }
    addId() { this.addTerm("id"); return this; }
    addName() { this.addTerm("name"); return this; }
    addFullName() { this.addTerm("fullName"); return this; }
    addSiteRole() { this.addTerm("siteRole"); return this; }
    addLastLogin() { this.addTerm("lastLogin"); return this; }
    addEmail() { this.addTerm("email"); return this; }
}



