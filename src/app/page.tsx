import { getPost } from "@/service/post";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";

export default async function Home() {
  const post = await getPost();

  return (
    <main className="w-full max-w-4xl mx-auto border-x-2">
      <div className="max-w-2xl mx-auto py-10">
        <PostHeader post={post} />
        <div className="prose dark:prose-invert py-10">
          <PostBody post={post} />
        </div>
      </div>
    </main>
  );
}
