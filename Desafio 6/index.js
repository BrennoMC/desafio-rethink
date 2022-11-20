const pessoas = [
  { name: 'Fabiana Araújo', age: 33 },
  { name: 'Gabriel Gomes', age: 25 },
  { name: 'Fernando Henrique', age: 17 },
  { name: 'Ana Luiza', age: 2 },
  { name: 'Geralda do Nascimento', age: 93 },
  { name: 'Miguel Souza', age: 70 },
  { name: 'Antonio Miguel', age: 69 }
]

function retornaMediaIdade() {
  let soma = 0
  let mediaIdades = 0
  pessoas.forEach(p => {
    soma += p.age
  })

  mediaIdades = soma / pessoas.length
  console.log(mediaIdades.toFixed(2))
}
retornaMediaIdade()
