describe('Currency excange test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const User = user.valUsername
            const Pass = user.valPassword
            cy.logins(User, Pass)
        })
    })

    it('Should fill conversation form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('2000')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('Should display conversation amount', () => {
        cy.get('#pc_conversion_amount').should('contain', '1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)')
    })



})