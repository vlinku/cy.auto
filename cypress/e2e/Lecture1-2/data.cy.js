describe('Write / Read data to JSON / text file', () => {

    // writeFile() function writes data to specific json or text files
    it('write data into JSON file', () => {
        cy.writeFile('log.json', { name: 'Vilius', age: 36 })
    })

    it('write date in to the text file', () => {
        cy.writeFile('log.txt', 'Labas Viliau')
    })
    // readFile() reads parameters from selected file. Either string or value
    it('read and verify data from JSON file', () => {
        cy.readFile('log.json').its('age').should('eq', 36)
    })

    it('read and verify data from the text file', () => {
        cy.readFile('log.txt').should('eq', 'Labas Viliau')
    })

    //text/html document is in the head section, meta tag
    it('read and verify browser document content', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)    // should wait for a time for cypress to load all documents
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.a.property', 'charset')
            .and('eq', 'UTF-8')
    })
})  