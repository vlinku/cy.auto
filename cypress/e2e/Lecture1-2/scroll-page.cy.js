describe('Scroll the page', () => {
    it('Should scroll down and up the page', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(3000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(3000)
        cy.get('header').scrollIntoView()
    })
})