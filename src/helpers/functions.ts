import i18next from "i18next";
import i18n from "../i18n";

export function getBrowserPreferredLng(): string {
  const browserLng = navigator.language.split("-")[0].toLowerCase();
  const userLng = localStorage.getItem("userLng");

  if (!userLng) {
    return browserLng !== "en" && browserLng !== "ka" && browserLng !== "ru"
      ? "en"
      : browserLng;
  } else {
    return userLng;
  }
}

export function text(namespace: string) {
  return i18next.t(namespace);
}

export function languageChanger(lang: string) {
  i18n.changeLanguage(lang);
  localStorage.setItem("userLng", lang);
}
