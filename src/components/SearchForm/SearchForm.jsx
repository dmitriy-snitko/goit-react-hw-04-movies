export default function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="query" autoComplete="off" />
      <button type="submit">Search</button>
    </form>
  );
}
