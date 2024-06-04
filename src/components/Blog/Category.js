import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "flex justify-center items-center py-1 px-4 rounded-xl border-2 border-solid border-white dark:border-dark hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-light text-dark dark:bg-dark dark:text-light" : "bg-dark text-light dark:bg-light dark:text-dark"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;
