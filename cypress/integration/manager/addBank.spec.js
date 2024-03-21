/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })


  it('go to login ', () => {
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type('Ayoub')
    cy.get(':nth-child(2) > .form-control').type('Ellaouzi')
    cy.get(':nth-child(3) > .form-control').type('Full stack dev')
    cy.get('form.ng-dirty > .btn').click()
//open acount

cy.get('[ng-class="btnClass2"]').click()

cy.get('#userSelect').select('Ayoub Ellaouzi');
cy.get('#currency').select('Dollar');
cy.get('form.ng-dirty > button').click()
//check if added
 cy.get('[ng-class="btnClass3"]').click()
 cy.get('table tbody tr:last-child td:nth-child(1)').should('contain', 'Ayoub');
//delete
cy.get('table tbody tr:last-child td:nth-child(5)> button').click()
//check if added
cy.get('table tbody tr:last-child td:nth-child(1)').should('not.contain', 'Ayoub');


  })
})