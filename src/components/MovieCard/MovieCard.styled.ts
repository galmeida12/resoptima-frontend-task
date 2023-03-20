import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 320px;
`

export const MovieTitle = styled.h1`
  color: black;
  text-transform: uppercase;
`

export const MovieYear = styled.p`
  color: grey;
`

export const MovieDescription = styled.p`
  color: black;
`

export const MovieDirector = styled.p`
  color: black;
`

export const MovieImage = styled.img<{
  src: string;
  alt: string;
}>`
  src: ${({src}) => src};
  alt: ${({alt}) => alt};
  width: 100%;
`