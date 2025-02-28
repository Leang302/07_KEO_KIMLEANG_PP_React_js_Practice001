import React from "react";

export default function CardComponent({ book }) {
  return (
    <>
      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative">
        <h5 className="mt-4 lg:mt-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {book.bookTitle}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Written By: {book.author}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Edition: {book.edition}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Quantity: {book.qty}
        </p>
        <p className="p-1 lg:p-3 bg-blue-700 text-white rounded-l-lg rounded-bl-lg absolute top-0 right-0">
          {new Date(book.publishedDate).toLocaleDateString("en-us", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </a>
    </>
  );
}
