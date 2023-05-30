describe("Authentication", () => {
  before(() => {
    cy.clearAllLocalStorage();
  });

  it("Allow user to login", () => {
    cy.visit("/");

    cy.get("h6").contains("Login").should("be.visible");

    cy.get("input[type=email]").type("test@test.com");
    cy.get("input[type=password]").type("123456789");
    cy.get("button").contains("Login").click();

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          zeply_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE3MTYyMzkwMjJ9.RlshN8AOznXWHCzfCeN4WmY4jSE9ghNNG8qS3o_0-xc",
        },
      });
    });
  });
});
