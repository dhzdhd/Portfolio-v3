import { BYPASS_TOKEN } from '$env/static/private';
import { projArr } from '$lib/data';
import type { PageServerLoad } from './$types';

export interface RepoModel {
  name: string;
  owner: string;
  url: string;
  isFork: boolean;
  description: string | null;
  language: string | null;
  forks: number;
  stars: number;
  topics: string[];
}

export interface Response {
  highlighted: RepoModel[];
  repos: RepoModel[];
}

export const config = {
  isr: {
    expiration: 60,
    bypassToken: BYPASS_TOKEN
  }
};

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch('https://api.github.com/users/dhzdhd/repos?per_page=100', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      Accept: 'application/vnd.github+json'
    }
  });

  const data: [] = await res.json();

  const repos: RepoModel[] = data.map((e: any) => {
    return {
      name: e.name,
      owner: e.owner.login,
      url: e.svn_url,
      isFork: e.fork,
      description: e.description,
      language: e.language,
      forks: e.forks_count,
      stars: e.stargazers_count,
      topics: e.topics
    } satisfies RepoModel;
  });

  return {
    highlighted: repos.filter((val) => projArr.includes(val.name)),
    repos: repos.filter((val) => !projArr.includes(val.name))
  } satisfies Response;
};
