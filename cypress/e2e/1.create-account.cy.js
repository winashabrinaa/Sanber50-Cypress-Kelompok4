describe('Create User', () => {
  it('create user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name": "Reza",
        "email": "reza@mail.com"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).has.property("name", "Reza")
      expect(response.body).has.property("email", "reza@mail.com")

    })
  })
});
