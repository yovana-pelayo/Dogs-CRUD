import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

// what is params toString? are we assigning an index value to the prop passed through?
// what the hell is Bearer doing?
// setting resp.json to the variable data is assigning it the json database value??
