const { beforeEach, afterEach } = require("mocha")

class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }

}

describe('Primitive testing using Classes, which are in the same file', () => {
    before(function () {
        //runs before all tests inside describe
        //setup test data or test context
        // seed or reset the database
        HomePage.loadHomePage()
    })

    after(function () {
        // runs after all tests inside describe block are done
        //test clean up
        //clean cookies or localStorage. These are cleaned after test, but if needed, they can be cleaned this way.
    })

    beforeEach(function () {
        // runs before each it block in the describe
    })

    afterEach(function () {
        // runs after each it block in the describe
    })
    //.skip hook tells cypress to skip this it step
    it.skip('First it', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })

    // .only tells cypress to run only this particular it step
    it.only('Second it', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)
    })
})