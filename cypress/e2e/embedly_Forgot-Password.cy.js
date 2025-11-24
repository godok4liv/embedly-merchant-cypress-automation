describe('merchant should be able to reset password succesfully',() => {
  it('redirect reset password page',() =>{
    cy.visit('/login')
    cy.contains('forgot password', {matchCase: false}).should('be.visible').click();
    cy.url().should('include','/forget-password')
    cy.get("input[name='email']").type('godokliv84@gmail.com');
    cy.contains('email me a reset link', {matchCase: false}).should('be.visible').click();
    cy.get('li[data-type="error"]',{timeout :8000}).contains('cannot reset password for account',{matchCase:false}).should('be.visible');

  })


    it('should confirm that user does not exist and return correct error message',() =>{
      cy.visit('/login')
      cy.contains('forgot password', {matchCase: false}).should('be.visible').click();
      cy.url().should('include','/forget-password')
      cy.get("input[name='email']").type('godokliv8@gmail.com');
      cy.contains('email me a reset link', {matchCase: false}).should('be.visible').click();
      cy.contains('return to login', {matchCase: false}).should('be.visible').click();

    
  })




})