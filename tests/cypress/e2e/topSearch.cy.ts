describe("Top Search", () => {
  before(() => {
    cy.visit("/");

    cy.get("h6").contains("Login").should("be.visible");

    cy.get("input[type=email]").type("test@test.com");
    cy.get("input[type=password]").type("123456789");
    cy.get("button").contains("Login").click();
  });

  it("Should appear top search box", () => {
    cy.visit("/");

    cy.get("h2").contains("Top 5 Search").should("be.visible");
    cy.get("p").contains("No searches to display").should("be.visible");

    cy.get("a[href='/list']").eq(0).click();
    cy.get("input[name='searchBar']").type(
      "4c3944aae755e5143054bf7d25a2ce70d06339ec0ea139ad84625c2249759040"
    );
    cy.get("button[name='searchBarButton']").click();
    cy.get("a[href='/']").eq(0).click();

    cy.get("h2").contains("Top 5 Search").should("be.visible");
    cy.get("h2").next().children().its("length").should("be.gt", 0);
  });
});
