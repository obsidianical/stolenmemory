import { ref, Ref } from "vue";

export interface LanguageData {
  "sub-heading": string;
  request: string;
  notice: string;
  "read-research": string;
}

export type Language = "en" | "de" | "pl";
export const language: Ref<Language> = ref("en");
export const langData: Ref<LanguageData> = ref({
  "sub-heading": "Help people find their lost ancestors",
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
  const lang = navigator.language.substring(0, 2);

  if (lang) {
    if (lang == "de") language.value = "de";
    else if (lang == "pl") language.value = "pl";
  } else {
    const langLocalstorage = localStorage.getItem("lang") as Language;
    if (langLocalstorage) language.value = langLocalstorage;
  }
}

export function setLanguage(lang: Language): void {
  localStorage.setItem("lang", lang);
}

export async function getLangData(): Promise<void> {
  const langDatTemp = await fetch(`lang/${language.value}.json`)
    .then((res) => res.json())
    .then((dat) => dat);
  if (langDatTemp) langData.value = langDatTemp;
}
