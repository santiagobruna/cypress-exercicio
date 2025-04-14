/// <reference types="cypress" />

describe('Testes para a inclusão de novos contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('Bruna')
        cy.get('input[type="email"]').type('brunateste@gmail.com')
        cy.get('input[type="tel"]').type('(21) 97595-6657')
        cy.get('.adicionar').click()
    })
})