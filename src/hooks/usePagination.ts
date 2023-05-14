import { PostData } from "@/types";
import { useState } from "react";

interface PaginationProps {
  perPage: number;
  data: PostData[];
}

export function usePagination({ perPage, data }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / perPage);

  const updateData = () => {
    const page = currentPage - 1;
    const start = page * perPage;
    const end = start + perPage;
    const listPosts = data.slice(start, end);
    return listPosts;
  };

  const nextPage = () => {
    if (currentPage >= totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const listPosts = updateData();

  return {
    nextPage,
    previousPage,
    totalPages,
    currentPage,
    listPosts,
  };
}
