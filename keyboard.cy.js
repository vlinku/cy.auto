describe('Keyboard key press simulation', () => {
    it('Press Enter key in the search field', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('some random text I enter {enter}')    // the string between curly braces ({ and } characters) represents keyboard key to be pressed
    })
})