/// <reference types="cypress" />
describe('Testes para a funcionalidade completa de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Deve adicionar múltiplos contatos - Inclusão', () => {
        cy.get('input[type="text"]').type('Douglas Souza')
        cy.get('input[type="email"]').type('douglas@gmail.com')
        cy.get('input[type="tel"]').type('(21) 975343-2222')
        cy.get('.adicionar').click()

        cy.get('input[type="text"]').type('Francisco Oliveira')
        cy.get('input[type="email"]').type('francisco@gmail.com')
        cy.get('input[type="tel"]').type('(21) 975343-4444')
        cy.get('.adicionar').click()

        cy.get('input[type="text"]').type('Bruna Santiago')
        cy.get('input[type="email"]').type('brunateste@gmail.com')
        cy.get('input[type="tel"]').type('(21) 97595-6657')
        cy.get('.adicionar').click()

        cy.contains('Douglas Souza').should('exist')
        cy.contains('Francisco Oliveira').should('exist')
        cy.contains('Bruna Santiago').should('exist')

    })
    it('Deve editar/alterar um contato existente - Alteração', () => {
        cy.get('.edit').should('be.visible').first().click()
        
        cy.get('input[type="text"]').should('be.visible').clear().type('Lucas Oliveira')
        cy.get('input[type="email"]').should('be.visible').clear().type('lucas@gmail.com')
        cy.get('input[type="tel"]').should('be.visible').clear().type('(21) 975742-2222')
        cy.get('.alterar').click()
    })
    it('Deve remover um  contato - Remoção', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').eq(0).find('.delete').click()
    })
})