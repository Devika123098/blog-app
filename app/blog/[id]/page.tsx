import { notFound } from "next/navigation";
import Image from "next/image";
import type { post } from "../../types/post"


export default async function BlogPostPage({params}: {params: {id: string}}){
    const res = await fetch(`https://688dabf0a459d5566b12deb8.mockapi.io/api/vi/posts/${params.id}`, {
    cache: "no-store",
  })

  if (!res.ok) return notFound()

  const post: post = await res.json()

  return (
    <div className="max-w-3xl mx-auto mt-5 p-6 bg-white">
        <h1 className=" max-w-2xl font-bold text-xl md:text-4xl text-center mb-8">{post.title}</h1>
        <div className="w-full flex  justify-center items-center gap-2 mb-8">
            <div className="w-[40px] rounded-full overflow-hidden"><Image width={40} height={40} src={post.avatar} alt={post.name} className="rounded-full object-cover"/></div>
            <div>
                <p className="text-xs font-semibold">{post.name}</p>
                <div className="text-xs text-gray-700 flex gap-2">
                    <p>{post.createdAt}</p>
                    <span>. 8 min Read</span>
                </div>
            </div>
        </div>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={384}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <span className="inline-block bg-gray-200 text-xs px-3 py-1 rounded-full mb-3">{post.tags}</span>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

