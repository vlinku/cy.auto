describe('Working with inputs', () => {

    it('Override the current date', () => {
        const new_date = new Date(2020, 3, 10).getTime()              // This variable saves selected date timestamp
        cy.clock(new_date)                                              // clock() function call time change
        cy.log(new_date)                                                // log displays the changed date timestamp   
    })

    it('Open the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'm/login.h')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your local storage', { log: true })       // cypress clears cookies and local storage before each test, but if needed for special purpose you can use this function
        cy.title().should('include', 'Zero - Log in')                   // cy.title() function the title of the page( found in Head) use include or contain atributes
    })
    it('type UserName', () => {
        cy.get('#user_login').as('username')                            // function as() creates aliases variables, that can be reused in several places.
        cy.get('@username').clear()                                     // with @ sign you can invoke alias like cy.get('@username')
        cy.get('@username').type('Some Random Name'), { delay: 500 }
    })

    it('type password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some Random Password'), { delay: 500 }
    })

    it('click checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })
    it('Click login button', () => {
        cy.contains('Sign in').click()
    })

    it('Verify error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong') // chain cypress commands with dots (.) for better assertion
    })
})