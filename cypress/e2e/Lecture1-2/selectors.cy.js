describe('Selector boxes, dropdown checks and other checkmarks', () => {

    it('load a page with checkbox', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('Select  an option from the dropdown', () => {

        cy.get('#preferred-interface').select('Both')                   // Select function selects value from dropdown
        cy.get('#preferred-interface').should('have.value', 'Both')     //have.value describes, that selected dropdown will have value displayed next to 'have.value'    

        cy.get('#preferred-interface').select('Command Line')
        cy.get('#preferred-interface').should('have.value', 'Command Line')

    })

})