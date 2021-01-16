import { Segments } from "./segments";
import { Posts } from "./posts";

export type TDateProps = {
  dateString: number | null;
};

export type TLayoutProps = {
  home: boolean;
};

export type TBlogProps = {
  segments: Segments;
  posts: Posts;
};
