export type PostData = {
  [index: string]: string | null | undefined;
  id: string;
  content: string;
  title: string;
  date: string;
  contentHtml?: string;
};

export type PostsData = Array<PostData>;
