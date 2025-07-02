"use client";
import { useState } from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Button from "../common/Button";
import { handleSearch } from "../services/handleSearch"; 

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center justify-between gap-3 sm:px-6 mb-8">
     
      <div className="hidden md:flex items-center text-white text-2xl gap-2">
        <BiChevronLeft className="cursor-pointer" />
        <BiChevronRight className="cursor-pointer" />
      </div>
      <div className="flex-1 flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded md:hidden"
        />
        {/* input Search */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleSearch(query, onSearch)
          }
          placeholder="Search through over 70 million podcasts and episodes..."
          className="w-full px-4 py-2 rounded text-center bg-background-input border border-secondary-600 text-sm text-white placeholder-secondary"
        />
        <button
          onClick={() => handleSearch(query, onSearch)}
          className="text-white text-xl md:hidden"
        >
          <HiDotsVertical />
        </button>
      </div>

      {/* Button التسجيل */}
      <div className="hidden md:flex items-center gap-2">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
}
