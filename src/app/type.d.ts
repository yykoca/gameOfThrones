interface House {
  slug: string,
  name: string
}

interface HouseDetail extends House{
  members: Person[],
}

interface Person {
  slug: string,
  name: string,
  house: House,
  quotes: string[]
}

interface Quote {
  sentence: string,
  character: Person
}
