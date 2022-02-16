import { Ref, ref } from "vue";
import { language } from "./lang";

const currentPerson: Ref<string> = ref("");
const currentPersonMd: Ref<string> = ref("");

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

async function fetchPersonMd(id: string): Promise<void> {
  currentPerson.value = id;
  currentPersonMd.value = await fetch(`ppl/${language.value}/${id}.md`)
    .then((res) => res.text())
    .then((dat) => dat);
}

export { getPeople, Person, fetchPersonMd, currentPersonMd, currentPerson };
