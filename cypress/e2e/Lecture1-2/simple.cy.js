/// <reference types="Cypress" />

describe('Browser actions', () => {
    it('Should load correct url', () => {
        cy.visit('http://example.com/', { timeout: 20000 })
    })
    it('Should check correct url', () => {
        cy.url().should('include', 'ample.com')
    })

    it('Should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    // it('pause the execution', () => {
    // cy.pause()
    // })

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')

    })

})


