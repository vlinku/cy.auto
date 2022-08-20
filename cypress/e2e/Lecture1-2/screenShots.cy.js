describe('ScreenShots tutorial', () => {

    it('Should display full page screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: 'fullPage' })
    })

    it('Should display part page screenshot', () => {
        cy.get('header').screenshot()
    })

    it('Should display single element screenshot', () => {

        cy.get('#developer-name').screenshot()
    })
})