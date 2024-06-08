import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeCoverSection = ({blogs}) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center bg-white dark:bg-dark">
    <div className="flex flex-col pt-8 xs:flex-row px-8 xs:px-10 sm:px-18 md:px-24 xl:px-64">
        <div className="xs:w-1/2 xs:m-1 sm:m-2 md:m-4">
            <Image           
        src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height} className="rounded-lg w-full h-auto object-cover"/>
        </div>
        <div className="xs:w-1/2 pl-4 flex flex-col justify-center">
            <div className="text-gray-500 dark:text-white dark:bg-dark mb-2">
                <span>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</span>
                <span className="ml-4">{blog.readingTime.text}</span>
            </div>
            <h2 className="text-2xl dark:text-white dark:bg-dark font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700  dark:text-white dark:bg-dark mb-4">{blog.title}.</p>
            <Link href={blog.url} className="w-fit bg-black text-white dark:text-black dark:bg-white px-4 py-2 rounded-lg text-center">Read This Blog</Link>
        </div>
    </div>
</div>
    // <div className='w-full inline-block'>
    //     <article className='flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]'>
    //         <div className='absolute top-0 left-0 bottom-0 right-0 h-full
    //         bg-gradient-to-b from-transparent from-0% to-dark/90 z-0
    //         ' />
    //     <Image src={blog.image.filePath.replace("../public", "")}
    //     placeholder='blur'
    //     blurDataURL={blog.image.blurhashDataUrl}
    //     alt={blog.title}
    //     fill
    //     className='w-full h-full object-center object-cover -z-10'
    //     sizes='90vw'
    //     priority
    //     />

    //     <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
    //         <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
    //         <Link href={blog.url} className='mt-6'>
    //         <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
    //             <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
    //             dark:to-accentDark/50 bg-[length:0px_6px]
    //             hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
    //             {blog.title}
    //             </span>
    //         </h1>
    //         </Link>
    //         <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
    //             {blog.description}
    //         </p>
    //     </div>
    // </article>
    // </div>
    
  )
}

export default HomeCoverSection