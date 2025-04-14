/// <reference types="cypress" />

describe('Testes para a remoção de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve remover um  contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').eq(0).find('.delete').click()
        
    })
})