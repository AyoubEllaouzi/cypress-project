/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })


  it('should login, deposit, withdraw, and verify', () => {
    // Login
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.get('#userSelect').select('Harry Potter');
    cy.get('form.ng-valid > .btn').click();
    
    // deposit button
    cy.get('[ng-class="btnClass2"]').should('be.visible').click();

    // Deposit
    cy.get('.form-control').type('500');
    cy.get('form.ng-dirty > .btn').click();

    // Verify Deposit
    cy.get('[ng-class="btnClass1"]').should('be.visible').click();

    // Withdraw
    cy.get('[ng-class="btnClass3"]').should('be.visible').click();
    cy.get('.form-control').type('200');
    cy.get('form.ng-pristine > .btn').click();

    // Additional Withdrawal
    cy.get('.form-control').type('200');
    cy.get('button[type ="submit"]').click();

    cy.get('.form-control').type('200');
    cy.get('button[type ="submit"]').click();

});




})