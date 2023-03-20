import React from 'react';
import { MovieContainer, MovieImage, MovieTitle, MovieDescription, MovieYear, MovieDirector } from './MovieCard.styled';
import { MovieCardProps } from './MovieCard.types';

export const Movie: React.FC<MovieCardProps> = ({ id, title, coverImage, description, director, year }) => {
  return (
    <MovieContainer>
      <MovieImage src={coverImage} alt={`${id}-${title}`} />
      <MovieTitle>{title}</MovieTitle>
      <MovieDirector>{director}</MovieDirector>
      <MovieYear>{year}</MovieYear>
      <MovieDescription>{description}</MovieDescription>
    </MovieContainer>
  );
};
