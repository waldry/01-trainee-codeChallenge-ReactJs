import { useEffect, useState } from "react";
import Books from "./components/Books";
import Search from "./components/Search";
import BookForm from "./components/BookForm";
import "./App.css";

const API_URL = "https://potterapi-fedeperin.vercel.app/en/books";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newBook, setNewBook] = useState({
    number: 0,
    title: "",
    originalTitle: "",
    description: "",
    pages: 0,
    cover: "",
    index: 0,
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleShowForm = () => {
    setIsModalVisible(true);
  };

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(search);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]:
        name === "number" || name === "pages" || name == "index"
          ? Number(value)
          : value,
    }));
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <button onClick={handleShowForm}>Show Form</button>
      <h1>List of Harry Potter books:</h1>
      <Books books={filteredBooks} />
      {isModalVisible && (
        <BookForm
          formValue={newBook}
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        />
      )}
    </>
  );
}

export default App;
