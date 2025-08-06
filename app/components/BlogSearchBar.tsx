"use client";
import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { post } from "../types/post";
import { cn } from "../lib/utils";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Blog {
  id: string;
  title: string;
}

async function fetchPosts(): Promise<Blog[]> {
  const res = await fetch("https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.map((b: post) => ({ id: b.id, title: b.title }));
}

export default function BlogSearchBar() {
  const [search, setSearch] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (parentRef.current && !parentRef.current.contains(event.target as Node)) {
        setShowDropDown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (!data) return null;

  const filtered = search
    ? data.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <div ref={parentRef} className={cn("relative md:w-64 w-full")}>
      <div className={cn("relative")}>
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowDropDown(true);
          }}
          onFocus={() => setShowDropDown(true)}
          placeholder="Search Blogs..."
          className={cn(
            "w-full pl-10 pr-3 py-2 rounded-xl border border-gray-200 bg-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm transition-all duration-200",
            "placeholder-gray-400"
          )}
        />
        <MagnifyingGlassIcon
          className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none")}
        />
      </div>
      {isLoading && (
        <div
          className={cn(
            "absolute left-0 right-0 mt-2 bg-white/80 border border-gray-200 rounded-xl shadow-lg z-50 px-4 py-2 text-gray-500 text-sm backdrop-blur"
          )}
        >
          Loading...
        </div>
      )}
      {showDropDown && (
        <ul
          className={cn(
            "absolute left-0 right-0 mt-2 bg-white/90 border border-gray-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto backdrop-blur transition-all"
          )}
        >
          {filtered.length > 0 ? (
            filtered.map((blog) => (
              <li key={blog.id}>
                <Link
                  href={`/blog/${blog.id}`}
                  className={cn(
                    "block w-full text-left px-4 py-2 hover:bg-gray-100/80 text-sm transition-colors duration-150 rounded-lg"
                  )}
                  onClick={() => setShowDropDown(false)}
                >
                  {blog.title}
                </Link>
              </li>
            ))
          ) : (
            search && !isLoading && (
              <li>
                <div
                  className={cn(
                    "px-4 py-2 text-gray-500 text-sm"
                  )}
                >
                  No blogs found
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}