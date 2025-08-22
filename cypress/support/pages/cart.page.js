/// <reference types="cypress" />

export const cart = {
    carrinho() {
        cy.get('[href="/Tab/Browse"]').click();
        cy.wait(1000); 
        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click();
        cy.wait(1000); 
        cy.get('[data-testid="addToCart"]').click();

    },

    addictionCart(){
        return cy.get('[data-testid^="productName"]')
    
    },
    
    removeCart(){
        cy.get('[data-testid="remove"]').click();
        cy.wait(1000); 
   },

   removedCart(){
    return cy.get('[data-testid^="emptyCart"]')
   },

updateQuantity() {
  cy.get('[data-testid="addItem"]').first().click(); 
  cy.wait(1000);
},

updatedCart() {
  return cy.get('[data-testid^="itemsQty"]').first(); 
}



};