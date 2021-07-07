import React from 'react';

const IssuesCard = (props) => {
    const { repos } = props
    return (
        <div className="resultsList">
            <h3>Your results show {repos.total_count ? repos?.total_count : 0} repositories</h3>
            {repos?.items?.map(item => {
                console.log(item)
                return (
                    <div class="repoCard">
                        {/* <a href={item.html_url} target="_blank" class="repoName">{item.name}</a>
                        <p class="repoDescription">{item.description ? `${item.description}` : 'No description available'}</p>
                        <div class="bottomContent">
                            <p class="bottomItem">{item.stargazers_count} Stars</p>
                            <p class="bottomItem">{item.language}</p>
                            <p class="bottomItem">Updated on {item.updated_at}</p>            
                        </div> */}
                        <div class="p-2 border-bottom">
                            <p class="m-0 ml-4">{{ user }}</p>
                            <a target="_blank" class="m-0 ml-4" v-bind:href="url">{{ title }}</a>
                            <div class="d-flex m-0 ml-4 mb-1">
                                <p class="m-0">{{ user }} opened {{ created }}</p>          
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default IssuesCard;
