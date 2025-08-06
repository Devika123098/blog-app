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
    <div className={cn("min-h-screen px-4 md:px-10 pb-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 mt-15")}>
      <div className={cn("max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-10 backdrop-blur")}>
        <h1 className={cn("font-bold text-2xl md:text-4xl text-center mb-6 md:mb-10 leading-tight tracking-tight")}>
          {post.title}
        </h1>
        <div className={cn("flex flex-col md:flex-row items-center justify-center gap-4 mb-8")}>
          <div className={cn("w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 shadow-md")}>
            <Image
              width={56}
              height={56}
              src={post.avatar}
              alt={post.name}
              className={cn("rounded-full object-cover")}
            />
          </div>
          <div className={cn("text-center md:text-left")}>
            <p className={cn("text-sm font-semibold text-gray-900")}>{post.name}</p>
            <div className={cn("text-xs text-gray-500 flex flex-col md:flex-row gap-1 md:gap-2 items-center")}>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              <span className="hidden md:inline">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
        <div className={cn("relative mb-8 rounded-xl overflow-hidden shadow-lg")}>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={384}
            className={cn("w-full h-72 md:h-96 object-cover rounded-xl transition-transform duration-300 hover:scale-105")}
            priority
          />
          <span className={cn("absolute top-4 left-4 bg-white/90 text-gray-800 text-xs px-3 py-1 rounded-full font-medium shadow backdrop-blur")}>
            {post.tags}
          </span>
        </div>
        <article className={cn("prose prose-lg max-w-none text-gray-800 bg-white/80 rounded-xl p-6 shadow-sm")}>
          {post.body}
        </article>
      </div>
    </div>
  );
}