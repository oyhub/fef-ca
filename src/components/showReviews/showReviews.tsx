import { Review } from '../api/getData/getData.tsx';

type ItemReview = {
  reviews: Review[];
}

export function ShowReviews( {reviews}: ItemReview ) {

  const latestReviews = reviews.slice(-5);
  if (!latestReviews.length) return null;
  return (
    <>
      <h2 className="mt-8 mb-1 text-primary text-lg font-semibold uppercase">Ratings:</h2>
    {latestReviews.map((review, index) => (
      <div key={index} className="mb-3">
        <p><span className="font-semibold">Rating:</span> {review.rating}</p>
        <p><span className="font-semibold">Username:</span> {review.username}</p>
        <div>
          <span className="font-semibold">Description:</span>
          <p>{review.description}</p>
        </div>
      </div>
      ))}
    </>
  )
}

export default ShowReviews