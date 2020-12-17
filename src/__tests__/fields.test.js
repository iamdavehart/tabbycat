import { ViewFieldExpressionBuilder, WorkbookFieldExpressionBuilder } from "tabbycat/fields";
import { DatasourceFieldExpressionBuilder, UserFieldExpressionBuilder } from "../fields";

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
    test("View", ()=> {
        const v = new ViewFieldExpressionBuilder();
        const f = v.addName().withProjectResource().addName().build();
        expect(f).toBe("name,project.name");
    })
    test("Workbook", ()=> {
        const w = new WorkbookFieldExpressionBuilder();
        const f = w.withDefaultFields().addShowTabs().withOwnerResource().addId().build();
        expect(f).toBe("_default_,showTabs,owner.id");
    })
    
});
