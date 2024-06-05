"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-10 bg-red-200 flex flex-col md:flex-row justify-center items-center py-20">

      <div className="md:w-1/2 px-4 xs:px-10 md:px-8 lg:px-14 xl:px-20">
      <p className="text-black text-center font-sans text-2xl">Stay up to date with our latest technology news.</p>
      <p className="text-neutral-800 text-center font-sans text-sm mt-4">Enjoy latest blogs from us. We cover compliance knowledge, tips, industry updates and technology.</p>
      <div className="bg-white rounded-full flex justify-between mt-4 mx-4 items-center">
  <input
    type="email"
    className="flex-grow text-neutral-800 rounded-full border-none focus:ring-0"
    placeholder="Email"
  />
  <div className="bg-red-600 px-4 mr-1 flex justify-center items-center text-white rounded-full h-8 hover:cursor-pointer">
    Subscribe
  </div>
</div>
</div>
<div className="mt-10 md:hidden w-full bg-white h-1"></div>
<div className="mt-10 md:mt-0 md:w-1/2 flex flex-row">
  <div className="bg-white w-0 md:w-2"></div>
  <div className="px-4 xs:px-10 md:px-8 lg:px-14 xl:px-20">
  <p className="text-black text-center font-sans text-2xl">Share your ideas!</p>
  <p class="text-base text-black font-sans text-md mt-4">
  We'd love to hear your <span class="font-semibold">suggestions</span> for 
  <span className="font-semibold text-lg"> blog topics </span>,
  <span className="font-semibold text-lg"> technology reviews </span>, 
  <span className="font-semibold text-lg"> tips and tricks </span>, 
 or anything else you'd like us to cover. Let us know what 
  <span className="font-semibold text-lg"> interests you!</span>
    </p>
<textarea id="suggestion" rows="2" placeholder="Suggestion" class="w-full mt-4 p-2 rounded-md border-none focus:ring-0"></textarea>
<div className="flex justify-end mt-2">
<div className="text-white flex px-4 h-8 rounded-full bg-red-600 items-center justify-center hover:cursor-pointer ">Submit</div>
</div>

</div>
</div>
   </footer>
    // <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
    //   <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
    //     Interesting Stories | Updates | Guides
    //   </h3>
    //   <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
    //     Subscribe to learn about new technology and updates. Join over 5000+
    //     members community to stay up to date with latest news.
    //   </p>

    //   <form
    //     onSubmit={handleSubmit(onSubmit)}
    //     className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
    //   >
    //     <input
    //       type="email"
    //       placeholder="Enter your email"
    //       {...register("email", { required: true, maxLength: 80 })}
    //       className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
    //     />

    //     <input
    //       type="submit"
    //       className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
    //     />
    //   </form>
    //   <div className="flex items-center mt-8">
    //     <a
    //       href={siteMetadata.linkedin}
    //       className="inline-block w-6 h-6 mr-4"
    //       aria-label="Reach out to me via LinkedIn"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
    //     </a>
    //     <a
    //       href={siteMetadata.twitter}
    //       className="inline-block w-6 h-6 mr-4"
    //       aria-label="Reach out to me via Twitter"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
    //     </a>
    //     <a
    //       href={siteMetadata.github}
    //       className="inline-block w-6 h-6 mr-4 fill-light"
    //       aria-label="Check my profile on Github"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
    //     </a>
    //     <a
    //       href={siteMetadata.dribbble}
    //       className="inline-block w-6 h-6 mr-4"
    //       aria-label="Check my profile on Dribbble"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
    //     </a>
    //   </div>

    //   <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
    //     <span className="text-center">
    //       &copy;2023 CodeBucks. All rights reserved.
    //     </span>
    //     <Link
    //       href="/sitemap.xml"
    //       className="text-center underline my-4 md:my-0"
    //     >
    //       sitemap.xml
    //     </Link>
    //     <div className="text-center">
    //       Made with &hearts; by{" "}
    //       <a href="https://devdreaming.com" className="underline" target="_blank">
    //         CodeBucks
    //       </a>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
