import { BYPASS_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const config = {
  isr: {
    expiration: 60,
    bypassToken: BYPASS_TOKEN
  }
};

export async function load({ fetch, params }) {
  console.log(params);

  const res = await fetch('');

  return {
    post: ''
  };
}
