import { Post } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

const prettyCodeOptions: Options = {
  theme: {
    dark: "ayu-dark",
    light: "snazzy-light",
  },
};

interface PostBodyProps {
  post: Post;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              { theme: { dark: "ayu-dark", light: "snazzy-light" } },
            ],
          ],
        },
      }}
    />
  );
}
