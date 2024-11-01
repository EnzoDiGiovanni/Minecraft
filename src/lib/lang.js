import { writable } from "svelte/store";

export const currentLanguage = writable("fr");

// Fonction pour changer la langue
export function setLanguage(lang) {
  currentLanguage.set(lang);
}
