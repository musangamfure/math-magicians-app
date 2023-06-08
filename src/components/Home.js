import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { TiSocialLinkedin } from 'react-icons/ti';
import { VscTwitter } from 'react-icons/vsc';
import styles from './styles/Home.module.css';

const Home = () => {
  const random = 'radom';
  return (
    <div className={styles.showcase}>
      <h3 className={styles.welcome}>Welcome to our page!</h3>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        quidem? Doloribus doloremque id, magni unde quibusdam omnis provident
        debitis. Incidunt deserunt consequatur, numquam placeat asperiores id
        {' '}
        {random}
        {' '}
        ipsum? Labore atque velit error distinctio nam iusto
        voluptatem! At, hic. Temporibus consectetur, debitis eum vero,
        reiciendis corporis, sapiente iusto magnam ullam voluptates ea! ipsum?
        Labore atque velit error distinctio
      </p>
      <span className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        vero recusandae ratione magni corporis odio consequatur eos. Illum, ut
        perferendis. ipsum? Labore atque velit error distinctio nam iusto
        voluptatem! At, hic. Temporibus consectetur, debitis eum vero,
        reiciendis corporis, sapiente iusto magnam ullam voluptates ea!
      </span>
      <div className={styles.center}>
        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/musangamfure"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/musangamfurae"
              className={styles.socialLink}
            >
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/musangamfure"
              className={styles.socialLink}
            >
              <VscTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
