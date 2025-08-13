import { post } from "../../types/post";


const apiUrl = process.env.NEXT_PUBLIC_URL as string;


export async function fetchPosts(): Promise<post[]> {
  const res = await fetch(apiUrl ,{ next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}