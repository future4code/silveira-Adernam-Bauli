export class Cachorro {
  nome: string;
  peso: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
  }

  latir(): void {
    console.log("au au 🐶");
  }
  comer(quantidade: number): void {
    console.log("O Cachorro comeu " + quantidade + "kg de comida");
  }
}
