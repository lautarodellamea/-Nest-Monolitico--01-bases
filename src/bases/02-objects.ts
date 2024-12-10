export const champsIds = [1, 20, 30, 34, 58]
champsIds.push(90)


// Interfaces
interface Champ {
  id: number,
  name: string,
  line: string,
  isMelee: boolean | undefined
  useMana?: boolean
}

export const renekton: Champ = {
  id: 1,
  name: "Renekton",
  isMelee: true,
  line: "top",
}
export const lux: Champ = {
  id: 2,
  name: "Lux",
  isMelee: false,
  line: "mid",
}

export const champs: Champ[] = []
champs.push(renekton, lux)
console.log(champs)