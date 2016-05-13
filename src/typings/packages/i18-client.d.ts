declare module "i18n-client" {
  interface i18nStatic {
    add(keys: any): void;
    translate(key: string): string;
  }

  export var i18n: i18nStatic;
  export function __(key: string): string;
}
