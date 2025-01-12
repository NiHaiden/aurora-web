export type Locale = (typeof locales)[number];

export const locales = ['en', 'id'] as const;
export const defaultLocale: Locale = 'en';