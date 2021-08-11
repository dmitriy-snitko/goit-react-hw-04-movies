import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <input name="query" autoComplete="off" className={s.input} />
      <button type="submit">Search</button>
    </form>
  );
}
