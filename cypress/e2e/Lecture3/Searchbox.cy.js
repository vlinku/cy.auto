describe('Searchbox test', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type text in the search box and press enter', () => {
        cy.get('#searchTerm').type('money{enter}')
    })

    it('Should show search results in the page', () => {
        cy.get('h2').contains('Search Results:')
    })

})