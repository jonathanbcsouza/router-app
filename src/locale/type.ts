export enum ELocaleCountries {
  EN = "en",
  PT = "pt",
  ES = "es",
}

export type TLocaleKeys = typeof import("./en.json"); // Getting 'en' as default for type
