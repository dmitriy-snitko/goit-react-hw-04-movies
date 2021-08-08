export default function ReviewsList({ reviews }) {
  return (
    <>
      {reviews &&
        reviews.map(review => (
          <div key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </div>
        ))}

      {reviews.length === 0 && <p>No Reviews</p>}
    </>
  );
}
