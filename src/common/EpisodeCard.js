import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function EpisodeCard({ image, title, podcast }) {
  return (
    <div className="flex items-center justify-between px-3 py-3 hover:bg-[#1a1b2c] transition border-b border-[#2c2d3c]">
      <div className="flex items-center gap-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={48}
          height={48}
          className="rounded object-cover"
        />
        <div className="overflow-hidden">
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs text-primary truncate">{podcast}</p>
        </div>
      </div>
      <button className="text-secondary">
        <BsThreeDotsVertical size={16} />
      </button>
    </div>
  );
}
