import React from 'react';
import { getImageUrl } from '../../utils/utils';
import { AboutCardProps } from '../../types/types';
import styles from './AboutCard.module.scss';

const AboutCard: React.FC<AboutCardProps> = ({
  name,
  image,
  views,
  description,
}) => {
  return (
    <div className={styles.aboutCard}>
      <img alt={name} src={getImageUrl(image)} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.views}>{views}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
