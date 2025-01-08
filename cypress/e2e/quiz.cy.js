describe('cypress demo', () => {
  it('renders the Start Quiz button on the screen', () => {
    cy.visit('http://127.0.0.1:3001/');

    cy.get('button').should('exist').should('have.text', "Start Quiz");
    cy.get('button').should('have.text', "Start Quiz").click();
    cy.get('h2').should('not.be.empty');
    

  })
  it('should answers questions and complete the quize',() => {

      cy.visit('http://127.0.0.1:3001/');
      cy.get('button').should('have.text', "Start Quiz").click();

      for(let i = 0; i<10; i++ ) {
          cy.get('button').contains('1').click();
      }

      cy.get('.alert-success').should('be.visible').contains('Your score');

  })

  it('should answers questions and render new quize',() => {

      cy.visit('http://127.0.0.1:3001/');
      cy.get('button').should('have.text', "Start Quiz").click();

      for(let i = 0; i<10; i++ ) {
          cy.get('button').contains('1').click();
      }

      cy.get('.alert-success').should('be.visible').contains('Your score');
      cy.get('button').contains('Take New Quiz').click();
      cy.get('.card').should('be.visible');
      cy.get('h2').should('not.be.empty');
      
  })
})