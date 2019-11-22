describe('test case', () => {
  it('works', () => {
    cy.visit('/');
    cy.get('#parent-element')
      .as('test-alias');
    cy.get('#delete-button').click();
    cy.get('@test-alias').should('not.exist');
  });

  it('breaks', () => {
    cy.visit('/');
    cy.get('#child-element')
      .parents('#parent-element')
      .as('test-alias');
    cy.get('#delete-button').click();
    cy.get('@test-alias').should('not.exist');
  });
})
