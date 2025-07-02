"use client";
import { useRef } from "react";
import PodcastCard from "../common/PodcastCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function PodcastSection({ podcasts = [], searchTerm = ""  }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative mb-10">
      <div className="border-b border-divider mb-4 flex justify-between items-center pb-2">
     <h2 className="text-lg font-semibold px-6">
          Top podcasts for: <span className="text-primary">{searchTerm}</span>
        </h2>
        <div className="flex items-center gap-1 text-white px-6">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-hover"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-hover"
          >
            <MdKeyboardArrowRight size={24} />
          </button>
          <button className="p-1 hover:text-gray-300">
            <BsThreeDotsVertical size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative overflow-x-auto pb-4 scroll-smooth scrollbar-custom"
      >
        <div className="px-6 flex gap-4 w-max">
          {podcasts.map((item) => (
            <div className="flex-shrink-0" key={item.feedUrl}>
              <PodcastCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
