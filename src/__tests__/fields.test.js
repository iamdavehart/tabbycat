import {
    FieldExpression,
    GroupFieldExpressionBuilder,
    JobFieldExpressionBuilder,
    ViewFieldExpressionBuilder,
    WorkbookFieldExpressionBuilder,
    DatasourceFieldExpressionBuilder,
    UserFieldExpressionBuilder,
    ProjectFieldExpressionBuilder,
    MetricsFieldExpressionBuilder,
} from "../fields";

describe("Field Expression Tests", () => {
    test("Datasource", () => {
        const d = new DatasourceFieldExpressionBuilder();
        const f = d.withDefaultFields().addServerName().withProjectResource().addName().build();
        expect(f).toBe("_default_,serverName,project.name");
    });
    test("User", () => {
        const d = new UserFieldExpressionBuilder();
        const f = d.withDefaultFields().addLastLogin().build();
        expect(f).toBe("_default_,lastLogin");
    });
    test("View", () => {
        const v = new ViewFieldExpressionBuilder();
        const f = v.addName().withProjectResource().addName().build();
        expect(f).toBe("name,project.name");
    });
    test("Workbook", () => {
        const w = new WorkbookFieldExpressionBuilder();
        const f = w.withDefaultFields().addShowTabs().withOwnerResource().addId().build();
        expect(f).toBe("_default_,showTabs,owner.id");
    });
    test("Project", () => {
        const p = new ProjectFieldExpressionBuilder();
        const f = p.withDefaultFields().addDescription().build();
        expect(f).toBe("_default_,description");
    });
    test("Static Builder Methods", () => {
        const d = FieldExpression.forDatasources();
        expect(d).toBeInstanceOf(DatasourceFieldExpressionBuilder);
        const v = FieldExpression.forViews();
        expect(v).toBeInstanceOf(ViewFieldExpressionBuilder);
        const w = FieldExpression.forWorkbooks();
        expect(w).toBeInstanceOf(WorkbookFieldExpressionBuilder);
        const p = FieldExpression.forProjects();
        expect(p).toBeInstanceOf(ProjectFieldExpressionBuilder);
        const g = FieldExpression.forGroups();
        expect(g).toBeInstanceOf(GroupFieldExpressionBuilder);
        const u = FieldExpression.forUsers();
        expect(u).toBeInstanceOf(UserFieldExpressionBuilder);
        const j = FieldExpression.forJobs();
        expect(j).toBeInstanceOf(JobFieldExpressionBuilder);
        const m = FieldExpression.forMetrics();
        expect(m).toBeInstanceOf(MetricsFieldExpressionBuilder);
    });
});
