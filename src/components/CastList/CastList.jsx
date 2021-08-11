import noImage from '../../images/noImage.jpg';
import Section from '../Section/Section';
import Container from '../Container/Container';
import s from './CastList.module.css';

export default function CastList({ actors }) {
  return (
    <Section>
      <Container>
        <ul className={s.list}>
          {actors.map(actor => (
            <li key={actor.id}>
              <div>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className={s.img}
                  />
                ) : (
                  <img src={noImage} alt={actor.name} className={s.img} />
                )}

                <p className={s.name}>{actor.name}</p>
                <p className={s.character}>
                  <span className={s.title}>Character:</span> {actor.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
