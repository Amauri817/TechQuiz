import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component', () => {

  it('should display the Start Quiz button', () => {

    cy.intercept('GET', '/api/questions/random', { statusCode: 200 }).as('getQuestion');
    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz');
    
  });

  it('should start the Quiz and display question', () => {
    cy.mount(<Quiz />)
    cy.get('button').should('have.text', 'Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });


  it('should able to choose answer', () => {

    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty'); 
  });

  it('should answers questions and complete the quize', () => {

    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz').click();
    
    for(let i = 0; i<10; i++ ) {
      cy.get('button').contains('1').click();
    }

    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    
  });

  it('should answers questions and render new quize', () => {

    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz').click();
    
    for(let i = 0; i<10; i++ ) {
      cy.get('button').contains('1').click();
    }
    cy.get('button').contains('Take New Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
    
  });

})