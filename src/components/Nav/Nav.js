import React from 'react';
import './Nav.css';
import { useSearch } from '../../store/state'

export const Nav = () => {
  const [search, setSearch] = useSearch();

  return (
    <div className='nav'>
      <p className='header'>Home</p>
      <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search' />
    </div>
  );
}
