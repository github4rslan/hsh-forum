"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface Query {
  id: number;
  text: string;
  views: number;
  date: string;
  status: "Open" | "Closed";
}

function HomeContent() {
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
    <div className="min-h-screen bg-cream-light">
      <div className="w-full max-w-[430px] mx-auto min-h-screen pb-10 bg-[#FFFCDA]">

        {/* Header */}
        <header className="pt-8 px-5 pb-4">
          <h1 className="text-[2rem] font-bold text-brown-light tracking-tight">Hsh</h1>
          <p className="text-center mt-1">
            <a href="#" className="text-green-accent text-sm font-medium">Who are we?</a>
          </p>
        </header>

        {/* Category Title */}
        <div className="px-5">
          <div className="flex items-center gap-3">
            <h2 className="text-[1.35rem] font-bold text-brown-dark leading-tight flex-1 whitespace-nowrap">Manufacture of metal products</h2>
            <div className="w-[50px] h-[50px] bg-[#ece5cc] rounded-2xl shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <path d="M10 5L4 10V18H10V36H30V18H36V10L30 5H25C25 7.8 22.76 10 20 10C17.24 10 15 7.8 15 5H10Z" fill="#a07850"/>
                <rect x="11.5" y="10.5" width="17" height="3" rx="0.5" fill="#e8dfc0"/>
                <rect x="13" y="19" width="14" height="10" rx="1" stroke="#8a6840" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <p className="text-center mt-1.5">
            <a href="#" className="text-green-accent text-xs font-medium">Got related skill?</a>
          </p>
        </div>

        {/* Query Section */}
        <div className="mt-8 px-5">
          <p className="text-center text-brown-dark font-bold text-lg leading-snug">
            Got a project? A question? Please<br />post your query below:
          </p>
          <textarea
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            style={{
              background: "linear-gradient(317.53deg, #FFFCDA 28.61%, #F4F1CB 82.19%)",
              border: "1px solid rgba(245, 239, 198, 0.7)",
              boxShadow: "-8px -7px 8px 0px rgba(255, 253, 245, 0.57) inset, 7px 7px 12px 0px rgba(218, 205, 144, 0.57) inset",
            }}
            className="mt-4 w-full h-[90px] rounded-lg px-4 py-3 text-sm text-brown-dark resize-none focus:outline-none"
            placeholder=""
          />
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePost}
              disabled={posting || !queryText.trim()}
              className="relative w-[115px] h-[31px] rounded-[20px] bg-transparent text-[#A18152] font-medium text-[16px] leading-[14px] hover:bg-beige/30 transition-colors disabled:opacity-50 cursor-pointer before:absolute before:inset-0 before:rounded-[20px] before:p-[2px] before:bg-gradient-to-br before:from-[#FFFCDA] before:to-[#F5EFC6] before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-[18px] after:bg-cream-light after:-z-[5] after:content-['']"
            >
              {posting ? "Posting..." : "Post query"}
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-12 px-5">
          <h3 className="text-center text-[#241332] font-medium text-[20px] leading-[100%]">
            …Or search the category&apos;s answers!
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              style={{
                background: "linear-gradient(317.53deg, #FFFCDA 28.61%, #F4F1CB 82.19%)",
                border: "1px solid rgba(245, 239, 198, 0.7)",
                boxShadow: "-8px -7px 8px 0px rgba(255, 253, 245, 0.57) inset, 7px 7px 12px 0px rgba(218, 205, 144, 0.57) inset",
              }}
              className="flex-1 h-[30px] rounded-lg px-4 text-sm text-brown-dark focus:outline-none"
            />
            <button
              onClick={handleSearch}
              style={{
                background: "linear-gradient(135deg, #F4F1CB 21%, #FFFCDA 97%)",
                border: "1px solid #F5EFC6",
                boxShadow: "5px 5px 8px 0px rgba(218, 205, 144, 0.57), -7px -7px 10.2px 0px rgba(255, 253, 245, 0.57)",
              }}
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#3d2415" strokeWidth="2.5"/>
                <path d="M16.5 16.5L21 21" stroke="#3d2415" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="mt-6 px-4 flex flex-col gap-3">
          {queries.map((query) => (
            <div
              key={query.id}
              style={{
                background: "#FFFCDA",
                border: "1px solid rgba(245, 239, 198, 0.6)",
              }}
              className="rounded-2xl px-4 py-3"
            >
              <p className="text-[#4C5264] text-[12px] font-normal leading-[100%]">{query.text}</p>
              <div className="flex items-center gap-[4px] mt-3 text-[#0B0B0B] flex-wrap">
                {/* Views */}
                <span className="flex items-center gap-[4px] text-[12px]">
                  <svg className="w-4 h-[9.25px]" viewBox="0 0 24 14" fill="none">
                    <path d="M1 7s4-6 11-6 11 6 11 6-4 6-11 6S1 7 1 7z" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="7" r="3" stroke="#020202" strokeWidth="1.5" fill="none"/>
                  </svg>
                  {query.views} views
                </span>
                {/* Replies */}
                <span className="flex items-center gap-[4px] text-[12px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="7" r="4" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#020202" strokeWidth="1.5" fill="none"/>
                  </svg>
                  Replies
                </span>
                {/* Date */}
                <span className="flex items-center gap-[4px] text-[12px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="#020202" strokeWidth="1.5"/>
                  </svg>
                  {query.date}
                </span>
                {/* Status */}
                <span className="flex items-center gap-[4px] text-[12px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    {query.status === "Open" ? (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#020202" strokeWidth="1.5" fill="none"/>
                      </>
                    ) : (
                      <>
                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                        <path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v4" stroke="#020202" strokeWidth="1.5" fill="none"/>
                      </>
                    )}
                  </svg>
                  {query.status}
                </span>
                {/* ID */}
                <span
                  className="ml-auto text-[9px] font-bold text-[#2BA05A]"
                  style={{ fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif" }}
                >
                  #{query.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center mt-10 px-5 pb-8">
          <button className="px-10 py-3 rounded-full border border-card-border bg-card-bg text-green-accent font-medium text-sm hover:bg-beige/50 transition-colors cursor-pointer">
            Browse all categories
          </button>
        </div>
      </div>
    </div>
  );
}

const Home = dynamic(() => Promise.resolve(HomeContent), { ssr: false });
export default Home;
