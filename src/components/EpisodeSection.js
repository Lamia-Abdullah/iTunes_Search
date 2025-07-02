import EpisodeCard from "../common/EpisodeCard";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function EpisodeSection({ episodes = [] , searchTerm = ""}) {
  return (
    <section>
      <div className="border-b border-divider mb-4 px-6 flex justify-between items-center pb-2">
       <h2 className="text-lg font-semibold">
          Top episodes for: <span className="text-primary">{searchTerm}</span>
        </h2>
          <button className="hover:text-gray-300">
          <BsThreeDotsVertical size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
        {episodes.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
