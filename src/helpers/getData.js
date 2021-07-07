import axios from 'axios';

const getData = (props) => {
    const { search, setRepos } = props
    
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
        .then(function (response) {
            setRepos(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

}

export default getData;
