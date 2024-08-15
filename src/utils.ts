import { elasticOut, linear } from 'svelte/easing';
import { writable } from 'svelte/store';

export const slugFromPath = (path: string) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const enabled = writable(false);

export function spin(
  node: any,
  { duration, amount, type }: { duration: number; amount: number; type: 'elasticOut' | 'linear' }
) {
  return {
    duration,
    css: (t: any) => {
      const eased = type == 'elasticOut' ? elasticOut(t) : linear(t);

      return `transform: rotate(${eased * amount}deg)`;
    }
  };
}

export const capitalize = <T extends string>(s: T) =>
  (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;
