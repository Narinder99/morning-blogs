import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "flex justify-center items-center py-2 px-5 rounded-full hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-light text-dark dark:bg-neutral-700 dark:text-light" : "bg-neutral-700 text-light dark:bg-slate-200 dark:text-dark"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
