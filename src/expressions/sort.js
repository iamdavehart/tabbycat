

export class SortExpressionBuilder {
    constructor() {
        this.terms = [];
    }
    addField(field) {
        this.terms.push([field, "asc"]);
        return this;
    }
    ascending() {
        const t = this.terms.pop();
        t[1] = "asc";
        this.terms.push(t);
        return this;
    }
    descending() {
        const t = this.terms.pop();
        t[1] = "desc";
        this.terms.push(t);
        return this;
    }
    build() {
        return this.terms.map((t) => t.join(":")).join(",");
    }
    toString() {
        return this.build();
    }
}

export class UserSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byLastLogin = () => this.addField("lastLogin");
        this.byName = () => this.addField("name");
        this.bySiteRole = () => this.addField("siteRole");
    }
}

export class DatasourceSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byFavoritesTotal = () => this.addField("favoritesTotal");
        this.byType = () => this.addField("type");
        this.byOwnerName = () => this.addField("ownerName");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byUpdatedAt = () => this.addField("updatedAt");
        this.byTags = () => this.addField("tags");
    }
}

export class GroupsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byDomainName = () => this.addField("domainName");
        this.byDomainNickname = () => this.addField("domainNickname");
        this.byIsLocal = () => this.addField("isLocal");
        this.byUserCount = () => this.addField("userCount");
        this.byMinimumSiteRole = () => this.addField("minimumSiteRole");
    }
}

export class JobsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byCompletedAt = () => this.addField("completedAt");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byJobType = () => this.addField("jobType");
        this.byNotes = () => this.addField("notes");
        this.byStartedAt = () => this.addField("startedAt");
        this.byStatus = () => this.addField("status");
        this.bySubtitle = () => this.addField("subtitle");
        this.byTitle = () => this.addField("title");
    }
}

export class ProjectsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byOwnerName = () => this.addField("ownerName");
        this.byOwnerDomain = () => this.addField("ownerDomain");
        this.byOwnerEmail = () => this.addField("ownerEmail");
        this.byParentProjectId = () => this.addField("parentProjectId");
        this.byUpdatedAt = () => this.addField("updatedAt");
    }
}

export class ViewsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byFavoritesTotal = () => this.addField("favoritesTotal");
        this.byUpdatedAt = () => this.addField("updatedAt");
        this.byHitsTotal = () => this.addField("hitsTotal");
        this.byTags = () => this.addField("tags");
        this.byOwnerName = () => this.addField("ownerName");
    }
}

export class WorkbooksSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byFavoritesTotal = () => this.addField("favoritesTotal");
        this.byUpdatedAt = () => this.addField("updatedAt");
        this.byTags = () => this.addField("tags");
        this.byOwnerName = () => this.addField("ownerName");
    }
}

export class FlowsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byProjectName = () => this.addField("projectName");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byUpdatedAt = () => this.addField("updatedAt");
        this.byOwnerName = () => this.addField("ownerName");
    }
}

export class MetricsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
        this.byName = () => this.addField("name");
        this.byProjectName = () => this.addField("projectName");
        this.byCreatedAt = () => this.addField("createdAt");
        this.byFavoritesTotal = () => this.addField("favoritesTotal");
        this.byUpdatedAt = () => this.addField("updatedAt");
        this.byHitsTotal = () => this.addField("hitsTotal");
        this.byOwnerName = () => this.addField("ownerName");
        this.byOwnerDomain = () => this.addField("ownerDomain");
        this.byOwnerEmail = () => this.addField("ownerEmail");
        this.byTags = () => this.addField("tags");
    }
}

export class SortExpression {
    static forDatasources = () => new DatasourceSortExpressionBuilder();
    static forUsers = () => new UserSortExpressionBuilder();
    static forViews = () => new ViewsSortExpressionBuilder();
    static forWorkbooks = () => new WorkbooksSortExpressionBuilder();
    static forMetrics = () => new MetricsSortExpressionBuilder();
    static forJobs = () => new JobsSortExpressionBuilder();
    static forGroups = () => new GroupsSortExpressionBuilder();
    static forProjects = () => new ProjectsSortExpressionBuilder();
    static forFlows = () => new FlowsSortExpressionBuilder();
}
