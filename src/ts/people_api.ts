interface Person {
  id: string;
  name: string;
  birthdate: string;
  nationality: string;
  prisonerNrs: number[];
}

async function getPeople(): Promise<Person[]> {
  const people_raw: Person[] = await fetch("people.json")
    .then((response) => response.json())
    .then((data) => data);
  return people_raw;
}

async function fetchPersonMd(id: string): Promise<string> {
  const md: string = await fetch(`people/${id}.md`)
    .then((response) => response.text())
    .then((data) => data);
  console.log(md);
  return md;
}

export { getPeople, Person, fetchPersonMd };
