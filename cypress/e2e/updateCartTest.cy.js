/// <reference types="cypress" />

const { email, senha } = require("../fixtures/data.json");
const { cart } = require("../support/pages/cart.page");

describe('Teste carrinho - Update', () => {

  beforeEach(() => {
    cy.login(email, senha);
    cy.wait(1000);
  });

  it('Atualizar quantidade de item no carrinho', () => {
    cart.carrinho();
    cy.intercept('PUT', '**/public/updateCart?userId=*', { fixture: 'updateCart.json' }).as('updateCart');
    cart.updateQuantity();
    //cy.wait('@updateCart');
    cart.updatedCart().should('contain', '2');
  });

});
