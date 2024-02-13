import { ELocaleCountries, TLocaleKeys } from "./type";

const locale: ELocaleCountries = window.navigator?.language?.slice(
  0,
  2
) as ELocaleCountries;

export const translations: TLocaleKeys = await (async () => {
  try {
    const importLocale = JSON.stringify(
      await import(/* @vite-ignore */ `./${locale}.json`)
    );

    if (importLocale) {
      return JSON.parse(importLocale);
    }
  } catch (error) {
    console.log(`Locale not found: ${locale}. Using default locale.`);
  }

  const defaultLocale = JSON.stringify(
    await import(/* @vite-ignore */ `./${ELocaleCountries.PT}.json`)
  );

  if (defaultLocale) return JSON.parse(defaultLocale);
})();
