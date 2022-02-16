interface Person {
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

export { getPeople, Person };
