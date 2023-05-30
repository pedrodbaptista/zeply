describe("Currency", () => {
  before(() => {
    cy.visit("/");
    cy.get("input[type=email]").type("test@test.com");
    cy.get("input[type=password]").type("123456789");
    cy.get("button").contains("Login").click();
  });

  it("Should show different currencies when selected", () => {
    cy.get("a[href='/list']").should("be.visible").eq(0).click();

    cy.get("input[name='searchBar']")
      .should("be.visible")
      .type("4c3944aae755e5143054bf7d25a2ce70d06339ec0ea139ad84625c2249759040");

    cy.get("button[name='searchBarButton']").should("be.visible").click();

    cy.get("h2").should("include.text", "Information").should("be.visible");

    if (cy.$$("#addressInfoBox").length > 0) {
      cy.get("#addressInfoBox")
        .get("h2")
        .should("contains", "Address Information");
      cy.get("#addressInfoBox").get("p").eq(3).should("contains", "Total BTC");
    }
    if (cy.$$("#transactionInfoBox").length > 0) {
      cy.get("#transactionInfoBox")
        .get("h2")
        .should("contains", "Transaction Information");
      cy.get("#addressInfoBox").get("p").eq(5).should("contains", "Total BTC");
    }

    cy.get("#currency-select").should("be.visible").select("EUR");

    if (cy.$$("#addressInfoBox").length > 0) {
      cy.get("#addressInfoBox").get("p").eq(3).should("contains", "Total EUR");
    }
    if (cy.$$("#transactionInfoBox").length > 0) {
      cy.get("#addressInfoBox").get("p").eq(5).should("contains", "Total EUR");
    }

    cy.get("#currency-select").should("be.visible").select("USD");

    if (cy.$$("#addressInfoBox").length > 0) {
      cy.get("#addressInfoBox").get("p").eq(3).should("contains", "Total USD");
    }
    if (cy.$$("#transactionInfoBox").length > 0) {
      cy.get("#addressInfoBox").get("p").eq(5).should("contains", "Total USD");
    }
  });
});
