/// <reference types="Cypress" />

describe('Check price validation of the book', function () {
    it('inspect existing page', () => {
        cy.visit('https://books.toscrape.com/catalogue/category/books/travel_2/index.html', { timeout: 20000 })
        cy.url().should('include', 'travel_2/inde')
    })

    it('go to poetry section', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })
    it('select book olio', () => {
        cy.get('a').contains('Olio').click()
        cy.get('h1').contains('Olio')
    })
    it('check the price value', () => {
        cy.get('.price_color').contains('23.88')
    })

})