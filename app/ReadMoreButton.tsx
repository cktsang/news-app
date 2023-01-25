"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  function handleClick() {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  }

  return (
    <button
      onClick={handleClick}
      className='bg-orange-400 dark:text-gray-900 hover:bg-orange-500 h-10 rounded-b-lg'
    >
      Read More
    </button>
  );
}

export default ReadMoreButton;
