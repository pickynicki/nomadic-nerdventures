//import { getCollection } from "astro:content";

// Only return posts without `draft: true` in the frontmatter

// export const latestPosts = (
//   await getCollection("blog", ({ data }) => {
//     return data.draft !== true;
//   })
// ).sort(
//   (a, b) =>
//     new Date(b.data.publishDate).valueOf() -
//     new Date(a.data.publishDate).valueOf()
// );

import { type ImageAsset, type PortableTextBlock, type Slug} from "sanity";
import client from "./client";
import type { LATEST_POSTS_QUERYResult } from "../../sanity.types";
import groq from "groq";


const LATEST_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    category->{ title, "slug": slug.current},
    tags[]-> {title, "slug": slug.current},
    description,
    "author": author->{
      name,
      "image": image.asset->url,
      "slug": slug.current
    },
    publishedAt,
    body,
  } | order(_createdAt desc)`;

export const latestPosts = client.fetch<LATEST_POSTS_QUERYResult>(
  LATEST_POSTS_QUERY
);

export default {
  latestPosts
}