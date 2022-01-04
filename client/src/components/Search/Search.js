import './Search.css'

const Search = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="displayedProducts_searchbar"
        onChange={(e) => props.handleSearch(e.target.value)}
        placeholder="Search"
        type="text"
      />
    </form>
  );
};

export default Search;
