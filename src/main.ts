import './style.css'

// import { name, age } from './bases/01-types'
// import { renekton, champsIds } from './bases/02-objects'
// import { renekton } from './bases/03-classes'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${charmander.name} - ${charmander.id}</h1>
  </div>
`

