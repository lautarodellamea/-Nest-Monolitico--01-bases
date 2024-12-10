

class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) { }

  scream() {
    console.log(`NO QUIERO!!!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR!!!`);
  }
}


const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target)

    return NewPokemon
  }
}



// a la hora de usar esta clase indirectamente estaremos usando los metodos o la clase NewPokemon ya que se sobreescribieron
@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) { }

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}


export const charmander = new Pokemon(4, 'Charmander');
charmander.scream();
charmander.speak();