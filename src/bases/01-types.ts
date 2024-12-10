export const name = "Lautaro";
export const age: number = 27;
export let isValid: boolean = true;

// Evitar ejecutar código directamente al exportar
// El siguiente 'console.log' se ejecutará cuando el archivo sea importado en otro archivo
// Sin embargo, no es recomendable poner código que se ejecute directamente, a menos que se quiera
console.log(name, age, isValid);

export const templateString = `
  Esto es un string
  multilinea
  que puede tener
  "comillas dobles"
  'comillas simples'
  inyectar valores ${name}
`;

console.log(templateString);