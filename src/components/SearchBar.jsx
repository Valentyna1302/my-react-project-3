import { useState } from 'react';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();

    console.log(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setValue(e.target.value)} value={value} type='text' />
        <button>Search</button>
      </form>
    </div>
  );
};
export default SearchBar;
