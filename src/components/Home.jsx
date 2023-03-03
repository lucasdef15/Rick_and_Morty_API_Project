import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feed from './Feed';
import Pagination from './Pagination';
import Missing from './Missing';
import '../styles/Home.css';

const ITEMS_PER_PAGE = 15;

const Home = ({ characters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState({ page: pageNumber }, '', `?page=${pageNumber}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, [location.search]);

  return (
    <main className="Home">
      {characters.length === 0 ? (
        <Missing />
      ) : (
        <>
          <Feed characters={currentItems} currentPage={currentPage} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageClick={handlePageClick}
          />
        </>
      )}
    </main>
  );
};

export default Home;
