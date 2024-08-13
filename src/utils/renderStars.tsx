import styles from "./utils.module.scss";
const getStarRating = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return {
    fullStars,
    halfStar,
    emptyStars,
  };
};

export const renderStarRating = (rating: number) => {
  const { fullStars, halfStar, emptyStars } = getStarRating(rating);

  return (
    <div className={styles.star}>
      {Array(fullStars).fill(<span className={styles.full}>★</span>)}
      {halfStar ? <span className={styles.half}>★</span> : null}
      {Array(emptyStars).fill(<span className={styles.empty}>★</span>)}
    </div>
  );
};
