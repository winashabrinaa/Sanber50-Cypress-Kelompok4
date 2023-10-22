describe('View Product', () => {
  it('Menu Women', () => {
    cy.visit('/')
    cy.get('#ui-id-4').click()
    cy.get('span.base').should('contain', 'Women')
  })

  /*it('dropdown Tops', () => {
    cy.visit('/')
    // Mengklik dropdown
    cy.get('#ui-id-11').click();
  
    // Memilih opsi "Pilihan 2"
    cy.get('#ui-id-11').select('Hoodies & Sweatshirts');
  
    // Memeriksa apakah opsi yang dipilih adalah "Pilihan 2"
    cy.get('#ui-id-11').should('have.value', 'Hoodies & Sweatshirts');
  }); */
  
})
