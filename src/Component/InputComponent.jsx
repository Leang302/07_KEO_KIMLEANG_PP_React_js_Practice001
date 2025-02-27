import React, { useState, useEffect } from "react";
import { Datepicker } from "flowbite-datepicker";
import CardComponent from "./CardComponent";
export default function InputComponent() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([
    {
      bookTitle: "Book 1",
      author: "asds",
      publishedDate: "12/12/2024",
      edition: "1",
      qty: 10,
    },
    {
      bookTitle: "Book 1",
      author: "asds",
      publishedDate: "12/12/2024",
      edition: "1",
      qty: 10,
    },
  ]);
  //   date picker
  useEffect(() => {
    const dateInput = document.getElementById("default-datepicker");
    if (dateInput) {
      new Datepicker(dateInput, {
        format: "mm-dd-yyyy",
        autohide: true,
      });
    }
  }, []);
  //handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  //add new book
  const addNewBook = (e) => {
    e.preventDefault();
    console.log("run");

    setBooks([...books, book]);
  };
  useEffect(() => {
    console.log(books);
  }, [books]);
  return (
    <>
      <h3 className="text-center my-10 text-3xl font-bold ">
        ReactJS Practice
      </h3>
      {/* form */}
      <form className="max-w-[80%] mx-auto" onSubmit={addNewBook}>
        <div className="grid md:grid-cols-2 md:gap-2">
          {/* book title */}
          <div className="mb-5">
            <label
              htmlFor="bookTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Book Title
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="bookTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Book title"
              required
              name="bookTitle"
            />
          </div>
          {/* Author */}
          <div className="mb-5">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="author"
              name="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Author"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-2">
          {/* date */}
          <div className="mb-5">
            <label
              htmlFor="publishedDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Publish Date
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                onChange={handleInputChange}
                id="default-datepicker"
                name="publishedDate"
                datepicker-format="mm-dd-yyyy"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>
          {/* Edition */}
          <div className="mb-5">
            <label
              htmlFor="edition"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Edition
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="edition"
              name="edition"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Edition"
              required
            />
          </div>
          {/* Quantity */}
          <div className="mb-5">
            <label
              htmlFor="qty"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              onChange={handleInputChange}
              type="number"
              id="qty"
              name="qty"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              required
            />
          </div>
        </div>
        {/* Submit btn */}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {/* list of card */}
      <div className="mt-6 w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books?.map((book) => (
          <CardComponent book={book} />
        ))}
      </div>
    </>
  );
}
