describe('View Product', () => {
  it('Menu Women', () => {
    cy.visit('/')
    cy.get('#ui-id-4').click()
    cy.get('span.base').should('contain', 'Women')
  })
 
})
