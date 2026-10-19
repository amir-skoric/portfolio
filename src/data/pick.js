// If a value is plain text, return it. If it has da/en versions, return the chosen language.
export const pick = (value, lang) =>
  value && typeof value === 'object' ? value[lang] : value
