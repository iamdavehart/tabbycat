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
    }
    byLastLogin() {
        return this.addField("lastLogin");
    }
    byName() {
        return this.addField("name");
    }
    bySiteRole() {
        return this.addField("siteRole");
    }
}

export class DatasourceSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byFavoritesTotal() {
        return this.addField("favoritesTotal");
    }
    byType() {
        return this.addField("type");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
    byTags() {
        return this.addField("tags");
    }
}

export class GroupsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byDomainName() {
        return this.addField("domainName");
    }
    byDomainNickname() {
        return this.addField("domainNickname");
    }
    byIsLocal() {
        return this.addField("isLocal");
    }
    byUserCount() {
        return this.addField("userCount");
    }
    byMinimumSiteRole() {
        return this.addField("minimumSiteRole");
    }
}

export class JobsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byCompletedAt() {
        return this.addField("completedAt");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byJobType() {
        return this.addField("jobType");
    }
    byNotes() {
        return this.addField("notes");
    }
    byStartedAt() {
        return this.addField("startedAt");
    }
    byStatus() {
        return this.addField("status");
    }
    bySubtitle() {
        return this.addField("subtitle");
    }
    byTitle() {
        return this.addField("title");
    }
}

export class ProjectsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
    byOwnerDomain() {
        return this.addField("ownerDomain");
    }
    byOwnerEmail() {
        return this.addField("ownerEmail");
    }
    byParentProjectId() {
        return this.addField("parentProjectId");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
}

export class ViewsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byFavoritesTotal() {
        return this.addField("favoritesTotal");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
    byHitsTotal() {
        return this.addField("hitsTotal");
    }
    byTags() {
        return this.addField("tags");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
}

export class WorkbooksSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byFavoritesTotal() {
        return this.addField("favoritesTotal");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
    byTags() {
        return this.addField("tags");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
}

export class FlowsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byProjectName() {
        return this.addField("projectName");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
}

export class MetricsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {
        super();
    }
    byName() {
        return this.addField("name");
    }
    byProjectName() {
        return this.addField("projectName");
    }
    byCreatedAt() {
        return this.addField("createdAt");
    }
    byFavoritesTotal() {
        return this.addField("favoritesTotal");
    }
    byUpdatedAt() {
        return this.addField("updatedAt");
    }
    byHitsTotal() {
        return this.addField("hitsTotal");
    }
    byOwnerName() {
        return this.addField("ownerName");
    }
    byOwnerDomain() {
        return this.addField("ownerDomain");
    }
    byOwnerEmail() {
        return this.addField("ownerEmail");
    }
    byTags() {
        return this.addField("tags");
    }
}

export class SortExpression {
    static forDatasources() {
        return new DatasourceSortExpressionBuilder();
    }
    static forUsers() {
        return new UserSortExpressionBuilder();
    }
    static forViews() {
        return new ViewsSortExpressionBuilder();
    }
    static forWorkbooks() {
        return new WorkbooksSortExpressionBuilder();
    }
    static forMetrics() {
        return new MetricsSortExpressionBuilder();
    }
    static forJobs() {
        return new JobsSortExpressionBuilder();
    }
    static forGroups() {
        return new GroupsSortExpressionBuilder();
    }
    static forProjects() {
        return new ProjectsSortExpressionBuilder();
    }
    static forFlows() {
        return new FlowsSortExpressionBuilder();
    }
}
