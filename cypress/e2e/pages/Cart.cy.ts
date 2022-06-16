describe("tests before adding a product in store page", () => {
  it("should show a empty cart with a message", () => {
    cy.visit("/cart");
    cy.get("#cart-page").should("exist");
    cy.get("#no-cart-message").should("exist");
  })
})

describe("tests after adding a product in store page", () => {
  it("should render a cart item in cart page with quantity equal to one ", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(1);
  });
  it("should render a cart item in cart page with quantity equal to two ", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#product-button-0").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(2);
  })
  it("should render two cart items in cart page", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#product-button-1").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-1").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(1);
    cy.get("#cart-card-item-quantity-1").contains(1);
  })
  it("should update the quantity of the item in cart after quantity input change", () => {
    cy.visit("/");
    cy.get("#navbar-store").click();
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(1);
    cy.get("#navbar-store").click();
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(2);    
  })
  it("should remove the item from cart after remove button press", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(1);
    cy.get("#cart-card-item-rmvButton-0").click();
    cy.get("#cart-card-item-0").should("not.exist");
  })
  it("should clear the cart after button pressed", () => {
    cy.visit("/store");
    cy.get("#store-page").should("exist");
    cy.get("#product-button-0").click();
    cy.get("#product-button-1").click();
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should("exist");
    cy.get("#cart-card-item-0").should("exist");
    cy.get("#cart-card-item-1").should("exist");
    cy.get("#cart-card-item-quantity-0").contains(1);
    cy.get("#cart-card-item-quantity-1").contains(1);
    cy.get("#clear-cart-button").should("exist").click();
    cy.get("#no-cart-message").should("exist");  
  })
})

export {}