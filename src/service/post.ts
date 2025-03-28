import { glob } from "fast-glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "@/types";

const POST_PATH = path.join(process.cwd(), "src", "posts");
const FILE_NAME = "migrate-from-next13-to-next15";

export const getPost = async (): Promise<Post> => {
  const file = glob.sync(`**/${FILE_NAME}.mdx`, { cwd: POST_PATH });
  const filePath = file[0];
  const fullPath = path.join(POST_PATH, filePath);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContents);

  const meta = {
    title: data.title,
    description: data.description,
    date: data.date,
    mainTag: data.mainTag,
    tags: data.tags,
    thumbnail: data.thumbnail,
    published: data.published,
  };

  return {
    meta,
    content,
  };
};
