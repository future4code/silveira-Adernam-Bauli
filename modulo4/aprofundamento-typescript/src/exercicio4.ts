type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como ja configurei o script de start, apenas criava um "start2" apontado para o exercicio 4 rodaria ele (npm run start2);

// c) Não

// Exercicio extra

// Me interessei na propriedade: allowSyntheticDefaultImports": true
// Parece funcionar como fazíamos no React.

// Mudou que ele vem com quase todas as linhas comentadas,
// no outro arquivo eu precisei descomentar as linhas que iria usar.