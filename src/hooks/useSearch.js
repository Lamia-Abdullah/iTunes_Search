import { useEffect, useState } from "react";
import { searchPodcasts } from "../services/searchService";
import { fetchEpisodes } from "../services/episodeService";

// Custom hook for handling podcast and episode search logic.
export function useSearch(defaultTerm = "فنجان") {
  const [podcasts, setPodcasts] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [lastSearch, setLastSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // On first load, attempt to retrieve cached results from localStorage
    const cachedPodcasts = localStorage.getItem("cachedPodcasts");
    const cachedEpisodes = localStorage.getItem("cachedEpisodes");
    const cachedSearch = localStorage.getItem("lastSearch");

    if (cachedPodcasts && cachedEpisodes && cachedSearch) {
      // If cached data exists, use it
      setPodcasts(JSON.parse(cachedPodcasts));
      setEpisodes(JSON.parse(cachedEpisodes));
      setLastSearch(cachedSearch);
    } else {
      // Otherwise, run an initial default search
      runInitialSearch(defaultTerm);
    }
}, [defaultTerm, runInitialSearch]);

  const runInitialSearch = async (searchTerm) => {
    try {
      const data = await searchPodcasts(searchTerm);
      await handleSearch({ query: searchTerm, results: data.results || [] });
    } catch (e) {
      console.error("initial search failed", e);
    }
  };

  const handleSearch = async ({ query, results }) => {
    setIsLoading(true);
    setLastSearch(query);
    setEpisodes([]);
    setPodcasts([]);

    try {
      localStorage.setItem("lastSearch", query);
      localStorage.setItem("cachedPodcasts", JSON.stringify(results));
      setPodcasts(results);

      const allEpisodes = [];

      // Fetch and filter episodes from each podcast
      for (const podcast of results) {
        try {
          const data = await fetchEpisodes(podcast.feedUrl);

          // Filter episodes that include the search query
          const matchingEpisodes = (data.episodes || [])
            .filter((ep) =>
              ep.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((ep, i) => ({
              id: `${podcast.feedUrl}-${i}`,
              title: ep.title,
              podcast: podcast.author,
              image: podcast.image,
            }));

          allEpisodes.push(...matchingEpisodes);
        } catch (e) {
          console.warn(" Failed fetching episodes for:", podcast.feedUrl);
        }
      }

      //  show all matches
      setEpisodes(allEpisodes);

      localStorage.setItem("cachedEpisodes", JSON.stringify(allEpisodes));
    } catch (error) {
      console.error(" Error in handleSearch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    podcasts,
    episodes,
    lastSearch,
    isLoading,
    handleSearch,
  };
}
