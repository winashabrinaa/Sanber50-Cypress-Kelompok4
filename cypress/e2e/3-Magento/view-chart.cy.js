describe('View & Update Chart', () => {
  it('View Chart', () => {
    cy.visit('/')
    cy.contains('My Cart').click();
  })

  it('View&chart Chart', () => {
    cy.visit('/')
    cy.get('[data-bind="i18n:"').contains('View and Edit Cart').click();
    
  })
})