describe('Login', () => {
  beforeEach(() => {
    cy.fixture('existed-account').as('existedUser');
    cy.fixture('unexisted-account').as('unexisted_user');
    cy.fixture('wrong-email-account').as('wrongEmailUser');
    cy.fixture('wrong-password-account').as('wrong_password_user');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C');
  });

  //Test case 1
  it('Existed Account', () => {
    cy.fixture('existed-account').then((existedAccount) => {
      const user = existedAccount;

      cy.get('input[name="login[username]"]').type(user.email);
      cy.get('input[name="login[password]"]').type(user.password);
      cy.get("#login-form").submit();

      cy.url().should('include', 'https://magento.softwaretestingboard.com');
    })
  });

  // Test case 2
  it('Unexisted Account', () => {
    cy.fixture('unexisted-account').then((unexistedAccount) => {
      const user = unexistedAccount;

      cy.get('input[name="login[username]"]').type(user.email);
      cy.get('input[name="login[password]"]').type(user.password);
      cy.get("#login-form").submit();

      cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    })
  });

  // Test case 3
  it('Wrong Password', () => {
    cy.fixture('wrong-password-account').then((wrongPasswordAccount) => {
      const user = wrongPasswordAccount;

      cy.get('input[name="login[username]"]').type(user.email);
      cy.get('input[name="login[password]"]').type(user.password);
      cy.get("#login-form").submit();

      cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
    })
  });

  // Test case 4
  it('Wrong Email', () => {
    cy.fixture('wrong-email-account').then((wrongEmailUser) => {
      const user = wrongEmailUser;

      cy.get('input[name="login[username]"]').type(user.email);
      cy.get('input[name="login[password]"]').type(user.password);
      cy.get("#login-form").submit();

      cy.wait(1000)
      cy.contains("Please enter a valid email address (Ex: johndoe@domain.com).");
      cy.get('input[name="login[username]"]').should('have.class', 'mage-error');
    })
  });

});
