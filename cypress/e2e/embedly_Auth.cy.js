


describe('Launching Embedly Merchant login page', () => {
  it('should render login page successfully with option to login merchant', () => {
    
    cy.visit('/login');
    
    cy.url().should('include','/login');
    cy.wait(10000);
    cy.reload(true);// helps to cleaer cashe after reload
     
    cy.get("input[name='email']").type('godokliv84@gmail.com');
    cy.get("input[name='password']").type('Eazerd@@1234');

    cy.get('button[data-slot=button]').should('be.enabled').click();
    
    cy.location('hash').should("equal","")

    
   
  })
})