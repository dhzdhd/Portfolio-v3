export interface IconMetadata {
  x?: number;
  y?: number;
  z?: number;
  name: string;
  segment: 'plain' | 'original';
}

export type ExperienceType = 'language' | 'framework';

export interface ExperienceInfo {
  name: string;
  icon: string;
  type: ExperienceType;
}

export const projArr = ['ExCode', 'SyncVault', 'Obsidian', 'database', 'blog', 'Portfolio-v3'];

export const expArr: ExperienceInfo[] = [
  {
    name: 'python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    type: 'language'
  },
  {
    name: 'javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    type: 'language'
  },
  {
    name: 'typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    type: 'language'
  },
  {
    name: 'dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    type: 'language'
  },
  {
    name: 'julia',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg',
    type: 'language'
  },
  {
    name: 'c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    type: 'language'
  },
  {
    name: 'fsharp',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg',
    type: 'language'
  },
  {
    name: 'rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    type: 'language'
  },
  {
    name: 'flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    type: 'framework'
  },
  {
    name: 'react',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    type: 'framework'
  },
  {
    name: 'svelte',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    type: 'framework'
  },
  {
    name: 'qt',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg',
    type: 'framework'
  }
];

export const techArr: IconMetadata[] = [
  { name: 'c', segment: 'original' },
  { name: 'clojure', segment: 'original' },
  { name: 'cplusplus', segment: 'original' },
  { name: 'css3', segment: 'original' },
  { name: 'dart', segment: 'original' },
  { name: 'docker', segment: 'original' },
  { name: 'dotnetcore', segment: 'original' },
  { name: 'express', segment: 'original' },
  { name: 'firebase', segment: 'plain' },
  { name: 'flutter', segment: 'original' },
  { name: 'elm', segment: 'original' },
  { name: 'fsharp', segment: 'original' },
  { name: 'git', segment: 'original' },
  { name: 'haskell', segment: 'original' },
  { name: 'html5', segment: 'original' },
  { name: 'java', segment: 'original' },
  { name: 'javascript', segment: 'original' },
  { name: 'jetbrains', segment: 'original' },
  { name: 'julia', segment: 'original' },
  { name: 'jupyter', segment: 'original' },
  { name: 'mongodb', segment: 'original' },
  { name: 'mysql', segment: 'original' },
  { name: 'nextjs', segment: 'original' },
  { name: 'nodejs', segment: 'original' },
  { name: 'numpy', segment: 'original' },
  { name: 'ocaml', segment: 'original' },
  { name: 'oracle', segment: 'original' },
  { name: 'pandas', segment: 'original' },
  { name: 'postgresql', segment: 'original' },
  { name: 'python', segment: 'original' },
  { name: 'qt', segment: 'original' },
  { name: 'r', segment: 'original' },
  { name: 'react', segment: 'original' },
  { name: 'rust', segment: 'plain' },
  { name: 'sass', segment: 'original' },
  { name: 'svelte', segment: 'original' },
  { name: 'tailwindcss', segment: 'plain' },
  { name: 'typescript', segment: 'original' },
  { name: 'vscode', segment: 'original' },
  { name: 'yarn', segment: 'original' }
];
