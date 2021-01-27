import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { Posts, Post } from "../types/posts";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export function getSortedPosts(): Posts {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map(parsePost);
  // Sort posts by created timestamp
  return sortByCreatedTimestamp(allPosts);
}

export async function getPost(id: string | Array<string>) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: true })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Post;
}

const parsePost = (fileName: string) => {
  // Remove ".md" from file name to get id
  const id = fileName.replace(/\.md$/, "");

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  } as Post;
};

const sortByCreatedTimestamp = (allPosts: Array<any>) =>
  allPosts.sort((a, b) => {
    if (a.created < b.created) {
      return 1;
    } else {
      return -1;
    }
  });

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}