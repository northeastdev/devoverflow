import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: 1, title: "What is the best way to learn React?" },
  { _id: 2, title: "How many rendering strategies are there in Next.js?" },
  { _id: 3, title: "Is mongdb a relational or non-relational database?" },
  { _id: 4, title: "What's the best way to create a modern website?" },
];

const popularTags = [
  {
    _id: 1,
    name: "react",
    totalQuestions: 2,
  },
  {
    _id: 2,
    name: "next.js",
    totalQuestions: 10,
  },
  {
    _id: 3,
    name: "database",
    totalQuestions: 1,
  },
  {
    _id: 4,
    name: "javascript",
    totalQuestions: 3,
  },
  {
    _id: 5,
    name: "redux",
    totalQuestions: 6,
  },
];

export default function RightSidebar() {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden lg:w-[266px] dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                href={`/questions/${question._id}`}
                className="flex cursor-pointer justify-between gap-7"
                key={question._id}
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="link indicator"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}
