import { BYPASS_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export interface RepoModel {
    name: string,
    owner: string,
    url: string,
    isFork: boolean,
    description: string,
    language: string | null,
    forks: number,
    stars: number,
    topics: string[],

}

export const config = {
  isr: {
    expiration: 60,
    bypassToken: BYPASS_TOKEN
  }
};

export const load: PageServerLoad = async ({ fetch, params }) => {
  console.log(params);

  const res = await fetch('https://api.github.com/users/dhzdhd/repos', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      Accept: 'application/vnd.github+json'
    }
  });

  const data: [] = await res.json();

  console.log(data);
  const relevant: RepoModel[] = data.map((e) => {
    return {

    } satisfies RepoModel;
  });

  return {
    repos: []
  } satisfies {repos: RepoModel[]};
};
