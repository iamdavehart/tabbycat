import { UserFilterExpressionBuilder, DatasourceFilterExpressionBuilder } from "../expression-filter";

describe("Expression Builder Tests", () => {
    test("User Filter Expressions", () => {
        const u = new UserFilterExpressionBuilder();
        const f = u.name.eq("123").lastLogin.eq(123).siteRole.eq("Administrator").build();
        expect(f).toBe("name:eq:123,lastLogin:eq:123,siteRole:eq:Administrator");
    });
    test("Array value is expressed as csv in square brackets", () => {
        const u = new UserFilterExpressionBuilder();
        const f = u.siteRole.in(["Administrator", "Site Administrator"]).build();
        expect(f).toBe("siteRole:in:[Administrator,Site Administrator]");
    });
    test("Datasource Filter Expressions", () => {
        const d = new DatasourceFilterExpressionBuilder();
        const f = d.name.eq("dave").ownerName.eq("john").tags.in(["dave","john","hugh"]).build();
        expect(f).toBe("name:eq:dave,ownerName:eq:john,tags:in:[dave,john,hugh]");
    });
});
