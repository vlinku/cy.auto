describe('Different website resolution tests', () => {
    it('720px resolution', () => {
        cy.viewport(1280, 720)                  // in viewport possible to enter desired resolution or describe device name like iPhone X
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('1080px resolution', () => {
        cy.viewport(1980, 1080)
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('iPhone X', () => {
        cy.viewport('iphone-x')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

    it('Macbook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('https://www.example.com/')
        cy.wait(3000)
    })

})