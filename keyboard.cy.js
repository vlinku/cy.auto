describe('Keyboard click simulation', () => {
    it('Click Enter in search field', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('some random text I enter {enter}')    // between {} need to type keyboard button name to be used
    })
})