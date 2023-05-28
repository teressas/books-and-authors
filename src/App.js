import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  /*
  useEffect to make fetch call to api
store the data in a useState var

useState var input stores title or author

take in input 
if input is not empty
  use the api data to find the book title or author that contains chars in input
  store the elements that match the condition in an array
  use state var filtered to store the new array
else alert input is empty

if input.length > 0 
  if filtered.length > 0 iterate filtered and display data as a list in return
  else display no results found

else
iterate data and display data as a list in return
  */
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState('');
  // const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault;
    if (input.length > 0) {
      // setClicked(true);
      const newData = books.filter((book) => {
        for (let a of book.authors) {
          if (a.name.includes(input)) {
            return a.name.includes(input);
          }
        }
        return book.title.includes(input) && true;
      });
      if (filter.length == 0) setLoading('No Results');
      setFilter(newData);
    } else {
      alert('Input is empty');
    }
    setInput('');
  };
  const selectBook = (book) => {
    setInput(book.title);
    setFilter(book);
  };

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/world.json')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.works);
        // setFilter(data.works);
      })
      .catch((err) => setLoading(false));
  }, []);

  console.log(input, filter, loading);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="input" onChange={changeHandler} />
        <button>Search</button>
      </form>
      {filter.length > 0 ? (
        <ul>
          {filter.map((book, i) => (
            <li
              key={i}
              onClick={() => selectBook(book)}
              style={{ border: book.title == input && '1px solid red' }}
            >
              <p>{book.title}</p>
              <ul>
                {book.authors.map((a, j) => (
                  <li key={j}>{a.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : books.length > 0 ? (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <p>{book.title}</p>
              <ul>
                {book.authors.map((a, j) => (
                  <li key={j}>{a.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>{loading}</p>
      )}
    </div>
  );
}
