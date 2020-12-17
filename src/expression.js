
export class ExpressionBuilder {
    constructor(){ this.terms = []; }
    setValue(field,operator,value) { this.terms.push([ field, operator, value]); return this; };
    build() { return this.terms.map(t=>t.join(":")).join(","); }
}

export class UserFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.lastLogin = new DateBuilder(this, "lastLogin");
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.siteRole = new ExactOrOneOfStringBuilder(this, "siteRole");
    }
}

export class DatasourceFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.favoritesTotal = new NumberBuilder(this, "favoritesTotal");
        this.type = new ExactStringBuilder(this, "type");
        this.ownerName = new ExactStringBuilder(this, "ownerName");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.updatedAt = new DateBuilder(this, "updatedAt");
        this.tags = new ExactOrOneOfStringBuilder(this, "tags");
    }
}

export class GroupsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.domainName = new ExactOrOneOfStringBuilder(this, "domainName");
        this.domainNickname = new ExactOrOneOfStringBuilder(this, "domainNickname");
        this.isLocal = new BooleanBuilder(this, "isLocal");
        this.userCount = new NumberBuilder(this, "userCount");
        this.minimumSiteRole = new ExactOrOneOfStringBuilder(this, "minimumSiteRole");
    }
}

export class JobsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.completedAt = new DateBuilder(this, "completedAt");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.jobType = new ExactOrOneOfStringBuilder(this, "jobType");
        this.notes = new LikeStringBuilder(this, "notes");
        this.startedAt = new DateBuilder(this, "startedAt");
        this.status = new ExactStringBuilder(this, "status");
        this.subtitle = new ExactOrLikeStringBuilder(this, "subtitle");
        this.title = new ExactOrLikeStringBuilder(this, "title");
    }
}

export class ProjectsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.ownerName = new ExactOrOneOfStringBuilder(this, "ownerName");
        this.ownerDomain = new ExactOrOneOfStringBuilder(this, "ownerDomain");
        this.ownerEmail = new ExactOrOneOfStringBuilder(this, "ownerEmail");
        this.parentProjectId = new ExactStringBuilder(this, "parentProjectId");
        this.updatedAt = new DateBuilder(this, "updatedAt");        
    }
}

export class ViewsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.favoritesTotal = new NumberBuilder(this, "favoritesTotal");
        this.updatedAt = new DateBuilder(this, "updatedAt");
        this.hitsTotal = new NumberBuilder(this, "hitsTotal");
        this.tags = new ExactOrOneOfStringBuilder(this, "tags");
        this.ownerName = new ExactStringBuilder(this, "ownerName");
    }
}

export class WorkbooksFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.favoritesTotal = new NumberBuilder(this, "favoritesTotal");
        this.updatedAt = new DateBuilder(this, "updatedAt");
        this.tags = new ExactOrOneOfStringBuilder(this, "tags");
        this.ownerName = new ExactStringBuilder(this, "ownerName");
    }
}

export class FlowsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.projectName = new ExactStringBuilder(this, "projectName");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.updatedAt = new DateBuilder(this, "updatedAt");
        this.ownerName = new ExactStringBuilder(this, "ownerName");
    }
}

export class MetricsFilterExpressionBuilder extends ExpressionBuilder {
    constructor() {
        super();
        this.name = new ExactOrOneOfStringBuilder(this, "name");
        this.projectName = new ExactStringBuilder(this, "projectName");
        this.createdAt = new DateBuilder(this, "createdAt");
        this.favoritesTotal = new NumberBuilder(this, "favoritesTotal");
        this.updatedAt = new DateBuilder(this, "updatedAt");
        this.hitsTotal = new NumberBuilder(this, "hitsTotal");
        this.ownerName = new ExactOrOneOfStringBuilder(this, "ownerName");
        this.ownerDomain = new ExactOrOneOfStringBuilder(this, "ownerDomain");
        this.ownerEmail = new ExactOrOneOfStringBuilder(this, "ownerEmail");
        this.tags = new ExactOrOneOfStringBuilder(this, "tags");
    }
}

export class OperatorValueBuilder {
    constructor(expressionBuilder, fieldName) { 
        this._expression = expressionBuilder;
        this._fieldName = fieldName;
    }
    setValue(operator, value) {
        return this._expression.setValue(this._fieldName, operator, value);
    }
}

export class LikeStringBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    has(value) { return this.setValue("has",value); }
}

export class ExactStringBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
}

export class ExactOrLikeStringBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
    has(value) { return this.setValue("has",value); }
}

export class ExactOrOneOfStringBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
    in(values) { const valuesAsString = values.join(","); return this.setValue("in",`[${valuesAsString}]`); }
}

export class BooleanBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
}

export class NumberBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
    gt(value) { return this.setValue("gt",value); }
    gte(value) { return this.setValue("gte",value); }
    lt(value) { return this.setValue("lt",value); }
    lte(value) { return this.setValue("lte",value); }
}

export class DateBuilder extends OperatorValueBuilder {
    constructor(expr,field) { super(expr,field); }
    eq(value) { return this.setValue("eq",value); }
    gt(value) { return this.setValue("gt",value); }
    gte(value) { return this.setValue("gte",value); }
    lt(value) { return this.setValue("lt",value); }
    lte(value) { return this.setValue("lte",value); }
}

export class FilterExpression {
    static forDatasources() { return new DatasourceFilterExpressionBuilder(); }
    static forUsers() { return new UserFilterExpressionBuilder(); }
    static forViews() { return new ViewsFilterExpressionBuilder(); }
    static forWorkbooks() { return new WorkbooksFilterExpressionBuilder(); }
    static forMetrics() { return new MetricsFilterExpressionBuilder(); }
    static forJobs() { return new JobsFilterExpressionBuilder(); }
    static forGroups() { return new GroupsFilterExpressionBuilder(); }
    static forProjects() { return new ProjectsFilterExpressionBuilder(); }
    static forFlows() { return new FlowsFilterExpressionBuilder(); }
  }
  
  


export class SortExpressionBuilder {
    constructor(){ this.terms = []; }
    addField(field) { this.terms.push([ field, "asc" ]); return this; };
    ascending() { const t = this.terms.pop(); t[1] = "asc"; this.terms.push(t); return this; }
    descending() { const t = this.terms.pop(); t[1] = "desc"; this.terms.push(t); return this; }
    build() { return this.terms.map(t=>t.join(":")).join(","); }
    toString() { return this.build(); }
}

export class UserSortExpressionBuilder extends SortExpressionBuilder {
    constructor() { super(); }
    byLastLogin() {  return this.addField("lastLogin"); }
    byName() { return this.addField("name"); }
    bySiteRole() { return this.addField("siteRole"); }
}

export class DatasourceSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super(); }
    byName() { return this.addField("name"); }
    byFavoritesTotal() { return this.addField("favoritesTotal"); }
    byType() { return this.addField("type"); }
    byOwnerName() { return this.addField("ownerName"); }
    byCreatedAt() { return this.addField("createdAt"); }
    byUpdatedAt() { return this.addField("updatedAt"); }
    byTags() { return this.addField("tags"); }
    
}

export class GroupsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super(); }
        byName() { return this.addField("name"); }
        byDomainName() { return this.addField("domainName"); }
        byDomainNickname() { return this.addField("domainNickname"); }
        byIsLocal() { return this.addField("isLocal"); }
        byUserCount() { return this.addField("userCount"); }
        byMinimumSiteRole() { return this.addField("minimumSiteRole"); }
    
}

export class JobsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byCompletedAt() { return this.addField("completedAt"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byJobType() { return this.addField("jobType"); }
        byNotes() { return this.addField("notes"); }
        byStartedAt() { return this.addField("startedAt"); }
        byStatus() { return this.addField("status"); }
        bySubtitle() { return this.addField("subtitle"); }
        byTitle() { return this.addField("title"); }
    
}

export class ProjectsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byName() { return this.addField("name"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byOwnerName() { return this.addField("ownerName"); }
        byOwnerDomain() { return this.addField("ownerDomain"); }
        byOwnerEmail() { return this.addField("ownerEmail"); }
        byParentProjectId() { return this.addField("parentProjectId"); }
        byUpdatedAt() { return this.addField("updatedAt"); }        
    
}

export class ViewsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byName() { return this.addField("name"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byFavoritesTotal() { return this.addField("favoritesTotal"); }
        byUpdatedAt() { return this.addField("updatedAt"); }
        byHitsTotal() { return this.addField("hitsTotal"); }
        byTags() { return this.addField("tags"); }
        byOwnerName() { return this.addField("ownerName"); }
    
}

export class WorkbooksSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byName() { return this.addField("name"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byFavoritesTotal() { return this.addField("favoritesTotal"); }
        byUpdatedAt() { return this.addField("updatedAt"); }
        byTags() { return this.addField("tags"); }
        byOwnerName() { return this.addField("ownerName"); }
    
}

export class FlowsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byName() { return this.addField("name"); }
        byProjectName() { return this.addField("projectName"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byUpdatedAt() { return this.addField("updatedAt"); }
        byOwnerName() { return this.addField("ownerName"); }
    
}

export class MetricsSortExpressionBuilder extends SortExpressionBuilder {
    constructor() {super();}
        byName() { return this.addField("name"); }
        byProjectName() { return this.addField("projectName"); }
        byCreatedAt() { return this.addField("createdAt"); }
        byFavoritesTotal() { return this.addField("favoritesTotal"); }
        byUpdatedAt() { return this.addField("updatedAt"); }
        byHitsTotal() { return this.addField("hitsTotal"); }
        byOwnerName() { return this.addField("ownerName"); }
        byOwnerDomain() { return this.addField("ownerDomain"); }
        byOwnerEmail() { return this.addField("ownerEmail"); }
        byTags() { return this.addField("tags"); }
    
}

export class SortExpression {
    static forDatasources() { return new DatasourceSortExpressionBuilder(); }
    static forUsers() { return new UserSortExpressionBuilder(); }
    static forViews() { return new ViewsSortExpressionBuilder(); }
    static forWorkbooks() { return new WorkbooksSortExpressionBuilder(); }
    static forMetrics() { return new MetricsSortExpressionBuilder(); }
    static forJobs() { return new JobsSortExpressionBuilder(); }
    static forGroups() { return new GroupsSortExpressionBuilder(); }
    static forProjects() { return new ProjectsSortExpressionBuilder(); }
    static forFlows() { return new FlowsSortExpressionBuilder(); }
}