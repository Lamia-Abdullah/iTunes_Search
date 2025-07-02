import { searchPodcasts } from "./searchService";

export async function handleSearch(query, onSearch) {
  if (!query.trim()) return;

  try {
    const data = await searchPodcasts(query);
    onSearch({ query, results: data.results });
  } catch (error) {
    console.error("Search error:", error);
  }
}
