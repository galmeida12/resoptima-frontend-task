// components/Search/Search.tsx
import React, { useState } from 'react';
import { SearchContainer, SearchInput, SearchButton } from './Search.styled';
import { SearchProps } from './Search.types'

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchContainer>
  );
};
