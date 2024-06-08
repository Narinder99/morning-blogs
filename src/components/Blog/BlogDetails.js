import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="text-dark dark:text-light py-2 flex items-center justify-start flex-wrap text-sm sm:text-md font-medium mt-4">
      <time className="m-3 text-neutral-500">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      {/* <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span> */}
      <div className="border-l-2 border-neutral-500  my-3 px-3">{blog.readingTime.text}</div>
      {/* <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        {blog.tags[0]}
      </Link> */}
    </div>
  );
};

export default BlogDetails;
