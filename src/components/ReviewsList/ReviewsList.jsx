import Container from '../Container/Container';
import Section from '../Section/Section';
import s from './ReviewsList.module.css';

export default function ReviewsList({ reviews }) {
  return (
    <Section>
      <Container>
        {reviews &&
          reviews.map(review => (
            <div key={review.id}>
              <h2 className={s.title}>{review.author}</h2>
              <p className={s.text}>{review.content}</p>
            </div>
          ))}

        {reviews.length === 0 && <p>No Reviews</p>}
      </Container>
    </Section>
  );
}
