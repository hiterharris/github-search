import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav } from './components'
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
      <div className="resultsList">
        {repos?.items?.map(item => {
          return (
            <div class="p-2 pl-4 border-bottom">
            <a target="_blank" class="m-0 ml-2">{item.name}</a>
            <p class="m-0 ml-2" v-if="description">{item.description}</p>
            <p class="m-0 ml-2" v-else>No description available</p>
            <div class="d-flex mt-1 mb-1">
                <p class="m-0 ml-2">{item.stars} Stars</p>
                <p class="pl-4 m-0 ml-2">{item.language}</p>
                <p class="pl-4 m-0 ml-2">Updated on {item.updated}</p>            
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
