const Sort = (props) => {
  const handleSort = (e) => {
    props.handleSort(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => handleSort(e)}>
        <option selected disabled>
          Sort By:
        </option>
        <option value="alpha-ascending">Alphabetically A-Z</option>
        <option value="alpha-descending">Alphabetically Z-A</option>
        <option value="price-ascending">Price low to high</option>
        <option value="price-descending">Price, high to low</option>
      </select>
    </form>
  );
};

export default Sort;
