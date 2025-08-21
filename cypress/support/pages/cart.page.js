/// <reference types="cypress" />

export const cart = {
    carrinho() {
        cy.get('[href="/Tab/Browse"]').click();
        cy.wait(1000); 
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').first().click();
        cy.wait(1000); 
        cy.get('[data-testid="addToCart"]').click();
    },

    addictionCart(){
        
        //return cy.get('[data-testid^="total"]', { timeout: 10000 }); 
    }
};