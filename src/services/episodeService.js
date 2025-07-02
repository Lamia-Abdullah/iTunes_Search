

export async function fetchEpisodes(feedUrl) {
  const res = await fetch(`/api/episodes?feedUrl=${encodeURIComponent(feedUrl)}`);
  if (!res.ok) throw new Error("Failed to fetch episodes");
  return res.json(); // { episodes: [...] }
}
