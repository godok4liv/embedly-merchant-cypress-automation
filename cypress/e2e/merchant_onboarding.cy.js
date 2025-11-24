import { faker, Faker } from "@faker-js/faker";
import { generateNigerianPhone } from "../support/utils";

describe('Sign In Page Navigation Embedly Merchant', () => {
  it('should navigate to the Sign Up page via the "Sign up" link', () => {

    //dynamic sign up credentials generation by faker library
    const firstName = faker.person.firstName();
                          //faker.person.firstName() // 'Antwan'
    const lastName = faker.person.lastName();
    const phoneNumber = generateNigerianPhone();      //faker.phone.number({ style: 'national' }); // '+15551234567'
    const email = `User${Date.now()}@yopmail.com`;// creating dynamic email


    cy.visit('/login');
    
    cy.wait(10000);
    cy.contains('Sign up').should('be.visible');
    
    cy.reload();
    cy.contains('Sign up').click();
    cy.url().should('include', '/registration');


    cy.get('input[name="firstName"]').type(firstName); 
    cy.get ('input[name="lastName"]').type(lastName );
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="phoneNumber"]').type(phoneNumber); 
    cy.get('input[name="password"]').type('Pass@@12345');
    cy.get('input[name="repeatPassword"]').type('Pass@@12345');
    cy.get('#terms').click().should('have.attr', 'aria-checked', 'true'); 
    
    
    cy.get("button[type='submit']") //access next button
    .should('be.enabled')   // verify is enabled and clickable
    .click(); // click it
    cy.wait(20000);
    cy.get("input[data-slot=input-otp]").type();
    cy.get('button[data-slot=button]').scrollIntoView().click().should('have.text','Continue');
    cy.get('.sooner-toast').debug().should('be.visible').should('contain','Request failed with status code 401');
    //cy.get('.confirmation-message').should('contain','Registration successful');

    
  
   
  })


})
