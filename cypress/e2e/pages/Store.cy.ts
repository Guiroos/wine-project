describe("tests in first render", () => {
  it("should have navbar", () => {
    cy.visit("/store");
    cy.get("#navbar").should("exist");
  })
  it("should have filter", () => {
    cy.visit("/store");
    cy.get("#filter-list").should("exist");
  })
  it("should show all 62 products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#products").should("exist");
    cy.get("#found-products").should("exist").contains(62);
  });
  it("should render 9 cards", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-card-0").should("exist");
    cy.get("#product-card-1").should("exist");
    cy.get("#product-card-2").should("exist");
    cy.get("#product-card-3").should("exist");
    cy.get("#product-card-4").should("exist");
    cy.get("#product-card-5").should("exist");
    cy.get("#product-card-6").should("exist");
    cy.get("#product-card-7").should("exist");
    cy.get("#product-card-8").should("exist");
  });
  it("should have a empty cart", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    expect(localStorage.getItem("cart")).to.be.null;
  })
})

describe("tests after applying filter", () => {
  it("should show zero products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#filter-list").should("exist");
    cy.get("#price-filter-1").click();
    cy.get("#found-products").should("exist").contains(0);
  })
  it("should show zero products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#filter-list").should("exist");
    cy.get("#price-filter-2").click();
    cy.get("#found-products").should("exist").contains(0);
  })
  it("should show 47 products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#filter-list").should("exist");
    cy.get("#price-filter-3").click();
    cy.get("#found-products").should("exist").contains(47);
  })
  it("should show 15 products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#filter-list").should("exist");
    cy.get("#price-filter-4").click();
    cy.get("#found-products").should("exist").contains(15);
  })
  it("should show zero products", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#filter-list").should("exist");
    cy.get("#price-filter-5").click();
    cy.get("#found-products").should("exist").contains(0);
  })
})

describe("tests after adding a product to cart", () => {
  it("should add a product to localStorage", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click().should(() => {
      expect(localStorage.getItem("cart")).to.not.be.null;
    })
  })
})

export {};