describe('Test incorret login message', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })

    it('Should display login error message', () => {
        cy.get('#user_login').type('Inccorect User Name')
        cy.get('#user_password').type('Incorrect User Password')
        cy.contains('Sign in').click()
    })

    it('Should confirm that the error message is correct', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

})

describe('Test correct login to the system', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.get('#login_form').should('be.visible')
    })


    it('Should login to the application', () => {
        cy.fixture('user').then(user => {
            const valUser = user.valUsername
            const valPass = user.valPassword
            cy.logins(valUser, valPass)
        })
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })

})