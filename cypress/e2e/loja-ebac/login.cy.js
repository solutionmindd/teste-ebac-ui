/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('andressateste@mailinator.com')
        cy.get('#password').type('Senha123456@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andressateste (não é andressateste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('andressateste@mailinator.c')
        cy.get('#password').type('Senha123456@')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('andressateste@mailinator.com')
        cy.get('#password').type('Senha')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andressateste (não é andressateste? Sair)')
    });

    it('Deve fazer login com sucesso - Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andressateste (não é andressateste? Sair)')
        })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login(perfil.usuario, perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, andressateste (não é andressateste? Sair)')
    });

} )