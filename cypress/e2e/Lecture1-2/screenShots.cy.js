describe('ScreenShots tutorial', () => {

    it('Full page screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: 'fullPage' })
    })

    it('Part page screenshot', () => {
        cy.get('header').screenshot()
    })

    it('Single element screenshot', () => {

        cy.get('#developer-name').screenshot()
    })
})