import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav, Results } from './components'
import { useSearch, useRepos } from './store/state'
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useSearch();
  const [repos, setRepos] = useRepos();

  useEffect(() => {
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
    .then(function (response) {
        setRepos(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
  }, [search])

  return (
    <div className="App">
      <Nav />
      <Results repos={repos} />
    </div>
  );
}

export default App;
