import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  heigth: 420px; // More or less one per mobile view
  width: 320px;
  background-color: #fff;
  box-shadow: 0px 0px 10px black;
  transition: all 0.2s ease;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px grey;
  }
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