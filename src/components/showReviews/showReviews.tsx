import { Review } from '../api/getData/getData.tsx';

type ItemReview = {
  reviews: Review[];
}

export function ShowReviews( {reviews}: ItemReview ) {

  const latestReviews = reviews.slice(-5);

  return (
    <>
    {latestReviews.map((review, index) => (
      <div key={index}>
        <p>Rating: {review.rating}</p>
        <p>Username: {review.username}</p>
        <div>
          <span>Description:</span>
          <p>{review.description}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default ShowReviews