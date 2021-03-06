/// <reference types="Cypress" />


describe('Interactions', function () {
    it('interact with button', function () {

        cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'com/index.html')

    })
    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
})