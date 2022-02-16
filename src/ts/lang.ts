import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { fetchPersonMd, currentPerson } from "./people_api";

export interface LanguageData {
  "sub-heading": string;
  "meta-description": string;
  request: string;
  notice: string;
  "read-research": string;
}

export type Language = "en" | "de" | "pl";

function isValidLanguage(lang: string | Language): boolean {
  return lang == "de" || lang == "en" || lang == "pl";
}

function isNotEnglish(lang: string | Language): boolean {
  return lang == "de" || lang == "pl";
}

export const language: Ref<Language> = ref("en");
export const langData: Ref<LanguageData> = ref({
  "sub-heading": "Help people find their lost ancestors",
  "meta-description":
    "This is a site developed by students for the #StolenMemory project to have all the info at one place and to make looking for the people easier.",
  request:
    "When reading the information below, we ask that if you feel like you know anything about a person, their family or any other related information that you contact us and send the information. Contact information can be found in the footer of this website.",
  notice:
    'This is NOT the official website of the project #StolenMemory; this is a website developed by a group of students participating in the project. Click <a href="https://arolsen-archives.org/en/learn-participate/initiatives-projects/stolenmemory/"> this link </a> for the official website of the project and <a href="https://arolsen-archives.org/"> this link </a> for the website of the Arolsen Archives.',
  "read-research": "Read our research on:",
});

export function langInit(): void {
  tryGetLanguageBrowser();
  getLangData();
}

export function tryGetLanguageBrowser(): void {
  const lang =
    localStorage.getItem("lang") || navigator.language.substring(0, 2);

  if (isValidLanguage(lang)) language.value = lang as Language;
}

export function setLanguage(lang: Language): void {
  language.value = lang;
  localStorage.setItem("lang", lang);
  getLangData();
  fetchPersonMd(currentPerson.value);
  (document.querySelector("html") as HTMLHtmlElement).lang = lang;
  //(document.querySelector('meta[name="description"]') as HTMLMetaElement).content
}

export async function getLangData(): Promise<void> {
  const langDatTemp = await fetch(`lang/${language.value}.json`)
    .then((res) => res.json())
    .then((dat) => dat);
  if (langDatTemp) langData.value = langDatTemp;
}
