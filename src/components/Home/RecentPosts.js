import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import Image from "next/image";
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-12 sm:mt-20  md:mt-28 px-10 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-mono capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-10 mt-10">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
        
        <div className="col-span-1 row-span-1 relative flex justify-start items-center">
        <Link
          href="/categories/all"
          className="w-fit h-fit font-mono rounded-md ml-2 px-4 py-2 bg-slate-200 text-black dark:bg-dark dark:text-white">
          View all  -&gt;
        </Link>
            </div>
      </div>
    </section>
  );
};

export default RecentPosts;
