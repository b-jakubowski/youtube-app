import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  background-color: white;
  border: 1px solid grey;
  padding: 0.3rem;
`;

const Search = ({ setSearchValue }) => {
  return (
    <header>
      <form>
        <Input
          onChange={e => setSearchValue(e.target.value)}
          type="text"
          name="name"
          placeholder="Search"
        />
      </form>
    </header>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func
};

export default Search;
