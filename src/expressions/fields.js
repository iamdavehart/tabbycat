export class FieldExpression {
    static forDatasources = () => new DatasourceFieldExpressionBuilder();
    static forUsers = () => new UserFieldExpressionBuilder();
    static forViews = () => new ViewFieldExpressionBuilder();
    static forWorkbooks = () => new WorkbookFieldExpressionBuilder();
    static forFavorites = () => new FavoritesFieldExpressionBuilder();
    static forMetrics = () => new MetricsFieldExpressionBuilder();
    static forJobs = () => new JobFieldExpressionBuilder();
    static forGroups = () => new GroupFieldExpressionBuilder();
    static forProjects = () => new ProjectFieldExpressionBuilder();
}

export class FieldExpressionBuilder {
    constructor(prefix, parent) {
        this.prefix = prefix;
        this.parent = parent;
        this.keyword = "";
        this.terms = [];
    }
    addKeyword(keyword) {
        this.keyword = keyword;
        return this;
    }
    addTerm(term) {
        this.terms.push(term);
        return this;
    }
    withAllFields() {
        return this.addKeyword("_all_");
    }
    withDefaultFields() {
        return this.addKeyword("_default_");
    }
    and() {
        if (!this.parent) {
            throw "no parent set";
        }
        return this.parent;
    }
    build() {
        if (this.parent) {
            this.terms.forEach((t) => this.parent.addTerm(`${this.prefix}.${t}`));
        }
        return this.parent
            ? this.parent.build()
            : this.keyword + (this.keyword && this.terms.length ? "," : "") + this.terms.join(",");
    }
}

export class DatasourceFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("datasource", parent);
        this.addContentUrl = () => this.addTerm("contentUrl");
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addType = () => this.addTerm("type");
        this.addDescription = () => this.addTerm("description");
        this.addCreatedAt = () => this.addTerm("createdAt");
        this.addUpdatedAt = () => this.addTerm("updatedAt");
        this.addEncryptExtracts = () => this.addTerm("encryptExtracts");
        this.addIsCertified = () => this.addTerm("isCertified");
        this.addUseRemoteQueryAgent = () => this.addTerm("useRemoteQueryAgent");
        this.addWebPageUrl = () => this.addTerm("webPageUrl");
        this.addSize = () => this.addTerm("size");
        this.addTag = () => this.addTerm("tag");
        this.addFavoritesTotal = () => this.addTerm("favoritesTotal");
        this.addDatabaseName = () => this.addTerm("databaseName");
        this.addConnectedWorkbooksCount = () => this.addTerm("connectedWorkbooksCount");
        this.addHasAlert = () => this.addTerm("hasAlert");
        this.addHasExtracts = () => this.addTerm("hasExtracts");
        this.addIsPublished = () => this.addTerm("isPublished");
        this.addServerName = () => this.addTerm("serverName");
        this.withProjectResource = () => new ProjectFieldExpressionBuilder(this);
        this.withOwnerResource = () => new OwnerFieldExpressionBuilder(this);
    }
}

export class UserFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("user", parent);
        this.addExternalAuthUserId = () => this.addTerm("externalAuthUserId");
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addSiteRole = () => this.addTerm("siteRole");
        this.addLastLogin = () => this.addTerm("lastLogin");
        this.addFullName = () => this.addTerm("fullName");
        this.addEmail = () => this.addTerm("email");
        this.addAuthSetting = () => this.addTerm("authSetting");
    }
}

export class ViewFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("view", parent);
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addContentUrl = () => this.addTerm("contentUrl");
        this.addCreatedAt = () => this.addTerm("createdAt");
        this.addUpdatedAt = () => this.addTerm("updatedAt");
        this.addTags = () => this.addTerm("tags");
        this.addSheetType = () => this.addTerm("sheetType");
        this.addUsage = () => this.addTerm("usage");
        this.withWorkbookResource = () => new WorkbookFieldExpressionBuilder(this);
        this.withProjectResource = () => new ProjectFieldExpressionBuilder(this);
        this.withOwnerResource = () => new OwnerFieldExpressionBuilder(this);
    }
}

export class WorkbookFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("workbook", parent);
        this.addDescription = () => this.addTerm("description");
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addContentUrl = () => this.addTerm("contentUrl");
        this.addShowTabs = () => this.addTerm("showTabs");
        this.addWebpageUrl = () => this.addTerm("webpageUrl");
        this.addSize = () => this.addTerm("size");
        this.addCreatedAt = () => this.addTerm("createdAt");
        this.addUpdatedAt = () => this.addTerm("updatedAt");
        this.addEncryptExtracts = () => this.addTerm("encryptExtracts");
        this.addDefaultViewId = () => this.addTerm("defaultViewId");
        this.addTag = () => this.addTerm("tag");
        this.addSheetCount = () => this.addTerm("sheetCount");
        this.addHasExtracts = () => this.addTerm("hasExtracts");
        this.withProjectResource = () => new ProjectFieldExpressionBuilder(this);
        this.withOwnerResource = () => new OwnerFieldExpressionBuilder(this);
    }
}

export class JobFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("job", parent);
        this.addId = () => this.addTerm("id");
        this.addStatus = () => this.addTerm("status");
        this.addCreatedAt = () => this.addTerm("createdAt");
        this.addStartedAt = () => this.addTerm("startedAt");
        this.addEndedAt = () => this.addTerm("endedAt");
        this.addPriority = () => this.addTerm("priority");
        this.addJobType = () => this.addTerm("jobType");
        this.addTitle = () => this.addTerm("title");
        this.addSubtitle = () => this.addTerm("subtitle");
    }
}

export class GroupFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("group", parent);
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addDomainName = () => this.addTerm("domainName");
        this.addUserCount = () => this.addTerm("userCount");
        this.addMinimumSiteRole = () => this.addTerm("minimumSiteRole");
    }
}

export class FavoritesFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("favorite", parent);
        this.addLabel = () => this.addTerm("label");
        this.addParentProjectName = () => this.addTerm("parentProjectName");
        this.addTargetOwnerName = () => this.addTerm("targetOwnerName");
        this.withDatasourceResource = () => new DatasourceFieldExpressionBuilder(this);
        this.withProjectResource = () => new ProjectFieldExpressionBuilder(this);
        this.withUserResource = () => new UserFieldExpressionBuilder(this);
        this.withWorkbookResource = () => new WorkbookFieldExpressionBuilder(this);
        this.withViewResource = () => new ViewFieldExpressionBuilder(this);
    }
}

export class MetricsFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("favorite", parent);
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.withProjectResource = () => new ProjectFieldExpressionBuilder(this);
        this.withOwnerResource = () => new OwnerFieldExpressionBuilder(this);
    }
}

export class ProjectFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("project", parent);
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addDescription = () => this.addTerm("description");
    }
}

export class OwnerFieldExpressionBuilder extends FieldExpressionBuilder {
    constructor(parent) {
        super("owner", parent);
        this.addId = () => this.addTerm("id");
        this.addName = () => this.addTerm("name");
        this.addFullName = () => this.addTerm("fullName");
        this.addSiteRole = () => this.addTerm("siteRole");
        this.addLastLogin = () => this.addTerm("lastLogin");
        this.addEmail = () => this.addTerm("email");
    }
}
