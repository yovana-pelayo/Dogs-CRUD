import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}
export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}
export async function createDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  console.log(dog);
  return checkError(resp);
}
// what is params toString? are we assigning an index value to the prop passed through?
// what the hell is Bearer doing?
// setting resp.json to the variable data is assigning it the json database value??
