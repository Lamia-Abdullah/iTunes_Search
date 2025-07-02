import Image from "next/image";

export default function PodcastCard({ image, title, author }) {
  return (
    <div className="group p-4 rounded-lg ">
      <Image
        src={image}
        alt={title}
        width={150}
        height={170}
        className="rounded object-cover mb-2"
      />
      <h3 className="text-sm  cursor-pointer text-white inline-block border-b border-transparent transition duration-300 group-hover:border-white">
        {title}
      </h3>
      <p className="text-xs text-primary-600 truncate">{author}</p>
    </div>
  );
}
