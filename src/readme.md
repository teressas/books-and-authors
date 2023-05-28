- Make a GET request to "https://openlibrary.org/subjects/world.json"

- Display a list of cards showing each book's title and author

- Create an input field at the top that filters both title OR author

- When a user clicks on a book, highlight its border in red and display that card at the top

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

