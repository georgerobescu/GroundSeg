/** @type {import('./$types').PageServerLoad} */
import { env } from '$env/dynamic/private'

export const prerender = false;

export function load() {				
  return {"api":"http://" + env.HOST_HOSTNAME + ".local:27016"}
}