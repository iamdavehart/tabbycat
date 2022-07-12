const { SortExpression } = require("./sort");

describe("sort expression testing", () => {
    test("User Group Arrow Function", () => {
        const expression = SortExpression.forUsers().byName().ascending().build();
        expect(expression).toBe("name:asc");
    });
})