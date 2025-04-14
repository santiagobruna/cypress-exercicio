/// <reference types="cypress" />

describe('Testes para alteração de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve editar/alterar um contato existente', () => {
        cy.get('.edit').should('be.visible').first().click()
        
        cy.get('input[type="text"]').should('be.visible').clear().type('Douglas Souza')
        cy.get('input[type="email"]').should('be.visible').clear().type('douglas@email.com')
        cy.get('input[type="tel"]').should('be.visible').clear().type('(21) 91234-5678')
        cy.get('.alterar').click()
    })
    
})