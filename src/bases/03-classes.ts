import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Champ {

  // forma larga dejar esto aca, la forma corta es poner el public en los argumentos del constructor
  // public id: number
  // public name: string
  // public linea: string



  // metodo get
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}`
  }

  // el readonly es para que no pueda ser modificado, es de solo lectura
  constructor(
    public readonly id: number,
    public name: string,
    public linea: string,
    // public imageUrl: string
  ) {

    console.log("Constructor llamado")

    this.id = id
    this.name = name
    this.linea = linea
    // this.imageUrl = imageUrl
  }

  // public se puede usar fuera de la clase, si no ponemos nada es publica por defecto
  // private solo dentro de la clase
  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
    this.speak()
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  // metodo asincrono
  async getMove() {

    // const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/4')
    const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
    // console.log(resp.data.moves)

    return data.moves
  }
}

export const renekton = new Champ(1, "Renekton", "top")
console.log(renekton)
console.log(renekton.imageUrl)

renekton.scream()
// renekton.speak()

console.log(renekton.getMove())