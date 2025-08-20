export default function Search({ search, setSearch }) {
  return (
    <label>
      Search:
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </label>
  );
}
