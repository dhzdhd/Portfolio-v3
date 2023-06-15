export interface IconMetadata {
	x?: number;
	y?: number;
	z?: number;
	name: string;
	segment: 'plain' | 'original';
}

export const techArr: Array<IconMetadata> = [
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
