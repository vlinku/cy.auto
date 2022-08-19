describe('Different website resolution tests', () => {
    it('Should display 720px resolution', () => {
        cy.viewport(1280, 720)                  // in viewport possible to enter desired resolution or describe device name like iPhone X
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('Should display 1080px resolution', () => {
        cy.viewport(1980, 1080)
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('Should display iPhone X resoliution', () => {
        cy.viewport('iphone-x')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('Should display iPad Mini resolution', () => {
        cy.viewport('ipad-mini')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('Should Macbook 15 resoliution', () => {
        cy.viewport('macbook-15')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

})