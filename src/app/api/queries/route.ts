import { NextRequest, NextResponse } from "next/server";

export interface Query {
  id: number;
  text: string;
  views: number;
  date: string;
  status: "Open" | "Closed";
}

// In-memory store (replace with a database in production)
const queries: Query[] = [
  {
    id: 45874,
    text: "How can I get a single metal part modeled and machined? People are interested in doing batches, and I can't afford it.",
    views: 207,
    date: "03/01/25",
    status: "Open",
  },
  {
    id: 35855,
    text: "eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. odio dignissimos ducimus qui",
    views: 207,
    date: "03/01/25",
    status: "Closed",
  },
  {
    id: 27058,
    text: "eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. odio dignissimos ducimus qui",
    views: 207,
    date: "03/01/25",
    status: "Open",
  },
  {
    id: 43651,
    text: "eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. odio dignissimos ducimus qui",
    views: 207,
    date: "03/01/25",
    status: "Closed",
  },
  {
    id: 18790,
    text: "eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. odio dignissimos ducimus qui",
    views: 207,
    date: "03/01/25",
    status: "Closed",
  },
];

// GET - fetch all queries, optional search filter
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase();

  let results = queries;
  if (search) {
    results = queries.filter((q) => q.text.toLowerCase().includes(search));
  }

  return NextResponse.json(results);
}

// POST - add a new query
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { text } = body;

  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return NextResponse.json(
      { error: "Query text is required" },
      { status: 400 }
    );
  }

  const newQuery: Query = {
    id: Math.floor(10000 + Math.random() * 90000),
    text: text.trim(),
    views: 0,
    date: new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    }),
    status: "Open",
  };

  queries.unshift(newQuery);
  return NextResponse.json(newQuery, { status: 201 });
}
