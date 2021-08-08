import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/api';
import ReviewsList from '../ReviewsList/ReviewsList';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews && <ReviewsList reviews={reviews} />;
}
