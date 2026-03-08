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
    <div className="min-h-screen bg-[#FFFCDA]">
      <div className="relative w-[430px] mx-auto h-[1144px] pb-12 bg-[#FFFCDA]">
        {/* Header */}
        <header className="pt-6 px-4">
          <h1 className="text-[36px] font-bold text-brown-light leading-[28.8px] tracking-[0%]">
            Hsh
          </h1>
          <p className="text-center mt-2">
            <a href="#" className="text-[#241332] text-[9px] font-medium leading-[100%]">
              Who are we?
            </a>
          </p>
        </header>

        {/* Category Title */}
        <div className="px-4 mt-1">
          <div className="flex items-center gap-3">
            <h2 className="text-[18px] font-bold text-[#241332] leading-[23px] flex-1 font-[var(--font-geist)]">
              Manufacture of metal products
            </h2>
            <div className="flex items-center justify-center flex-shrink-0">
              <svg
                width="46.5"
                height="46.5"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_2_2327)">
                  <path
                    d="M63.7 40.45C63.7 53.2906 53.2906 63.7 40.45 63.7C27.6094 63.7 17.2 53.2906 17.2 40.45C17.2 27.6094 27.6094 17.2 40.45 17.2C53.2906 17.2 63.7 27.6094 63.7 40.45Z"
                    fill="url(#paint0_linear_2_2327)"
                  />
                  <path
                    d="M40.45 17.7C53.0145 17.7 63.2 27.8855 63.2 40.45C63.2 53.0145 53.0145 63.2 40.45 63.2C27.8855 63.2 17.7 53.0145 17.7 40.45C17.7 27.8855 27.8855 17.7 40.45 17.7Z"
                    stroke="url(#paint1_linear_2_2327)"
                  />
                </g>
                <path
                  d="M55.9863 30.0194L46.3891 26.4999H35.4378L35.3266 26.5407L25.9182 29.9908L25.8406 30.0191C25.1051 30.2892 24.6379 30.9845 24.6382 31.7391C24.6382 31.8792 24.6545 32.0215 24.6878 32.1625L25.6754 36.3335C25.8732 37.1645 26.6137 37.7435 27.4588 37.7439L27.567 37.7404L30.6343 37.5583V49.4585C30.6347 50.7743 30.6464 54.1669 31.9619 54.1674H49.8644C51.1799 54.1669 51.1916 50.7739 51.1921 49.4585V37.5583L54.2697 37.7409L54.3677 37.7439C55.2126 37.7436 55.9534 37.1649 56.1512 36.3339L57.1387 32.1621C57.1717 32.0211 57.1882 31.8793 57.1882 31.7392C57.1881 30.9845 56.7214 30.2897 55.9863 30.0194Z"
                  fill="#A18152"
                />
                <rect x="37.6599" y="37.8919" width="6.5102" height="13.0204" fill="#F9F6D2" />
                <rect x="32.7768" y="29.7553" width="16.2755" height="3.2551" fill="#F4F1CB" />
                <defs>
                  <filter
                    id="filter0_dd_2_2327"
                    x="0.0000123978"
                    y="0.0000123978"
                    width="76.7"
                    height="76.7"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="5" dy="5" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.854902 0 0 0 0 0.803922 0 0 0 0 0.564706 0 0 0 0.57 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_2327" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-7" dy="-7" />
                    <feGaussianBlur stdDeviation="5.1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.992157 0 0 0 0 0.960784 0 0 0 0.57 0"
                    />
                    <feBlend mode="normal" in2="effect1_dropShadow_2_2327" result="effect2_dropShadow_2_2327" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_2327" result="shape" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2_2327"
                    x1="17.2"
                    y1="17.2"
                    x2="63.7"
                    y2="63.7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.21" stopColor="#F4F1CB" />
                    <stop offset="0.97" stopColor="#FFFCDA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2_2327"
                    x1="28.36"
                    y1="25.105"
                    x2="58.12"
                    y2="61.375"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFFCDA" />
                    <stop offset="1" stopColor="#F5EFC6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-center mt-1">
            <a
              href="#"
              className="text-[#241332] text-[9px] font-medium underline leading-[100%] font-[var(--font-geist)]"
            >
              Got related skill?
            </a>
          </p>
        </div>

        {/* Query Section */}
        <div className="mt-8 px-5">
          <p className="text-center text-brown-dark font-bold text-lg leading-snug">
            Got a project? A question? Please
            <br />
            post your query below:
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
                boxShadow:
                  "5px 5px 8px 0px rgba(218, 205, 144, 0.57), -7px -7px 10.2px 0px rgba(255, 253, 245, 0.57)",
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
        <div className="mt-6 px-3 flex flex-col gap-3">
          {queries.map((query) => (
            <div
              key={query.id}
              style={{
                background: "#fffbe3",
                border: "1px solid rgba(237, 226, 176, 0.9)",
              }}
              className="rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
            >
              <p className="text-[#4c5264] text-[11px] leading-[14px]">{query.text}</p>
              <div className="flex items-center gap-[8px] mt-3 text-[#0b0b0b] flex-wrap">
                {/* Views */}
                <span className="flex items-center gap-[4px] text-[11px]">
                  <svg className="w-4 h-[9.25px]" viewBox="0 0 24 14" fill="none">
                    <path d="M1 7s4-6 11-6 11 6 11 6-4 6-11 6S1 7 1 7z" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="7" r="3" stroke="#020202" strokeWidth="1.5" fill="none"/>
                  </svg>
                  {query.views} views
                </span>
                {/* Replies */}
                <span className="flex items-center gap-[4px] text-[11px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="7" r="4" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#020202" strokeWidth="1.5" fill="none"/>
                  </svg>
                  Replies
                </span>
                {/* Date */}
                <span className="flex items-center gap-[4px] text-[11px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="#020202" strokeWidth="1.5"/>
                  </svg>
                  {query.date}
                </span>
                {/* Status */}
                <span className="flex items-center gap-[4px] text-[11px]">
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
                <span className="ml-auto text-[10px] font-semibold text-[#2ba05a]">
                  #{query.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center mt-10 px-4 pb-10">
          <button className="px-8 py-2.5 rounded-full border border-[#e6dbb2] bg-[#fffbe3] text-[#a18152] font-medium text-[12px] hover:bg-[#f6ebc4] transition-colors cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
            Browse all categories
          </button>
        </div>
      </div>
    </div>
  );
}

const Home = dynamic(() => Promise.resolve(HomeContent), { ssr: false });
export default Home;
