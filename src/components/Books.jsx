export default function Books({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.index} style={{ listStyleType: "none" }}>
          {book.title}
        </li>
      ))}
    </ul>
  );
}
