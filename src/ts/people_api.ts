import { language } from "./lang";

interface Person {
  id: string;
  name: string;
  birthdate: string;
  nationality: string;
  prisonerNrs: number[];
}

async function getPeople(): Promise<Person[]> {
  const r: Person[] = await fetch("people.json")
    .then((res) => res.json())
    .then((dat) => dat);

  return r;
}

async function fetchPersonMd(id: string): Promise<string> {
  const r: string = await fetch(`ppl/${language.value}/${id}.md`)
    .then((res) => res.text())
    .then((dat) => dat);

  return r;
}

export { getPeople, Person, fetchPersonMd };
