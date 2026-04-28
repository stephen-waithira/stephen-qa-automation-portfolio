
describe('Input Fields', () => {
    beforeEach(() => {
        cy.visit('https://qa4.prismhcm.net/LogOn')
        cy.get('input[name="UserName"]').type('Stephen.HRO')
        cy.get('input[name="Password"]').type('@Sokomoko01')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/Dashboard')
    }) 
    it('Should allow user to input text into the search field', () => {
        cy.get('input[placeholder="Search"]').type('Leave')
        cy.get('.search-results').should('be.visible')
    })
})                         