export interface Post {
  meta: {
    title: string;
    description: string;
    date: string;
    mainTag: string;
    tags: string[];
    thumbnail: string;
    published: boolean;
  };
  content: string;
}
