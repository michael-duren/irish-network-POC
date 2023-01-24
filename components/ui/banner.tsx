import Image from 'next/image';
import classNames from 'classnames';

import styles from './banner.module.css';

type BannerProps = {
  imagePath: string;
  title: string;
  titleColor: 'white' | 'green';
};

export default function Banner({ imagePath, title, titleColor }: BannerProps) {
  let chosenColor;

  switch (titleColor) {
    case 'white':
      chosenColor = styles.white;
      break;
    case 'green':
      chosenColor = styles.green;
      break;
    default:
      chosenColor = styles.black;
      break;
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.landingImage}
        src={imagePath}
        alt={`${title} background image`}
        height={3000}
        width={3000}
      />
      <h1
        style={{ color: `${titleColor}` }}
        className={classNames(chosenColor, styles.landingText)}
      >
        {title}
      </h1>
    </div>
  );
}
