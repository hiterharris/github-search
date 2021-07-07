import RepoCard from '../Cards/RepoCard/RepoCard'
import './Results.css';

export const Results = (props) => {
  const { repos } = props
  return (
    <div className="RepoCard">
      <RepoCard repos={repos} />
    </div>
  );
}
