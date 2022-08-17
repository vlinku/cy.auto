describe('Create a New payee test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')   // include is used to test URL entries or titles in the head
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const User = user.valUsername
            const Pass = user.valPassword
            cy.logins(User, Pass)
        })
    })

    it('should add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Name')
        cy.get('#np_new_payee_address').type('Address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('Detail')
        cy.get('#add_new_payee').click()
    })

    it('should show sucess message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The new payee Name was successfully created.')
    })

})