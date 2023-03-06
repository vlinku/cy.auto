
describe('Find transaction Test', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const valUser = user.valUsername
            const valPass = user.valPassword
            cy.logins(valUser, valPass)
        })
    })

    it('Should filter transactions', () => {
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('button[type="submit"]').click()
    })

    it('Should display results', () => {
        cy.get('#filtered_transactions_for_account').should('exist')
        cy.get('tbody > tr')
            .its('length')
            .should('be.gt', 0)
    })

})
