

export async function searchPodcasts(term) {
  const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`);
  if (!res.ok) throw new Error("Failed to fetch search results");
  return res.json(); // { results: [...] }
}
