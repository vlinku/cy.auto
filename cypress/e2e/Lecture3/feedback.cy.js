describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('Should load feedback form', () => {
        cy.get('form').should('be.visible')
    })
    it('Should fill feedback form', () => {
        cy.get('#name').type('Vilius')
        cy.get('#email').type('Email@test.com')
        cy.get('#subject').type('Hallo World!')
        cy.get('#comment').type('Just some random word')
    })

    it('Should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('Should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    })
})