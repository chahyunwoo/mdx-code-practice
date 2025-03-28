import { Post } from "@/types";

interface PostHeaderProps {
  post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <div className="border-b-2 pb-10">
      <h1>{post.meta.title}</h1>
      <p>{post.meta.description}</p>
      <p>{post.meta.date}</p>
      <p>{post.meta.mainTag}</p>
      <p>{post.meta.tags}</p>
      <p>{post.meta.thumbnail}</p>
      <p>{post.meta.published}</p>
    </div>
  );
}
