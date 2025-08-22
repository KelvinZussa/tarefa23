/// <reference types="cypress" />


const { email, senha } = require("../fixtures/data.json");
const { cart } = require("../support/pages/cart.page");


describe('Teste carrinho', () => {

    
    
    beforeEach(() => {
        cy.login(email, senha)
        cy.wait(1000);
   });

    it('Remover do carrrinho', () => {
        cart.carrinho()
        cy.intercept('GET', '**/public/getCart?userId=67fda28f36e994dfd8bab2d0', { fixture: 'emptyCart.json' }).as('emptyCart');
        cart.removeCart()
        cart.removedCart().should('be.visible')
    });
    

});