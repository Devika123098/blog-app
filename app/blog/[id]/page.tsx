import { notFound } from "next/navigation";
import Image from "next/image";
import type { post } from "../../types/post";
import { cn } from "../../lib/utils";

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const post: post = await res.json();

  return (
    <div className="min-h-screen px-10 pb-10">
      <div className="max-w-3xl mx-auto  bg-gray-50 rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
        <h1 className="font-bold text-2xl md:text-4xl text-center mb-6 md:mb-10 leading-tight tracking-tight">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
            <Image
              width={48}
              height={48}
              src={post.avatar}
              alt={post.name}
              className="rounded-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">{post.name}</p>
            <div className="text-xs text-gray-500 flex flex-col md:flex-row gap-1 md:gap-2 items-center">
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span className="hidden md:inline">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
        <div className="relative mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={384}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md border"
            priority
          />
          <span className="absolute top-4 left-4 bg-white/80 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow">
            {post.tags}
          </span>
        </div>
        <article className="prose prose-lg max-w-none text-gray-800">
          {post.body}
        </article>
      </div>
    </div>
  );
}