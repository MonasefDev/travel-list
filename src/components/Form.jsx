import { useState } from 'react';

function Form() {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, item]);
    setItem('');
    console.log([...data, item]);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select name="select" id="select">
        {Array(20)
          .fill('')
          .map((option, index) => (
            <option value={index + 1}>{index + 1}</option>
          ))}
      </select>
      <input
        value={item}
        type="text"
        placeholder="Item..."
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
