import { useState } from "react";

export const usePagination = (perPageRecords, totalRecords) => {
  const totalPages = Math.ceil(totalRecords / perPageRecords);
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
  const [currentPage, setCurrentPage] = useState(1);
  const dispPage = (pageNo) => {
    setCurrentPage(pageNo);
    const startpageindex = perPageRecords * pageNo - perPageRecords;
    const endpageindex = perPageRecords * pageNo - 1;
    setStartPageIndex(startpageindex);
    if (endpageindex > totalRecords) {
      setEndPageIndex(totalRecords - 1);
    } else {
      setEndPageIndex(endpageindex);
    }
  };
  return [totalPages, startPageIndex, endPageIndex, currentPage, dispPage];
};
export const searchPagination = (perPageRecords, totalRecords) => {
  const searchTotalPages = Math.ceil(totalRecords / perPageRecords);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchStartPageIndex, setSearchStartPageIndex] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchEndPageIndex, setSearchEndPageIndex] = useState(
    perPageRecords - 1
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchCurrentPage, setSearchCurrentPage] = useState(1);
  const searchDisPage = (pageNo) => {
    setSearchCurrentPage(pageNo);
    const searchStartPageIndex = perPageRecords * pageNo - perPageRecords;
    const searchEndPageIndex = perPageRecords * pageNo - 1;
    setSearchStartPageIndex(searchStartPageIndex);
    if (searchEndPageIndex > totalRecords) {
      setSearchEndPageIndex(totalRecords - 1);
    } else {
      setSearchEndPageIndex(searchEndPageIndex);
    }
  };
  return [
    searchTotalPages,
    searchStartPageIndex,
    searchEndPageIndex,
    searchCurrentPage,
    searchDisPage,
  ];
};
