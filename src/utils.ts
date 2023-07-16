import { writable } from 'svelte/store';

export const slugFromPath = (path: string) =>
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export const enabled = writable(false);
