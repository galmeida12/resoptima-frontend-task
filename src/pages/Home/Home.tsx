
import React, { useState, useEffect } from 'react';
import { Container, Heading, MovieList, Pagination, SearchBox } from '../components';
import { fetchMovies } from '../api/movieApi';
import { getPages, paginate } from '../utils/helpers';

export const Home: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [moviesPerPage, setMoviesPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchMoviesData = async () => {
      setLoading(true);
      const data = await fetchMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    };

    fetchMoviesData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedMovies = paginate(filteredMovies, currentPage);

  const pageNumbers = getPages(totalPages);

  return (
    <Container>
      <Heading>Movie App</Heading>
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <MovieList movies={paginatedMovies} loading={loading} />
      <Pagination pages={pageNumbers} currentPage={currentPage} moviesPerPage={moviesPerPage} onChange={handlePageChange} />
    </Container>
  );
};

export default Home;
