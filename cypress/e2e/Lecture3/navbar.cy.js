describe('Navigation bar elements inspection', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should visit ONLINE BANKING tab', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

    })

    it('Should visit FEEDBACK tab', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').contains('back')

    })

    it('Should return to Home Page', () => {
        cy.get('.brand').click()
        cy.url().should('include', 'index.html')
        cy.get('h4').contains('Online Banking')
    })
})