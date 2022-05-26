/// <reference types="Cypress" /> 

//hooks
//trechos de codigo que serao executados antes e depois de cada teste
//before → executa antes de cada teste
//after → executa depois de cada teste
//beforeEach → executa antes de cada teste
//afterEach → executa depois de cada teste

beforeEach(() => {
    cy.visit('https://devfinances.devmatheus.com/#')

        //verifica se nao existe valor
    cy.get('#data-table tbody tr').should('have.length', 0)
});

context('Dev Finance Agilizei', () => {
    it('Cadastrar entradas', () => {                    //it = cenário


        cy.visit('https://devfinances.devmatheus.com/#')

        //verifica se nao existe elemento
        cy.get('#data-table tbody tr').should('have.length', 0)

        //clica no botao de nova transação
        cy.get('#transactions .button').click(); 
        //escreve o nome da transação --id
        cy.get('#description').type('Salario');        
        //escreve o valor da transação --atributo
        cy.get('[name=amount]').type(1200);            
        //escreve a data da transação
        cy.get('[name=date]').type('2021-05-25'); 
        //clica no botao de salvar --tipo e valor
        cy.get('button').contains('Salvar').click();       
        //verifica se o elemento existe
        cy.get('#data-table tbody tr').should('have.length', 1);
 

    });
});
    it('Cadastrar saídas', () => { 
        cy.visit('https://devfinances.devmatheus.com/#')

        cy.get('#data-table tbody tr').should('have.length', 0)

        cy.get('#transactions .button').click();      
        cy.get('#description').type('Salario');        
        cy.get('[name=amount]').type(-500);           
        cy.get('[name=date]').type('2021-05-25');   
        cy.get('button').contains('Salvar').click();       
        cy.get('#data-table tbody tr').should('have.length', 1);
 





    it('Remover entradas e saidas', () => {
    });
});