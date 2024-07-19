/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
import {faker} from '@faker-js/faker';


describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta(faker.person.firstName(),faker.person.lastName(), 'teste.qa')
        cy.get('.woocommerce-message').should('exist')
    });
});