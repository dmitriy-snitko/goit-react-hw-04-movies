import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
