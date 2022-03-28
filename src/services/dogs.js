export default function fetchDogs() {
  const params = new URLSearchParams();
  params.set('select', '*');
  let url = `${process.env.REACT_SUPABASE_URL}/rest/v1/dogs?${params.toString()}`;
  const resp = await fetch( url, {
      headers: {
apikey: process.env.REACT_SUPABASE_KEY,
Authorization: `Bearer${process.env.REACT_SUPABASE_KEY}`
      },
  });
  const data = await resp.json();
  return data;
}

// what is params toString? are we assigning an index value to the prop passed through?
// what the hell is Bearer doing? 
// setting resp.json to the variable data is assigning it the json database value??