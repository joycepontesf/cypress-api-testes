/// reference types="cypress" />

describe('Testes no módulo de People da API Star Wars', () => {

  // Construção do before() em conjunto com encapsulamento do código em commands.js. //

  let c3po

  before(() => {
    cy.buscarPersonagem('C-3PO').then((personagem) => {
      c3po = personagem
      expect(c3po).to.exist
    })

  })

  it('Deve retornar peso e altura válidos para C-3PO', () => {
    expect(c3po.height).to.be.a('string').and.not.be.empty
    cy.log(`Altura: ${c3po.height}`)

    expect(c3po.mass).to.be.a('string').and.not.be.empty
    cy.log(`Peso: ${c3po.mass}`)
  
  })

  it('Deve validar a participação de C-3PO em pelo menos um filme', () => {
    expect(c3po.films).to.be.an('array').and.not.be.empty
    cy.log(`Participação nos filmes: ${c3po.films}`)
  
  })

})