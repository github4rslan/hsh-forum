"use client";

import { useState, useEffect } from "react";

interface Query {
  id: number;
  text: string;
  views: number;
  date: string;
  status: "Open" | "Closed";
}

export default function Home() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [queryText, setQueryText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [posting, setPosting] = useState(false);

  const fetchQueries = async (search?: string) => {
    const url = search
      ? `/api/queries?search=${encodeURIComponent(search)}`
      : "/api/queries";
    const res = await fetch(url);
    const data = await res.json();
    setQueries(data);
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const handlePost = async () => {
    if (!queryText.trim()) return;
    setPosting(true);
    await fetch("/api/queries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: queryText }),
    });
    setQueryText("");
    setPosting(false);
    fetchQueries();
  };

  const handleSearch = () => {
    fetchQueries(searchText);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Browser URL bar mock - optional, skip for real app */}
      <div className="max-w-[430px] mx-auto bg-cream-light min-h-screen pb-10 border-l-[3px] border-r-[3px] border-blue-500/0">

        {/* Header */}
        <header className="pt-6 px-6 pb-6">
          <h1 className="text-4xl font-bold text-brown-light tracking-tight">Hsh</h1>
          <p className="text-center mt-1">
            <a href="#" className="text-green-accent text-sm font-medium">Who are we?</a>
          </p>

          {/* Category Title */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <h2 className="text-xl font-bold text-brown-dark">Manufacture of metal products</h2>
            <div className="w-11 h-11 bg-beige rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="8" width="16" height="12" rx="1.5" stroke="#5a3e28" strokeWidth="1.8" fill="none"/>
                <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="#5a3e28" strokeWidth="1.8" fill="none"/>
                <path d="M10 13h4v3h-4z" fill="#5a3e28"/>
              </svg>
            </div>
          </div>
          <p className="text-center mt-1">
            <a href="#" className="text-green-accent text-xs font-medium">Got related skill?</a>
          </p>
        </header>

        {/* Query Section */}
        <div className="mt-8 px-6">
          <p className="text-center text-brown-dark font-bold text-lg leading-snug">
            Got a project? A question? Please<br />post your query below:
          </p>
          <textarea
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            className="mt-4 w-full h-28 rounded-xl border border-beige bg-white/60 shadow-inner px-4 py-3 text-sm text-brown-dark resize-none focus:outline-none focus:ring-2 focus:ring-beige"
            placeholder=""
          />
          <div className="flex justify-center mt-3">
            <button
              onClick={handlePost}
              disabled={posting || !queryText.trim()}
              className="px-8 py-2.5 rounded-full border border-beige bg-cream-light text-brown-light font-medium text-sm hover:bg-beige transition-colors disabled:opacity-50 cursor-pointer"
            >
              {posting ? "Posting..." : "Post query"}
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-14 px-6">
          <h3 className="text-center text-brown-dark font-bold text-xl leading-snug">
            …Or search the category&apos;s answers!
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="flex-1 h-11 rounded-full border border-card-border bg-white/50 px-4 text-sm text-brown-dark focus:outline-none focus:ring-2 focus:ring-beige"
            />
            <button
              onClick={handleSearch}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-beige/50 transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#3d2415" strokeWidth="2.2"/>
                <path d="M16.5 16.5L21 21" stroke="#3d2415" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="mt-6 px-4 flex flex-col gap-3">
          {queries.map((query) => (
            <div
              key={query.id}
              className="bg-card-bg rounded-2xl px-4 py-3.5 border border-card-border/60"
            >
              <p className="text-brown-dark text-sm leading-relaxed">{query.text}</p>
              <div className="flex items-center gap-3 mt-2.5 text-brown-dark flex-wrap">
                {/* Views */}
                <span className="flex items-center gap-1 text-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  {query.views} views
                </span>
                {/* Replies */}
                <span className="flex items-center gap-1 text-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                  Replies
                </span>
                {/* Date */}
                <span className="flex items-center gap-1 text-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  {query.date}
                </span>
                {/* Status */}
                <span className="flex items-center gap-1 text-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    {query.status === "Open" ? (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </>
                    ) : (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v4" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </>
                    )}
                  </svg>
                  {query.status}
                </span>
                {/* ID */}
                <span
                  className={`ml-auto text-xs font-bold ${
                    query.status === "Open" ? "text-green-accent" : "text-brown-dark"
                  }`}
                >
                  #{query.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center mt-10 px-6 pb-8">
          <button className="px-10 py-3 rounded-full border border-beige bg-cream-light text-green-accent font-medium text-sm hover:bg-beige/50 transition-colors cursor-pointer">
            Browse all categories
          </button>
        </div>
      </div>
    </div>
  );
}
