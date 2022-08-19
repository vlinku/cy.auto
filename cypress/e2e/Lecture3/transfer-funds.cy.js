describe('Transfer fund verification test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const User = user.valUsername
            const Pass = user.valPassword
            cy.logins(User, Pass)
        })
    })

    it('Should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('3')
        cy.get('#tf_toAccountId').select('5')
        cy.get('#tf_amount').type('2000')
        cy.get('#tf_description').type('Simple funds transfer')
        cy.get('#btn_submit').click()

    })

    it('Should verify correct data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Savings')
        cy.get('#tf_toAccountId').should('have.value', 'Credit Card')
        cy.get('#tf_amount').should('have.value', '2000')
    })
})