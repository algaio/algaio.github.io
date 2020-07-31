export type Post = {
  [index: string]: string | null | undefined;
  id: string;
  content: string;
  title: string;
  date: string;
  contentHtml?: string;
};

export type Posts = Array<Post>;
