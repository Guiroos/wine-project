describe('test routing to home page', () => {
  it('should go to home page', () => {
    cy.visit('/');
    cy.get("#home-page").should('exist');
    cy.get("#navbar").should('exist');
  })
})

describe('test routing and rendering in navbar elements', () => { 
  it('should go to home page when click Wine image', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-img").should('exist');
    cy.get("#navbar-img").click();
    cy.get("#home-page").should('exist').contains("Favor direcionar a aba Loja");
  })
  it('should go to club page when click club link', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-club").should('exist');
    cy.get("#navbar-club").click();
    cy.get("#navbar-club").should('exist');
    cy.get("#club-page").should('exist').contains("Clube (a desenvolver)");
  })  
  it('should go to store page when click store link', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-store").should('exist');
    cy.get("#navbar-store").click();
    cy.get("#store-page").should('exist');
  })
  it('should go to producers page when click producers link', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-producers").should('exist');
    cy.get("#navbar-producers").click();
    cy.get("#producers-page").should('exist');
    cy.get("#producers-page").should('exist').contains('Produtores (a desenvolver)');    
  })
  it('should go to promos page when click promos link', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-promos").should('exist');
    cy.get("#navbar-promos").click();
    cy.get("#promos-page").should('exist');
    cy.get("#promos-page").should('exist').contains("Ofertas (a desenvolver)");  
  })
  it('should go to events page when click events link', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-events").should('exist');
    cy.get("#navbar-events").click();
    cy.get("#events-page").should('exist');
    cy.get("#events-page").should('exist').contains("Eventos (a desenvolver)");  
  })
  it('should go to shopping cart page when click cart image', () => {
    cy.visit('/');
    cy.get("#navbar").should('exist');
    cy.get("#navbar-cart").should('exist');
    cy.get("#navbar-cart").click();
    cy.get("#cart-page").should('exist'); 
  })
})

export {};