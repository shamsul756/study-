"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("searchTerm") || "");


  useEffect(() => {
    setSearch(searchParams.get("searchTerm") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (search.trim()) {
      params.set("searchTerm", search);
    } else {
      params.delete("searchTerm");
    }
  
    router.push(`/rooms?${params.toString()}`);
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden">
      <div className="pl-5 text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search for rooms (using room name)"
        className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
      />

      <button
        onClick={handleSearch}
        className="h-10 px-6 mr-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;