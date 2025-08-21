/// <reference types="cypress" />

const { categories } = require("../fixtures/categories.json");
const { email, senha } = require("../fixtures/data.json");
const { cart } = require("../support/pages/cart.page");
const { homePage } = require("../support/pages/home.page");

describe('Teste carrinho', () => {

    
    
    beforeEach(() => {
        cy.login(email, senha)
   });

    it('Aicionar ao cartinho', () => {
        cart.carrinho()
    });

});