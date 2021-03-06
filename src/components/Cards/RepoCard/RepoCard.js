import React, { useEffect } from 'react';
import './RepoCard.css';
import { useSearch, useRepos } from '../../../store/state'
import axios from 'axios';


const RepoCard = () => {
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
        <div className="resultsList">
            <h3>Your results show {repos.total_count ? repos?.total_count : 0} repositories</h3>
            {repos?.items?.map(item => {
                return (
                    <div class="repoCard">
                        <a href={item.html_url} target="_blank" class="repoName">{item.name}</a>
                        <p class="repoDescription">{item.description ? `${item.description}` : 'No description available'}</p>
                        <div class="bottomContent">
                            <p class="bottomItem">{item.stargazers_count} Stars</p>
                            <p class="bottomItem">{item.language}</p>
                            <p class="bottomItem">Updated on {item.updated_at}</p>            
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default RepoCard;
