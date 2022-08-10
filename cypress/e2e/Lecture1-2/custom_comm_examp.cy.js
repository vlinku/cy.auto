describe('Example how custom commands works', () => {
    it('should login to the application using custom commands', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.logins('username', 'password')   //logins is a created command in commands.js file. username and password are actual values that needs to pased in the fields
    })
})