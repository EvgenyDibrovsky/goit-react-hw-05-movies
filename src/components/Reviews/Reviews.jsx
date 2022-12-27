import { ReviewsTitle, ReviewsTexst } from './Reviews.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <div>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsTexst>{content}</ReviewsTexst>
          </div>
        </li>
      ))}
    </ul>
  );
};
