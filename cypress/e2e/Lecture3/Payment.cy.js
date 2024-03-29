describe('Payment Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const User = user.valUsername
            const Pass = user.valPassword
            cy.logins(User, Pass)
        })
    })

    it('Should send new payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2022-08-16 {enter}')
        cy.get('#sp_description').type('Just a Google Map')
        cy.get('#pay_saved_payees').click()
    })

    it('Should show success message', () => {
        cy.get('#alert_content').should('be.visible').and('contain', 'The payment was successfully submitted')
    })

})