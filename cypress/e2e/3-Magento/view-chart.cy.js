
  describe('View & Update Chart', () => {
    it('View Chart', () => {
      cy.visit('/');
      cy.get('.minicart-wrapper').click();
      cy.contains('My Cart').click();
      cy.wait(3000);
    });

    it('Update Qty in Chart', () => { 
      cy.get('.action.viewcart').submit();
      cy.url().should('include','/checkout/cart/') // Show link to edit item
      cy.get('input').clear().type('2'); // Change the quantity
      cy.get('.update-cart-item').submit(); // Click the "Update" button
      cy.get('.input-text.qty').should('have.value', '2'); // Verify the updated quantity
      cy.get('.minicart-wrapper').click();
    });

    it('delete item in Chart', () => { 
      cy.visit('https://magento.softwaretestingboard.com/checkout/cart/');
      cy.get('a.action.action-delete').click();
      cy.get('.cart-item').should('not.exist');
      cy.get('.minicart-wrapper').click();

    });

  });