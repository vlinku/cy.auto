/// <reference types="Cypress" />


describe('Interactions', function () {
    it('interact with button', function () {

        cy.visit('https://books.toscrape.com/index.html', { timeout: 20000 })
        cy.url().should('include', 'com/index.html')

    })
    it('should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })


    it('Display correct number of records', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })


})