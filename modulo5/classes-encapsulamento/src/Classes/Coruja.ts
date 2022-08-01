export class Coruja {
  nome: string;
  peso: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
  }

  pio(): void {
    console.log("Hu Hu 🦉");
  }
  comer(quantidade: number): void {
    console.log("a coruja comeu " + quantidade);
  }
  voar(quantidade: number): void {
    console.log("A coruja voou por " + quantidade + " minutos");
  }
}
