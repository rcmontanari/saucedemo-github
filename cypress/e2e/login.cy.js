describe('Testes de login do site', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept({ resourceType: /xhr|fetch/ }, {log: false})
  })

  it('Validar o login do usuário padrão com sucesso', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type(Cypress.env('senha'), {log: false})
    cy.get('#login-button').click()

    cy.get('.shopping_cart_link').should('be.visible')
  })

  it('Validar a mensagem de erro ao informar a senha incorreta', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha_incorreta')
    cy.get('#login-button').click()

    cy.contains('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('Validar mensagem de erro ao informar usuário incorreto', () => {
    cy.get('#user-name').type('usuario_incorreto')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.contains('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
      .should('be.visible')
  })

  it('Validar que o campo de usuário é obrigatório', () => {
    cy.get('#password').type('senha_qualquer')
    cy.get('#login-button').click()
    
    cy.contains('[data-test="error"]', 'Epic sadface: Username is required')
      .should('be.visible')
  })

  it('Validar que o campo de senha é obrigatório', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    
    cy.contains('[data-test="error"]', 'Epic sadface: Password is required')
      .should('be.visible')
  })

})