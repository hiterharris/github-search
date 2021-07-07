import React from 'react';
import './RepoCard.css';

const RepoCard = (props) => {
    const { repos } = props
    return (
        <div className="resultsList">
            <h3>Your results show {repos.total_count ? repos?.total_count : 0} repositories</h3>
            {repos?.items?.map(item => {
                return (
                    <div class="repoCard">
                        <a href={item.html_url} target="_blank" class="repoName">{item.name}</a>
                        <p class="repoDescription">{item.description ? `${item.description}` : 'No description available'}</p>
                        <div class="bottomContent">
                            <p class="bottomItem">{item.stars} Stars</p>
                            <p class="bottomItem">{item.language}</p>
                            <p class="bottomItem">Updated on {item.updated}</p>            
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default RepoCard;
