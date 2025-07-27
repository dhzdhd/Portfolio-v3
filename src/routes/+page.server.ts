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
  let allRepos: any[] = [];
  let page = 1;
  let hasMorePages = true;

  while (hasMorePages) {
    const res = await fetch(`https://api.github.com/users/dhzdhd/repos?per_page=100&page=${page}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Accept: 'application/vnd.github+json'
      }
    });

    const data: any[] = await res.json();

    if (data.length === 0) {
      hasMorePages = false;
    } else {
      allRepos = [...allRepos, ...data];
      page += 1;
    }
  }

  const repos: RepoModel[] = allRepos.map((repo: any) => {
    return {
      name: repo.name,
      owner: repo.owner.login,
      url: repo.svn_url,
      isFork: repo.fork,
      description: repo.description,
      language: repo.language,
      forks: repo.forks_count,
      stars: repo.stargazers_count,
      topics: repo.topics
    } satisfies RepoModel;
  });

  return {
    highlighted: repos.filter((val) => projArr.includes(val.name.toLowerCase())),
    repos: repos.filter((val) => !projArr.includes(val.name.toLowerCase()))
  } satisfies Response;
};
