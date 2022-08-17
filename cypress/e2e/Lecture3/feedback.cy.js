describe('Feedback Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () => {
        cy.get('form').should('be.visible')
    })
    it('should fill feedback form', () => {
        cy.get('#name').type('Vilius')
        cy.get('#email').type('Email@test.com')
        cy.get('#subject').type('Hallo World!')
        cy.get('#comment').type('Just some random word')
    })

    it('Should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    })
})