export const basePath = process.env.NODE_ENV === "production" ? "/doukani" : "";

export function withBase(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
