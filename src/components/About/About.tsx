import { getImageUrl } from '../../utils/utils';
import AboutCard from './AboutCard';
import about from '../../data/about.json';
import owners from '../../data/owners.json';
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './About.module.scss';

const About = () => {
  const renderIcon = (platform: string): IconDefinition => {
    switch (platform) {
      case 'linkedin':
        return faLinkedin;
      case 'instagram':
        return faInstagram;
      case 'twitter':
        return faTwitter;
      default:
        return faLinkedin;
    }
  };
  return (
    <section className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.aboutImg}
            src={getImageUrl('about/about.png')}
            alt='about'
          />
        </div>
      </div>
      <div className={styles.aboutCards}>
        {about.map((product) => (
          <div className={styles.about} key={product.id}>
            <AboutCard
              key={product.id}
              image={product.image}
              views={product.views}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <div className={styles.owners}>
        {owners.map((member) => (
          <div className={styles.owner} key={member.id}>
            <img
              alt={member.name}
              src={getImageUrl(member.image)}
              className={styles.image}
            />
            <div className={styles.details}>
              <h2 className={styles.name}>{member.name}</h2>
              <p className={styles.position}>{member.position}</p>
              <div className={styles.socialIcons}>
                {member.connection.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={renderIcon(item.platform)} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
