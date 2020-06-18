import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: white;
  border: 1px solid grey;
  padding: 0.3rem;
`;

const Search = () => {
  return (
    <header>
      <form>
        <Input
          onChange={e => console.log(e.target.value)}
          type="text"
          name="name"
          placeholder="Search"
        />
      </form>
    </header>
  );
};

export default Search;
