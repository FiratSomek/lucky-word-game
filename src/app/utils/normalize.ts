export const normalizeCategory = (str: string): string =>
  str.toLowerCase().replace(/[^a-z0-9]/gi, "");
