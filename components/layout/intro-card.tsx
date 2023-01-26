import { Poppins } from '@next/font/google';
import classNames from 'classnames';
import styles from './intro-card.module.css';

import { GiClover } from 'react-icons/gi';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400'],
});

export default function IntroCard() {
  return (
    <article className={classNames(styles.article, poppins.className)}>
      <div className={styles.item}>
        <h2>Welcome</h2>
        <div className={styles.clover}>
          <GiClover />
        </div>
      </div>
      <div className={styles.item}>
        <h2>
          <span className={classNames(styles.red)}>Who</span> We Are
        </h2>
        <p>
          An irish fellowship based in Twin-Cities Minnesota Cupidatat culpa
          culpa Lorem minim duis eu reprehenderit velit occaecat.
        </p>
      </div>
      <div className={styles.item}>
        <h2>
          <span className={styles.red}>Our</span> Mission
        </h2>
        <p>
          Irish Network Minnesota creates opportunites for those in our
          community to conenct, professionally and socially, with our culture
          and heritage
        </p>
      </div>
    </article>
  );
}
