import { bundleMDX } from "mdx-bundler";
import * as fs from "fs";
import * as path from "path";
import glob from "glob";
import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";

import { getId } from "./utils";

const CONTENT_FOLDER = `${process.cwd()}/_dist-content`;
const POST_FILENAME = "index.mdx";

export type Heading = {
  id: string;
  text: string;
  level: number;
};

export type Post = {
  code: string;
  frontmatter: Record<string, any>;
  slug: string;
  headings: Heading[];
};

export type PostMetadata = {
  frontmatter: Record<string, any>;
  slug: string;
};

const theme = {
  light: JSON.parse(
    fs.readFileSync(`${process.cwd()}/assets/light-colorblind.json`, "utf8")
  ),
  dark: JSON.parse(
    fs.readFileSync(`${process.cwd()}/assets/dark-default.json`, "utf8")
  ),
};

/**
 * Gets the post from `dist/content` and bundles it using MDX bundler
 */
export const getPost = async (slug: string): Promise<Post> => {
  const postFolder = path.join(CONTENT_FOLDER, slug);
  const mdxSource = (
    await fs.promises.readFile(path.join(postFolder, POST_FILENAME))
  ).toString();
  const mdxOut = await bundleMDX({
    source: mdxSource,
    cwd: postFolder,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [
          rehypePrettyCode,
          {
            theme,
            onVisitHighlightedLine(node) {
              // Each line node by default has `class="line"`.
              node.properties.className.push("highlighted");
            },
          },
        ],
      ];
      return options;
    },
    esbuildOptions(options) {
      /**
       * Babel saves React files with a .js extension, so we have to explicitly tell
       * esbuild to parse these files assuming it contains JSX
       */
      options.loader = {
        ".js": "jsx",
      };
      options.tsconfig = `${process.cwd()}/tsconfig-esbuild.json`;
      return options;
    },
  });
  return { ...mdxOut, slug, headings: getHeadings(mdxSource) };
};

const getHeadings = (content: string): Heading[] => {
  return content
    .split("\n")
    .filter((line) => line.match(/^#{1,4}\s/))
    .map((line) => {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+/, "").trim();
      return {
        text,
        id: getId(text),
        level,
      };
    });
};

export const getAllPosts = async (): Promise<PostMetadata[]> => {
  const paths = await getAllPostPaths();
  return Promise.all(
    paths.map(async (postPath) => {
      const file = await fs.promises.readFile(
        path.join(process.cwd(), postPath)
      );
      const { data: frontmatter } = matter(file.toString());
      return {
        slug: postPath.replace("content/", "").replace("/index.mdx", ""),
        frontmatter,
      };
    })
  );
};

const getAllPostPaths = () => {
  return new Promise<string[]>((resolve, reject) => {
    glob("content/**/index.mdx", (err, matches) => {
      if (err) {
        reject(err);
      } else {
        resolve(matches);
      }
    });
  });
};
