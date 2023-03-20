import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  type: text;
`;

export const SearchButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid black;
  color: black;
  cursor: pointer;
`;
