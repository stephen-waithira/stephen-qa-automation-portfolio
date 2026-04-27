describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.home-list > :nth-child(1) > .home-lists-name').click()
  })
})