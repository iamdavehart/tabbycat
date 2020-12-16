
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