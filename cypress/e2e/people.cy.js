describe('People module of The Star Wars API', () => {

  let c3po

  before(() => {
    cy.characterSearch('C-3PO').then((character) => {
      c3po = character
      expect(c3po).to.exist
    })
  })

  it('Should validate that C-3PO has both weight and height in the Films module', () => {
    expect(c3po.height).to.be.a('string').and.not.be.empty
    expect(c3po.mass).to.be.a('string').and.not.be.empty  
  })

  it('Should validate C-3POs participation in at least one movie in the Films module', () => {
    expect(c3po.films).to.be.an('array').and.not.be.empty
    cy.log(`Participação nos filmes: ${c3po.films}`)
  })
})