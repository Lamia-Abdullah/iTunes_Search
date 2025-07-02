"use client";
import SearchInput from "@/components/SearchInput";
import PodcastSection from "@/components/PodcastSection";
import EpisodeSection from "@/components/EpisodeSection";
import Banner from "@/components/Banner";
import NoResults from "@/components/NoResults"; 
import Loader from "@/components/Loader";
import { useSearch } from "../hooks/useSearch";

export default function Page() {
  const {
    podcasts,
    episodes,
    lastSearch,
    isLoading,
    handleSearch,
  } = useSearch("فنجان");

  const noResults =
    lastSearch && podcasts.length === 0 && episodes.length === 0 && !isLoading;

  return (
    <>
      <SearchInput onSearch={handleSearch} />

      {isLoading && (
        <div className="mt-10 text-center text-white">
          <Loader /> {/* loading */}
        </div>
      )}
      {noResults && (
        <NoResults searchTerm={lastSearch} />
      )}

      {!isLoading && !noResults && lastSearch && (
        <>
          <PodcastSection podcasts={podcasts} searchTerm={lastSearch} />
          <Banner />
          <EpisodeSection episodes={episodes} searchTerm={lastSearch} />
        </>
      )}
    </>
  );
}
