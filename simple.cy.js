/// <reference types="Cypress" />

describe('Browser actions', () => {
    it('should load correct url', () => {
        cy.visit('http://example.com/', { timeout: 20000 })
    })
    it('should check correct url', () => {
        cy.url().should('include', 'ample.com')
    })

<<<<<<< HEAD
    it('should wiats for 3 seconds', () => {
=======
    it('should wait for 3 seconds', () => {
>>>>>>> 9ca2f161f97e769b7397af8095d3f75d8eaad72e
        cy.wait(3000)
    })

    // it('pause the execution', () => {
    // cy.pause()
    // })

    it('should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')

    })

})


