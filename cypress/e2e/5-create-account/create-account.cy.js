describe('Create User', () => {
  beforeEach(() => {
    // cy.fixture('existed-account').as('existedUser');
    // cy.fixture('unexisted-account').as('unexisted_user');
    // cy.fixture('wrong-email-account').as('wrongEmailUser');
    cy.fixture('fill-account-wrong-email-format').as('wrongEmailFormat');
    cy.fixture('fill-account').as('fill-account');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  });

  //Test Case 1
  it('Fill Account', () => {
    cy.fixture('fill-account').then((existedAccount) => {
      const user = existedAccount;

      cy.get('#firstname').type(user.firstname);
      cy.get('#lastname').type(user.lastname);
      cy.get('#email_address').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('#password-confirmation').type(user.password);

      cy.get("#form-validate").submit();
      // cy.url().should('include', 'https://magento.softwaretestingboard.com');
    })
  });

  //Test Case 2
  it('wrongEmailFormat', () => {
    cy.fixture('fill-account-wrong-email-format').then((existedAccount) => {
      const user = existedAccount;

      cy.get('#firstname').type(user.firstname);
      cy.get('#lastname').type(user.lastname);
      cy.get('#email_address').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('#password-confirmation').type(user.password);

      cy.get("#form-validate").submit();
      cy.contains("Please enter a valid email address (Ex: johndoe@domain.com).");
      // cy.url().should('include', 'https://magento.softwaretestingboard.com');
    })
  });

  //Test Case 3
  it('weak-password', () => {
    cy.fixture('weak-pass').then((existedAccount) => {
      const user = existedAccount;

      cy.get('#firstname').type(user.firstname);
      cy.get('#lastname').type(user.lastname);
      cy.get('#email_address').type(user.email);
      cy.get('#password').type(user.password);
      cy.get('#password-confirmation').type(user.password);

      cy.get("#form-validate").submit();
      // cy.contains("Please enter a valid email address (Ex: johndoe@domain.com).");
      // cy.url().should('include', 'https://magento.softwaretestingboard.com');
    })
  });

  // it('create user', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: 'https://reqres.in/api/users',
  //     body: {
  //       "name": "Reza",
  //       "email": "reza@mail.com"
  //     }
  //   }).then((response) => {
  //     expect(response.status).to.equal(201)
  //     expect(response.body).has.property("name", "Reza")
  //     expect(response.body).has.property("email", "reza@mail.com")

  //   })
  // })
});


