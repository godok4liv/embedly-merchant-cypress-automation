// This describes a suite of tests for the "Basic Navigation" functionality
describe('Basic Navigation Test', () => {

  // This is a single test case
  it('should successfully visit the Cypress website', () => {
    // 1. Visit a URL: This is a Cypress command (cy.visit)
    cy.visit('https://example.cypress.io/commands/actions');

    it('should successfully locate the "Email" input field', () => {
      // Goal: Find the email input field and assert that it exists.
      // Hint: The element has the CSS class: .action-email
      cy.get('.action-email').type('fake@email.com')
      // Your Code Goes Here: 
      // cy.get('YOUR SELECTOR HERE').should('exist'); 
    })
    
    // 2. Assertion: This checks if the URL in the browser matches the expected URL
   // cy.url().should('include', 'cypress.io');

    // 3. Command: Find an element and check its text
    //cy.get('header').should('be.visible');
  })
})