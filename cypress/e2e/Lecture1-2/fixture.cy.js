describe('Login with data from fixture', () => {
    it('Should login using data from fixture(user.json file)', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture('user').then(user => {
            const name = user.invUser
            const pass = user.invPass

            cy.get('#user_login').type(name)
            cy.get('#user_password').type(pass)
            cy.contains('Sign in').click()
        })
    })
})