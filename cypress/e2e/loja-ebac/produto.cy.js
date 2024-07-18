/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Produto', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block >').first().click()
        cy.get('#tab-title-description > a').should('exist')
    });
});