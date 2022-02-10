import { Negociacao } from './negociacao.js'
/*  Array<Negociacao> == Negociacao[] */
export class Negociacoes {
  private negociacoes: Array<Negociacao> = []
  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao)
  }
  /* ReadonlyArray<Negociacao> == readonly Negociacao[] */
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes
  }
}

const negociacoes = new Negociacoes()
