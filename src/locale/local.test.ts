import { describe, expect, test } from "vitest";

// all json files must have the same structure
import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

import { ELocaleCountries } from "./type";

const locales: Record<ELocaleCountries, typeof pt> = {
  [ELocaleCountries.EN]: en,
  [ELocaleCountries.PT]: pt,
  [ELocaleCountries.ES]: es,
};

// Helper function to collect all keys in a nested object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function collectKeys(obj: any, prefix = ""): string[] {
  return Object.keys(obj).flatMap((key) => {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      return collectKeys(obj[key], fullPath);
    }
    return fullPath;
  });
}

describe("Locale files structure", () => {
  test("should have the same keys across all locales", () => {
    // Collect keys for each locale
    const localeKeys = Object.entries(locales).map(([name, content]) => ({
      name,
      keys: collectKeys(content),
    }));

    // Get the keys of the first locale to use as a base for comparison
    const baseLocaleKeys = localeKeys[0].keys;
    localeKeys.forEach((locale) => {
      expect(locale.keys).toEqual(expect.arrayContaining(baseLocaleKeys));
      expect(baseLocaleKeys).toEqual(expect.arrayContaining(locale.keys));
    });
  });
});
