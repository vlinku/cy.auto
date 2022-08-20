describe('Forgot password reset', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on the Signin button', () => {
        cy.get('#signin_button').click()
    })

    it('Should click on the Forgot password link', () => {
        cy.get('.offset3 > a').click()
    })

    it('Should type email in the field and click button', () => {
        cy.get('#user_email').type('Vilius@test.com')
        cy.contains('Send Password').click()
    })

    it('Should inspect confirmation message', () => {
        cy.get('.offset3').contains('Your password will be sent to the following email')
    })

})