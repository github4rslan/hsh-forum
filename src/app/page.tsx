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
    <div className="min-h-screen bg-white flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen pb-12 bg-[#FFFCDA] sm:shadow-xl sm:my-0">
        {/* Header */}
        <header className="pt-6 px-4">
          <h1 className="text-[36px] font-bold text-[#A18152] leading-[28.8px] tracking-[0%]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Hsh
          </h1>
          <p className="mt-2 pl-[32%]">
            <a href="#" className="text-[#241332] text-[9px] font-medium leading-[14px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Who are we?
            </a>
          </p>
        </header>

        {/* Category Title */}
        <div className="px-4 mt-1">
          <div className="flex items-center -gap-2">
            <h2 className="text-[16px] sm:text-[18px] font-bold text-[#241332] leading-[23px] flex-1 whitespace-nowrap font-[var(--font-geist)]">
              Manufacture of metal products
            </h2>
            <div className="flex items-center justify-center flex-shrink-0 -ml-5">
              <svg
                width="65"
                height="65"
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
          <p className="-mt-7 pl-[55%]">
            <a
              href="#"
              className="text-[#241332] text-[9px] font-medium underline leading-[12px] font-[var(--font-geist)]"
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
              style={{
                background: "linear-gradient(96.63deg, #F4F1CB 21.38%, #FFFCDA 98.76%)",
                boxShadow: "-5px -5px 10px rgba(255, 253, 245, 0.5), 5px 5px 10px rgba(218, 205, 144, 0.75)",
                borderRadius: "20px",
              }}
              className="w-[115px] h-[31px] flex items-center justify-center text-[#A18152] font-medium text-[16px] leading-[14px] hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
            >
              {posting ? "Posting..." : "Post query"}
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="mt-12 px-5">
          <h3 className="text-center text-[#241332] font-medium text-[18px] sm:text-[20px] leading-[100%]">
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
                background: "linear-gradient(317.53deg, #FFFCDA 28.61%, #F4F1CB 82.19%)",
                boxShadow: "7px 7px 12px rgba(218, 205, 144, 0.57), -8px -7px 8px rgba(255, 253, 245, 0.57)",
                borderRadius: "8px",
              }}
              className="px-4 py-3"
            >
              <p className="text-[#4C5264] text-[12px] font-normal leading-[16px]">{query.text}</p>
              <div className="flex items-center flex-wrap mt-3 gap-y-2">
                {/* Left metadata group */}
                <div className="flex items-center gap-[8px] sm:gap-[16px]">
                  {/* Views */}
                  <span className="flex items-center gap-[4px] text-[11px] sm:text-[12px] text-[#0B0B0B]">
                    <svg className="w-4 h-[9.25px]" viewBox="0 0 24 14" fill="none">
                      <path d="M1 7s4-6 11-6 11 6 11 6-4 6-11 6S1 7 1 7z" stroke="#020202" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="7" r="3" stroke="#020202" strokeWidth="1.5" fill="none"/>
                    </svg>
                    {query.views} views
                  </span>
                  {/* Replies */}
                  <span className="flex items-center gap-[4px] text-[11px] sm:text-[12px] text-[#0B0B0B]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#000000" strokeWidth="1.5" fill="none"/>
                      <circle cx="9" cy="7" r="4" stroke="#000000" strokeWidth="1.5" fill="none"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#000000" strokeWidth="1.5" fill="none"/>
                    </svg>
                    Replies
                  </span>
                  {/* Date */}
                  <span className="flex items-center gap-[4px] text-[11px] sm:text-[12px] text-[#0B0B0B]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3.5" width="18" height="18.5" rx="4" stroke="#0B0B0B" strokeWidth="1.5" fill="none"/>
                      <line x1="3" y1="9" x2="21" y2="9" stroke="#0B0B0B" strokeWidth="1.5"/>
                      <line x1="8" y1="2" x2="8" y2="5" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="16" y1="2" x2="16" y2="5" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="8" cy="14" r="1" fill="#0B0B0B"/>
                      <circle cx="12" cy="14" r="1" fill="#0B0B0B"/>
                      <circle cx="16" cy="14" r="1" fill="#0B0B0B"/>
                    </svg>
                    {query.date}
                  </span>
                </div>
                {/* Status group */}
                <div className="flex items-center gap-[4px] text-[11px] sm:text-[12px] text-[#0B0B0B] ml-[8px] sm:ml-[16px]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    {query.status === "Open" ? (
                      <>
                        <rect x="4" y="11" width="16" height="11" rx="2" stroke="#22242F" strokeWidth="1.5" fill="none"/>
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#22242F" strokeWidth="1.5" fill="none"/>
                      </>
                    ) : (
                      <>
                        <rect x="4" y="11" width="16" height="11" rx="2" stroke="#22242F" strokeWidth="1.5" fill="none"/>
                        <path d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4" stroke="#22242F" strokeWidth="1.5" fill="none"/>
                      </>
                    )}
                  </svg>
                  {query.status}
                </div>
                {/* ID */}
                <span
                  className="ml-auto text-[9px] font-normal"
                  style={{ fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif", color: "#2BA05A" }}
                >
                  #{query.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center mt-10 px-4 pb-10">
          <button
            style={{
              background: "linear-gradient(96.63deg, #F4F1CB 21.38%, #FFFCDA 98.76%)",
              boxShadow: "-5px -5px 10px rgba(255, 253, 245, 0.5), 5px 5px 10px rgba(218, 205, 144, 0.75)",
              borderRadius: "20px",
            }}
            className="w-[264px] h-[31px] flex items-center justify-center text-[#A18152] font-medium text-[16px] leading-[14px] hover:opacity-90 transition-opacity cursor-pointer"
          >
            Browse all categories
          </button>
        </div>
      </div>
    </div>
  );
}

const Home = dynamic(() => Promise.resolve(HomeContent), { ssr: false });
export default Home;
