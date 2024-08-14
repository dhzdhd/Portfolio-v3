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
    name: 'c',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    type: 'language'
  },
  {
    name: 'f#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg',
    type: 'language'
  },
  {
    name: 'rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    type: 'language'
  },
  {
    name: 'java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
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
  },
  {
    name: 'nextjs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    type: 'framework'
  },
  {
    name: 'spring',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    type: 'framework'
  }
];
